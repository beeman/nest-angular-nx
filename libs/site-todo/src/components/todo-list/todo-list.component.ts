import { Component } from '@angular/core';
import { TodoService } from '@nest-angular-nx/site-todo/src/services/todo.service';
import { TodoModel } from '@nest-angular-nx/models';

@Component({
  selector: 'app-todo-list',
  template: `
    <pre>{{ todos | json}}</pre>
  `,
})
export class TodoListComponent {
  public todos: TodoModel[];

  constructor(public service: TodoService) {
    this.service.todos().subscribe(
      (res) => this.todos = res
    )
  }
}
