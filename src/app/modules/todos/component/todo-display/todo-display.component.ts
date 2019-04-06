import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/app.module';
import { TodoSelector } from 'src/app/store/selectors';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/modules/shared/modal/todo.modal';

@Component({
  selector: 'app-todo-display',
  templateUrl: './todo-display.component.html',
  styleUrls: ['./todo-display.component.scss']
})
export class TodoDisplayComponent implements OnInit {

  @Input() todoList: ITodo[] = [];

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }
}
