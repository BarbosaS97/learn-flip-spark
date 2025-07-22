import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, Home, Heart } from 'lucide-react';
import { Subject, Flashcard } from '@/data/flashcards';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { useIsMobile } from '@/hooks/use-mobile';
import { useStudy } from '@/contexts/StudyContext';

interface FlashcardViewProps {
  subjects: Subject[];
  onBack: () => void;
}

export const FlashcardView: React.FC<FlashcardViewProps> = ({ subjects, onBack }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const isMobile = useIsMobile();
  const { toggleFavorite, isFavorite } = useStudy();

  // Combine all cards from selected subjects
  const allCards = subjects.flatMap(subject => subject.cards);
  const totalCards = allCards.length;
  const currentCard = allCards[currentCardIndex];
  const progress = ((currentCardIndex + 1) / totalCards) * 100;

  const nextCard = useCallback(() => {
    if (currentCardIndex < totalCards - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
    }
  }, [currentCardIndex, totalCards]);

  const previousCard = useCallback(() => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFlipped(false);
    }
  }, [currentCardIndex]);

  const flipCard = useCallback(() => {
    setIsFlipped(!isFlipped);
  }, [isFlipped]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          previousCard();
          break;
        case 'ArrowRight':
          nextCard();
          break;
        case ' ':
          e.preventDefault();
          flipCard();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextCard, previousCard, flipCard]);

  // Touch controls
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setTouchStart({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;

    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStart.x;
    const deltaY = touch.clientY - touchStart.y;
    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);

    // Only process horizontal swipes if they're more significant than vertical
    if (absDeltaX > absDeltaY && absDeltaX > 50) {
      if (deltaX > 0) {
        previousCard();
      } else {
        nextCard();
      }
    }

    setTouchStart(null);
  };

  const handleMobileFlipClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Check if click is in the top-right corner (flip zone)
    if (x > rect.width * 0.8 && y < rect.height * 0.2) {
      flipCard();
    }
  };

  if (!currentCard) return null;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-muted/30 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Button
          variant="outline"
          onClick={onBack}
          className="flex items-center gap-2"
        >
          <Home className="w-4 h-4" />
          Matérias
        </Button>
        
        <div className="text-center flex-1 mx-4">
          <h1 className="text-xl font-semibold text-foreground">
            {subjects.map(s => s.name).join(', ')}
          </h1>
          <p className="text-muted-foreground">
            {currentCardIndex + 1} de {totalCards}
          </p>
        </div>
        
        <Button
          variant="outline"
          onClick={() => {
            setCurrentCardIndex(0);
            setIsFlipped(false);
          }}
          className="flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          Reiniciar
        </Button>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <Progress value={progress} className="h-2" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-4xl">
          {/* Desktop Controls */}
          {!isMobile && (
            <div className="flex items-center gap-4 mb-6 justify-center">
              <Button
                variant="outline"
                onClick={previousCard}
                disabled={currentCardIndex === 0}
                className="nav-button"
              >
                <ChevronLeft className="w-4 h-4" />
                Anterior
              </Button>
              
              <div className="flex items-center gap-2">
                <Button
                  onClick={() => toggleFavorite(currentCard.id.toString())}
                  variant="outline"
                  className={isFavorite(currentCard.id.toString()) ? 'text-red-500' : ''}
                >
                  <Heart className={`w-4 h-4 ${isFavorite(currentCard.id.toString()) ? 'fill-current' : ''}`} />
                </Button>
                
                <Button
                  onClick={flipCard}
                  variant="outline"
                  className="px-8"
                >
                  {isFlipped ? 'Ver Pergunta' : 'Ver Resposta'}
                </Button>
              </div>
              
              <Button
                variant="outline"
                onClick={nextCard}
                disabled={currentCardIndex === totalCards - 1}
                className="nav-button"
              >
                Próximo
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}

          {/* Flashcard */}
          <div className="relative">
            <div
              className={`flashcard ${isFlipped ? 'flipped' : ''}`}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onClick={isMobile ? handleMobileFlipClick : flipCard}
            >
              <div className="flashcard-inner">
                {/* Front of card */}
                <div className="flashcard-face">
                  <div className="w-full">
                    <div className="text-center mb-4">
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        Pergunta
                      </span>
                    </div>
                    <h2 className="flashcard-text text-foreground">
                      {currentCard.question}
                    </h2>
                  </div>
                </div>

                {/* Back of card */}
                <div className="flashcard-face flashcard-back">
                  <div className="w-full">
                    <div className="text-center mb-4">
                      <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                        Resposta
                      </span>
                    </div>
                    <p className="flashcard-answer text-foreground">
                      {currentCard.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile flip indicator */}
            {isMobile && (
              <>
                <div className="mobile-control">
                  <RotateCcw className="w-5 h-5 text-muted-foreground" />
                </div>
                
                {/* Favorite Control - Top Left */}
                <div 
                  className="absolute top-4 left-4 w-12 h-12 rounded-full flex items-center justify-center bg-card/90 backdrop-blur-lg shadow-lg cursor-pointer"
                  onClick={() => toggleFavorite(currentCard.id.toString())}
                >
                  <Heart className={`w-5 h-5 ${isFavorite(currentCard.id.toString()) ? 'fill-current text-red-500' : 'text-primary'}`} />
                </div>
              </>
            )}
          </div>

          {/* Mobile Controls */}
          {isMobile && (
            <div className="flex items-center justify-between mt-6">
              <Button
                variant="outline"
                onClick={previousCard}
                disabled={currentCardIndex === 0}
                className="nav-button flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Anterior
              </Button>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Arraste para navegar
                </p>
                <p className="text-xs text-muted-foreground">
                  Toque no canto ↗ para virar
                </p>
              </div>
              
              <Button
                variant="outline"
                onClick={nextCard}
                disabled={currentCardIndex === totalCards - 1}
                className="nav-button flex items-center gap-2"
              >
                Próximo
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};