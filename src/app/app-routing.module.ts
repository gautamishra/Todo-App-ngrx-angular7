import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { TodoDisplayComponent } from './modules/todos/component/todo-display/todo-display.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'todos',
    loadChildren: './modules/todos/todos.module#TodosModule'
       // component: TodoDisplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
