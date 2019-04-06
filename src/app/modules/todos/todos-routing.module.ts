import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoDisplayComponent } from './component/todo-display/todo-display.component';
import { TodoListComponent } from './component/todo-list/todo-list.component';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
