import React, { useState } from 'react';
import { subjects, Subject } from '@/data/flashcards';
import { SubjectSelector } from '@/components/SubjectSelector';
import { FlashcardView } from '@/components/FlashcardView';

type ViewMode = 'selection' | 'study';

const Index = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('selection');
  const [selectedSubjects, setSelectedSubjects] = useState<Subject[]>([]);

  const handleStartStudy = (subjects: Subject[]) => {
    setSelectedSubjects(subjects);
    setViewMode('study');
  };

  const handleBackToSelection = () => {
    setViewMode('selection');
    setSelectedSubjects([]);
  };

  if (viewMode === 'study') {
    return (
      <FlashcardView 
        subjects={selectedSubjects} 
        onBack={handleBackToSelection}
      />
    );
  }

  return (
    <SubjectSelector 
      subjects={subjects} 
      onStartStudy={handleStartStudy}
    />
  );
};

export default Index;
