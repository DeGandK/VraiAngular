import { Component, OnInit } from '@angular/core';
import { CompleteQuiz, Question } from '../../../models/quiz.model';
import { QuizService } from '../../../services/quiz.service';

@Component({
  selector: 'app-createquiz',
  templateUrl: './createquiz.component.html',
  styleUrls: ['./createquiz.component.css'],
})
export class CreatequizComponent implements OnInit {
  completeQuiz: CompleteQuiz | null = null;
  isVisible: boolean = false;
  score: number = 0;
  currentQuestionIndex: number = 0;
  selectedCategory: number | null = null;
  categoriesSelected: boolean = false;
  userAnswer: string = '';
  showingAnswers: boolean = false;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.loadCompleteQuiz(1); // Charger le quiz avec l'ID approprié (à adapter selon votre logique)
  }

  loadCompleteQuiz(id: number): void {
    this.quizService.getCompleteQuiz(id).subscribe((data) => {
      this.completeQuiz = data;
      // Préparer les réponses aléatoires pour chaque question
      if (this.completeQuiz && this.completeQuiz.monQuestionnaire) {
        this.completeQuiz.monQuestionnaire.forEach((question) => {
          question.randomAnswer = this.getShuffledAnswers(question);
        });
      }
      this.isVisible = true; // Afficher le quiz une fois chargé
    });
  }

  getShuffledAnswers(question: Question): string[] {
    const answers = [
      question.fausseReponseA,
      question.fausseReponseB,
      question.fausseReponseC,
      question.answer,
    ];
    return this.shuffleArray([...answers]);
  }

  private shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.filteredQuestions().length - 1) {
      this.currentQuestionIndex++;
      this.userAnswer = '';
      this.showingAnswers = false;
    }
  }

  showAnswers(): void {
    this.showingAnswers = true;
  }

  confirmAnswer(): void {
    const currentQuestion = this.filteredQuestions()[this.currentQuestionIndex];
    const userAnswer = this.userAnswer.trim().toLowerCase();
    const correctAnswer = currentQuestion.answer.toLowerCase();

    if (userAnswer === correctAnswer) {
      this.score += 2; // Augmenter le score de 2 points si la réponse est correcte
    }
    this.nextQuestion(); // Passer à la question suivante après confirmation
  }

  submitAnswer(answer: string): void {
    const currentQuestion = this.filteredQuestions()[this.currentQuestionIndex];
    const correctAnswer = currentQuestion.answer.toLowerCase();

    if (answer.trim().toLowerCase() === correctAnswer) {
      this.score++;
    }
    this.nextQuestion();
  }

  applyCategoryFilter(categoryId: number): void {
    this.selectedCategory = categoryId;
    this.currentQuestionIndex = 0;
    this.categoriesSelected = true;
  }

  resetCategoryFilter(): void {
    this.selectedCategory = null;
    this.currentQuestionIndex = 0;
    this.categoriesSelected = false;
  }

  isQuestionInSelectedCategory(question: Question): boolean {
    return (
      this.selectedCategory === null ||
      question.categoryId !== this.selectedCategory
    );
  }

  filteredQuestions(): Question[] {
    if (!this.completeQuiz || !this.completeQuiz.monQuestionnaire) {
      return [];
    }
    return this.completeQuiz.monQuestionnaire.filter((question) =>
      this.isQuestionInSelectedCategory(question)
    );
  }
}
