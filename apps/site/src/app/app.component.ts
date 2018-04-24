import { Component, OnInit } from '@angular/core';
import { TodoModel } from '@nest-angular-nx/models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `    
    <pre>{{todos | json}}</pre>
  `,
})
export class AppComponent implements OnInit {
  public todos: TodoModel[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:3001/')
      .subscribe((todos: TodoModel[]) => this.todos = todos)
  }
}
