import { Controller, Get } from '@nestjs/common';
import { TodoModel } from '@nest-angular-nx/models';
import { ApiTodoService } from '@nest-angular-nx/api-todo/src/api-todo.service';

@Controller()
export class ApiTodoController {
  constructor(public service: ApiTodoService) {}

  @Get('/api/todos')
  root(): TodoModel[] {
    return this.service.todos();
  }
}
