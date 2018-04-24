import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ApiTodoModule } from '@nest-angular-nx/api-todo';

@Module({
  imports: [
    ApiTodoModule
  ],
  controllers: [
    AppController
  ],
})
export class AppModule {}
