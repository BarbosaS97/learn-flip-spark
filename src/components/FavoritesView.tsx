import React, { useState } from 'react';
import { useStudy } from '@/contexts/StudyContext';
import { FlashcardView } from './FlashcardView';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Heart } from 'lucide-react';

interface FavoritesViewProps {
  onBack: () => void;
}

export const FavoritesView: React.FC<FavoritesViewProps> = ({ onBack }) => {
  const { getFavoriteCards, favorites } = useStudy();
  const [showFlashcards, setShowFlashcards] = useState(false);
  
  const favoriteCards = getFavoriteCards();

  if (showFlashcards && favoriteCards.length > 0) {
    // Create a virtual subject with favorite cards
    const favoriteSubject = {
      id: 'favorites',
      name: 'Favoritos',
      color: 'bg-red-500',
      icon: '❤️',
      description: 'Seus cards favoritos',
      cards: favoriteCards
    };

    return (
      <FlashcardView 
        subjects={[favoriteSubject]} 
        onBack={() => setShowFlashcards(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Button onClick={onBack} variant="outline" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Heart className="w-8 h-8 text-red-500 fill-current" />
            Cards Favoritos
          </h1>
        </div>

        {favoriteCards.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-medium mb-2">Nenhum card favoritado</h3>
            <p className="text-muted-foreground">
              Favorite cards durante o estudo para vê-los aqui
            </p>
          </div>
        ) : (
          <div className="text-center">
            <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-2xl p-8 mb-8">
              <Heart className="w-12 h-12 text-red-500 fill-current mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">
                {favoriteCards.length} Cards Favoritos
              </h3>
              <p className="text-muted-foreground mb-6">
                Revise seus cards favoritos para reforçar o aprendizado
              </p>
              <Button 
                onClick={() => setShowFlashcards(true)}
                size="lg"
                className="px-8"
              >
                Começar Revisão
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {favoriteCards.slice(0, 6).map((card, index) => (
                <div key={card.id.toString()} className="p-4 border rounded-lg bg-card">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-sm font-medium text-muted-foreground">
                      Card #{index + 1}
                    </span>
                    <Heart className="w-4 h-4 text-red-500 fill-current" />
                  </div>
                  <p className="text-sm line-clamp-3">
                    {card.question}
                  </p>
                </div>
              ))}
            </div>

            {favoriteCards.length > 6 && (
              <p className="text-muted-foreground mt-4">
                E mais {favoriteCards.length - 6} cards...
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};