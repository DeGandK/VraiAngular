import { Component, OnInit } from '@angular/core';
import { CompleteQuiz, Question } from '../../../models/quiz.model';
import { QuizService } from '../../../services/quiz.service';

@Component({
  selector: 'app-createquiz',
  templateUrl: './createquiz.component.html',
  styleUrl: './createquiz.component.css',
})
export class CreatequizComponent implements OnInit {
  completeQuiz!: CompleteQuiz;
  isVisible!: boolean;
  constructor(private quiService: QuizService) {}

  ngOnInit(): void {
    this.loadCompleteQuiz(1);
  }

  loadCompleteQuiz(id: number): void {
    this.quiService.getCompleteQuiz(id).subscribe((data) => {
      this.completeQuiz = data;
      this.completeQuiz.monQuestionnaire.forEach((el) => {
        el.randomAnswer = this.getShuffledAnswers(el);
      });
      this.isVisible = true;
    });
  }

  getShuffledAnswers(question: Question): string[] {
    const answers = [
      question.fausseReponseA,
      question.fausseReponseB,
      question.fausseReponseC,
      question.answer,
    ];
    return this.shuffleArray(answers);
  }
  private shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
