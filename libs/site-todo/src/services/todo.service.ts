import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TodoModel } from '@nest-angular-nx/models';

@Injectable()
export class TodoService {

  constructor(private http: HttpClient) { }

  public todos(): Observable<TodoModel[]> {
    return this.http.get<TodoModel[]>('/api/todos')
  }

}
