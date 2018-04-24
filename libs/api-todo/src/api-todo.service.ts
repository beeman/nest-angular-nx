import { Injectable } from '@nestjs/common';
import { TodoModel } from '@nest-angular-nx/models';

@Injectable()
export class ApiTodoService {

  public todos(): TodoModel[] {
    return [
      { id: '1', title: 'Eat', done: false },
      { id: '2', title: 'Sleep', done: false },
      { id: '3', title: 'Code', done: false },
    ];
  }

}
