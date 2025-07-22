import React, { createContext, useContext, useState, useEffect } from 'react';
import { Subject, Flashcard } from '@/data/flashcards';

export interface Study {
  id: string;
  name: string;
  subjects: Subject[];
}

interface StudyContextType {
  studies: Study[];
  favorites: string[];
  currentStudy: Study | null;
  setCurrentStudy: (study: Study | null) => void;
  addStudy: (study: Study) => void;
  updateStudy: (study: Study) => void;
  deleteStudy: (studyId: string) => void;
  toggleFavorite: (cardId: string) => void;
  isFavorite: (cardId: string) => boolean;
  getFavoriteCards: () => Flashcard[];
}

const StudyContext = createContext<StudyContextType | undefined>(undefined);

export const useStudy = () => {
  const context = useContext(StudyContext);
  if (!context) {
    throw new Error('useStudy must be used within a StudyProvider');
  }
  return context;
};

export const StudyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [studies, setStudies] = useState<Study[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [currentStudy, setCurrentStudy] = useState<Study | null>(null);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedStudies = localStorage.getItem('flashcard_studies');
    const savedFavorites = localStorage.getItem('flashcard_favorites');
    
    if (savedStudies) {
      setStudies(JSON.parse(savedStudies));
    }
    
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save studies to localStorage
  useEffect(() => {
    localStorage.setItem('flashcard_studies', JSON.stringify(studies));
  }, [studies]);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem('flashcard_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addStudy = (study: Study) => {
    setStudies(prev => [...prev, study]);
  };

  const updateStudy = (study: Study) => {
    setStudies(prev => prev.map(s => s.id === study.id ? study : s));
  };

  const deleteStudy = (studyId: string) => {
    setStudies(prev => prev.filter(s => s.id !== studyId));
    if (currentStudy?.id === studyId) {
      setCurrentStudy(null);
    }
  };

  const toggleFavorite = (cardId: string) => {
    setFavorites(prev => 
      prev.includes(cardId) 
        ? prev.filter(id => id !== cardId)
        : [...prev, cardId]
    );
  };

  const isFavorite = (cardId: string) => {
    return favorites.includes(cardId);
  };

  const getFavoriteCards = (): Flashcard[] => {
    const allCards: Flashcard[] = [];
    studies.forEach(study => {
      study.subjects.forEach(subject => {
        subject.cards.forEach(card => {
          if (favorites.includes(card.id.toString())) {
            allCards.push(card);
          }
        });
      });
    });
    return allCards;
  };

  return (
    <StudyContext.Provider value={{
      studies,
      favorites,
      currentStudy,
      setCurrentStudy,
      addStudy,
      updateStudy,
      deleteStudy,
      toggleFavorite,
      isFavorite,
      getFavoriteCards
    }}>
      {children}
    </StudyContext.Provider>
  );
};