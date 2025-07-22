import React, { useState } from 'react';
import { Check, Play, BookOpen, ArrowLeft } from 'lucide-react';
import { Subject } from '@/data/flashcards';
import { useStudy } from '@/contexts/StudyContext';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface SubjectSelectorProps {
  subjects: Subject[];
  onStartStudy: (selectedSubjects: Subject[]) => void;
  onBack?: () => void;
}

export const SubjectSelector: React.FC<SubjectSelectorProps> = ({ subjects, onStartStudy, onBack }) => {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const { currentStudy } = useStudy();
  
  // Use subjects from current study if available
  const availableSubjects = currentStudy ? currentStudy.subjects : subjects;

  const toggleSubject = (subjectId: string) => {
    setSelectedSubjects(prev => 
      prev.includes(subjectId) 
        ? prev.filter(id => id !== subjectId)
        : [...prev, subjectId]
    );
  };

  const handleStartStudy = () => {
    const selected = availableSubjects.filter(subject => selectedSubjects.includes(subject.id));
    if (selected.length > 0) {
      onStartStudy(selected);
    }
  };

  const totalCards = selectedSubjects.reduce((total, subjectId) => {
    const subject = availableSubjects.find(s => s.id === subjectId);
    return total + (subject?.cards.length || 0);
  }, 0);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-muted/30 p-4">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        {onBack && (
          <Button onClick={onBack} variant="outline" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
        )}
        <div className="text-center flex-1">
          <h1 className="text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
            <BookOpen className="w-10 h-10 text-primary" />
            {currentStudy ? currentStudy.name : 'Sistema de Flashcards'}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Selecione uma ou mais matérias para começar a estudar. Use as setas do teclado ou gestos touch para navegar.
          </p>
        </div>
      </div>

      {/* Subject Grid */}
      <div className="flex-1 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {availableSubjects.map((subject) => {
            const isSelected = selectedSubjects.includes(subject.id);
            
            return (
              <div
                key={subject.id}
                className={`subject-card ${isSelected ? 'selected' : ''}`}
                onClick={() => toggleSubject(subject.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{subject.icon}</span>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">
                        {subject.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {subject.description}
                      </p>
                    </div>
                  </div>
                  
                  {isSelected && (
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center animate-bounce-in">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                  )}
                </div>
                
                <div className="space-y-2">
                  <div className={`w-full h-2 bg-muted rounded-full overflow-hidden`}>
                    <div 
                      className={`h-full bg-gradient-to-r ${subject.color} transition-all duration-500`}
                      style={{ width: isSelected ? '100%' : '0%' }}
                    />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" className="text-xs">
                      {subject.cards.length} cards
                    </Badge>
                    
                    {isSelected && (
                      <Badge variant="default" className="text-xs bg-primary/10 text-primary">
                        Selecionado
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Bar */}
        <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-lg">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h3 className="font-semibold text-foreground">
                {selectedSubjects.length > 0 
                  ? `${selectedSubjects.length} matéria${selectedSubjects.length !== 1 ? 's' : ''} selecionada${selectedSubjects.length !== 1 ? 's' : ''}`
                  : 'Nenhuma matéria selecionada'
                }
              </h3>
              <p className="text-muted-foreground text-sm">
                {totalCards > 0 
                  ? `${totalCards} flashcards para estudar`
                  : 'Selecione pelo menos uma matéria para começar'
                }
              </p>
            </div>
            
            <Button
              onClick={handleStartStudy}
              disabled={selectedSubjects.length === 0}
              className="nav-button flex items-center gap-2 text-lg px-8 py-3"
              size="lg"
            >
              <Play className="w-5 h-5" />
              Começar Estudo
            </Button>
          </div>
        </div>
      </div>

      {/* Help Text */}
      <div className="text-center mt-8 text-muted-foreground text-sm">
        <p>💡 Dica: Você pode selecionar múltiplas matérias para uma sessão de estudo mista</p>
      </div>
    </div>
  );
};