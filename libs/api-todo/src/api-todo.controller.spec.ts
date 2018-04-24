import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { ApiTodoController } from './api-todo.controller';
import { ApiTodoService } from './api-todo.service';

describe('ApiTodoController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [ApiTodoController],
      providers: [ApiTodoService]
    }).compile();
  });

  describe('root', () => {
    it('should return 3 elements"', () => {
      const appController = app.get<ApiTodoController>(ApiTodoController);
      expect(appController.root().length).toBe(3);
    });
  });
});
