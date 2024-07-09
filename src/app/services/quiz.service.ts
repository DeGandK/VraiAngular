import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompleteQuiz } from '../models/quiz.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private url = 'https://localhost:7045/api/Quiz';
  constructor(private client: HttpClient) {}

  getCompleteQuiz(id: number): Observable<CompleteQuiz> {
    return this.client.get<CompleteQuiz>(`${this.url}/${id}`);
  }
}
