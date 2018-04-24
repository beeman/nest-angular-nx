import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { RouterModule, Routes } from '@angular/router';
import { TodoService } from './services/todo.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{ path: '', component: TodoListComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), HttpClientModule],
  declarations: [TodoListComponent],
  providers: [TodoService],
})
export class SiteTodoModule {}
