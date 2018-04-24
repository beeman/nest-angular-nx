import { Module } from '@nestjs/common';
import { ApiTodoController } from './api-todo.controller';
import { ApiTodoService } from './api-todo.service';

@Module({
  controllers: [
    ApiTodoController
  ],
  providers: [
    ApiTodoService
  ]
})
export class ApiTodoModule {}
