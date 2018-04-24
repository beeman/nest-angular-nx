import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { TodoModel } from '@nest-angular-nx/models';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(): TodoModel[] {
    return this.appService.root();
  }
}
