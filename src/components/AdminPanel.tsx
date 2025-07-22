import React, { useState } from 'react';
import { Study, useStudy } from '@/contexts/StudyContext';
import { Subject, Flashcard } from '@/data/flashcards';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Plus, Edit, Trash2, Save, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AdminPanelProps {
  onBack: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ onBack }) => {
  const { studies, addStudy, updateStudy, deleteStudy } = useStudy();
  const { toast } = useToast();
  const [editingStudy, setEditingStudy] = useState<Study | null>(null);
  const [newStudyName, setNewStudyName] = useState('');
  const [editingSubject, setEditingSubject] = useState<Subject | null>(null);
  const [newCard, setNewCard] = useState<{ question: string; answer: string }>({ question: '', answer: '' });

  const handleCreateStudy = () => {
    if (!newStudyName.trim()) {
      toast({
        title: "Erro",
        description: "Nome do estudo é obrigatório",
        variant: "destructive"
      });
      return;
    }

    const newStudy: Study = {
      id: Date.now().toString(),
      name: newStudyName,
      subjects: []
    };

    addStudy(newStudy);
    setEditingStudy(newStudy);
    setNewStudyName('');
    toast({
      title: "Sucesso",
      description: "Estudo criado com sucesso"
    });
  };

  const handleDeleteStudy = (studyId: string) => {
    if (confirm('Tem certeza que deseja excluir este estudo?')) {
      deleteStudy(studyId);
      if (editingStudy?.id === studyId) {
        setEditingStudy(null);
      }
      toast({
        title: "Sucesso",
        description: "Estudo excluído com sucesso"
      });
    }
  };

  const handleAddSubject = () => {
    if (!editingStudy) return;

    const newSubject: Subject = {
      id: Date.now().toString(),
      name: 'Nova Matéria',
      color: 'bg-blue-500',
      icon: '📚',
      description: 'Descrição da matéria',
      cards: []
    };

    const updatedStudy = {
      ...editingStudy,
      subjects: [...editingStudy.subjects, newSubject]
    };

    updateStudy(updatedStudy);
    setEditingStudy(updatedStudy);
    setEditingSubject(newSubject);
  };

  const handleUpdateSubject = (updatedSubject: Subject) => {
    if (!editingStudy) return;

    const updatedStudy = {
      ...editingStudy,
      subjects: editingStudy.subjects.map(s => s.id === updatedSubject.id ? updatedSubject : s)
    };

    updateStudy(updatedStudy);
    setEditingStudy(updatedStudy);
    setEditingSubject(updatedSubject);
  };

  const handleDeleteSubject = (subjectId: string) => {
    if (!editingStudy) return;
    if (confirm('Tem certeza que deseja excluir esta matéria?')) {
      const updatedStudy = {
        ...editingStudy,
        subjects: editingStudy.subjects.filter(s => s.id !== subjectId)
      };

      updateStudy(updatedStudy);
      setEditingStudy(updatedStudy);
        if (editingSubject?.id === subjectId) {
        setEditingSubject(null);
      }
    }
  };

  const handleAddCard = () => {
    if (!editingSubject || !newCard.question.trim() || !newCard.answer.trim()) {
      toast({
        title: "Erro",
        description: "Pergunta e resposta são obrigatórias",
        variant: "destructive"
      });
      return;
    }

    const newFlashcard: Flashcard = {
      id: Date.now(),
      question: newCard.question,
      answer: newCard.answer
    };

    const updatedSubject = {
      ...editingSubject,
      cards: [...editingSubject.cards, newFlashcard]
    };

    handleUpdateSubject(updatedSubject);
    setNewCard({ question: '', answer: '' });
    toast({
      title: "Sucesso",
      description: "Card adicionado com sucesso"
    });
  };

  const handleDeleteCard = (cardId: string) => {
    if (!editingSubject) return;
    if (confirm('Tem certeza que deseja excluir este card?')) {
      const updatedSubject = {
        ...editingSubject,
        cards: editingSubject.cards.filter(c => c.id.toString() !== cardId)
      };

      handleUpdateSubject(updatedSubject);
    }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Button onClick={onBack} variant="outline" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <h1 className="text-3xl font-bold">Administração de Estudos</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Studies List */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Estudos Disponíveis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Nome do novo estudo"
                    value={newStudyName}
                    onChange={(e) => setNewStudyName(e.target.value)}
                  />
                  <Button onClick={handleCreateStudy} size="sm">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>

                <div className="space-y-2">
                  {studies.map((study) => (
                    <div
                      key={study.id}
                      className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                        editingStudy?.id === study.id ? 'bg-primary/10 border-primary' : 'hover:bg-muted/50'
                      }`}
                      onClick={() => setEditingStudy(study)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">{study.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {study.subjects.length} matérias
                          </p>
                        </div>
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteStudy(study.id);
                          }}
                          variant="ghost"
                          size="sm"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Subjects List */}
          <div className="lg:col-span-1">
            {editingStudy && (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Matérias - {editingStudy.name}</CardTitle>
                    <Button onClick={handleAddSubject} size="sm">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  {editingStudy.subjects.map((subject) => (
                    <div
                      key={subject.id}
                      className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                        editingSubject?.id === subject.id ? 'bg-primary/10 border-primary' : 'hover:bg-muted/50'
                      }`}
                      onClick={() => setEditingSubject(subject)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">{subject.name}</h3>
                          <Badge variant="secondary" className="text-xs">
                            {subject.cards.length} cards
                          </Badge>
                        </div>
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteSubject(subject.id);
                          }}
                          variant="ghost"
                          size="sm"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>

          {/* Subject Editor */}
          <div className="lg:col-span-1">
            {editingSubject && (
              <Card>
                <CardHeader>
                  <CardTitle>Editor - {editingSubject.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Nome da Matéria</label>
                    <Input
                      value={editingSubject.name}
                      onChange={(e) => handleUpdateSubject({ ...editingSubject, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Descrição</label>
                    <Textarea
                      value={editingSubject.description}
                      onChange={(e) => handleUpdateSubject({ ...editingSubject, description: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Ícone</label>
                    <Input
                      value={editingSubject.icon}
                      onChange={(e) => handleUpdateSubject({ ...editingSubject, icon: e.target.value })}
                      placeholder="📚"
                    />
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-2">Novo Card</h4>
                    <div className="space-y-2">
                      <Textarea
                        placeholder="Pergunta"
                        value={newCard.question}
                        onChange={(e) => setNewCard({ ...newCard, question: e.target.value })}
                      />
                      <Textarea
                        placeholder="Resposta"
                        value={newCard.answer}
                        onChange={(e) => setNewCard({ ...newCard, answer: e.target.value })}
                      />
                      <Button onClick={handleAddCard} className="w-full">
                        <Plus className="w-4 h-4 mr-2" />
                        Adicionar Card
                      </Button>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-2">Cards ({editingSubject.cards.length})</h4>
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                      {editingSubject.cards.map((card, index) => (
                        <div key={card.id} className="p-2 border rounded-lg">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <p className="text-sm font-medium">#{index + 1}</p>
                              <p className="text-xs text-muted-foreground truncate">
                                {card.question.substring(0, 50)}...
                              </p>
                            </div>
                            <Button
                              onClick={() => handleDeleteCard(card.id.toString())}
                              variant="ghost"
                              size="sm"
                            >
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};