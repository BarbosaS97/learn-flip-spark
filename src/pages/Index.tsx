import React, { useState } from 'react';
import { Subject } from '@/data/flashcards';
import { StudyProvider } from '@/contexts/StudyContext';
import { StudySelector } from '@/components/StudySelector';
import { SubjectSelector } from '@/components/SubjectSelector';
import { FlashcardView } from '@/components/FlashcardView';
import { FavoritesView } from '@/components/FavoritesView';
import { AdminPanel } from '@/components/AdminPanel';
import { AuthModal } from '@/components/AuthModal';

type ViewMode = 'studies' | 'subjects' | 'study' | 'favorites' | 'admin';

const Index = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('studies');
  const [selectedSubjects, setSelectedSubjects] = useState<Subject[]>([]);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleSelectStudy = (study: any) => {
    setViewMode('subjects');
  };

  const handleStartStudy = (subjects: Subject[]) => {
    setSelectedSubjects(subjects);
    setViewMode('study');
  };

  const handleBackToStudies = () => {
    setViewMode('studies');
    setSelectedSubjects([]);
  };

  const handleBackToSubjects = () => {
    setViewMode('subjects');
    setSelectedSubjects([]);
  };

  const handleOpenFavorites = () => {
    setViewMode('favorites');
  };

  const handleOpenAdmin = () => {
    setIsAuthModalOpen(true);
  };

  const handleAuthSuccess = () => {
    setViewMode('admin');
  };

  const renderCurrentView = () => {
    switch (viewMode) {
      case 'studies':
        return (
          <StudySelector 
            onSelectStudy={handleSelectStudy}
            onOpenFavorites={handleOpenFavorites}
            onOpenAdmin={handleOpenAdmin}
          />
        );
      case 'subjects':
        return (
          <SubjectSelector 
            subjects={[]} // Will be populated by StudyContext
            onStartStudy={handleStartStudy}
            onBack={handleBackToStudies}
          />
        );
      case 'study':
        return (
          <FlashcardView 
            subjects={selectedSubjects} 
            onBack={handleBackToSubjects}
          />
        );
      case 'favorites':
        return (
          <FavoritesView 
            onBack={handleBackToStudies}
          />
        );
      case 'admin':
        return (
          <AdminPanel 
            onBack={handleBackToStudies}
          />
        );
      default:
        return null;
    }
  };

  return (
    <StudyProvider>
      {renderCurrentView()}
      
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={handleAuthSuccess}
      />
    </StudyProvider>
  );
};

export default Index;
