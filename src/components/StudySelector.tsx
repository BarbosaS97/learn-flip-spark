import React, { useEffect } from 'react';
import { Study, useStudy } from '@/contexts/StudyContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Settings, BookOpen, ArrowRight } from 'lucide-react';
import { defaultStudies } from '@/data/defaultStudies';

interface StudySelectorProps {
  onSelectStudy: (study: Study) => void;
  onOpenFavorites: () => void;
  onOpenAdmin: () => void;
}

export const StudySelector: React.FC<StudySelectorProps> = ({ 
  onSelectStudy, 
  onOpenFavorites, 
  onOpenAdmin 
}) => {
  const { studies, addStudy, favorites } = useStudy();

  // Initialize with default studies if empty
  useEffect(() => {
    if (studies.length === 0) {
      defaultStudies.forEach(study => addStudy(study));
    }
  }, [studies.length, addStudy]);

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Sistema de Flashcards
          </h1>
          <p className="text-muted-foreground text-lg">
            Escolha um estudo para começar
          </p>
        </div>

        <div className="flex gap-4 mb-8 justify-center">
          <Button 
            onClick={onOpenFavorites}
            variant="outline"
            className="flex items-center gap-2"
            disabled={favorites.length === 0}
          >
            <Heart className="w-4 h-4" />
            Favoritos ({favorites.length})
          </Button>
          
          <Button 
            onClick={onOpenAdmin}
            variant="outline"
            className="flex items-center gap-2"
          >
            <Settings className="w-4 h-4" />
            Administrar
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {studies.map((study) => (
            <Card 
              key={study.id} 
              className="subject-card group hover:scale-105"
              onClick={() => onSelectStudy(study)}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <BookOpen className="w-8 h-8 text-primary" />
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <CardTitle className="text-xl">{study.name}</CardTitle>
                <CardDescription>
                  {study.subjects.length} matérias disponíveis
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.subjects.slice(0, 3).map((subject) => (
                    <Badge key={subject.id} variant="secondary" className="text-xs">
                      {subject.name}
                    </Badge>
                  ))}
                  {study.subjects.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{study.subjects.length - 3} mais
                    </Badge>
                  )}
                </div>
                
                <div className="text-sm text-muted-foreground">
                  Total: {study.subjects.reduce((acc, subject) => acc + subject.cards.length, 0)} flashcards
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {studies.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-medium mb-2">Nenhum estudo disponível</h3>
            <p className="text-muted-foreground mb-4">
              Use o painel de administração para criar novos estudos
            </p>
            <Button onClick={onOpenAdmin}>
              <Settings className="w-4 h-4 mr-2" />
              Administrar Estudos
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};