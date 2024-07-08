import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url: string = 'https://localhost:7045/api/User';
  constructor(private client: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.client.get<User[]>(this.url);
  }

  delete(id: number) {
    return this.client.delete(this.url + '/' + id);
  }

  getById(id: number) {
    return this.client.get<User>(this.url + '/' + id);
  }
}
