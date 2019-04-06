import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodosRoutingModule } from './todos-routing.module';
import { TodoDisplayComponent, TodoListComponent, TodoInputComponent, TodoComponent } from './component/index';

@NgModule({
  declarations: [TodoDisplayComponent, TodoListComponent, TodoInputComponent, TodoComponent],
  imports: [
    CommonModule,
    FormsModule,
    TodosRoutingModule
  ]
})
export class TodosModule { }
