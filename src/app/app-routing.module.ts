import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutTodoComponent } from './about-todo/about-todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodosComponent } from './todos/todos.component';

export const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'about', component: AboutTodoComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

