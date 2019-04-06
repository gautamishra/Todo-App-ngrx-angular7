import { Component, OnInit, Input } from '@angular/core';
import { ITodo } from 'src/app/modules/shared/modal/todo.modal';
import { Store } from '@ngrx/store';
import { State } from 'src/app/app.module';
import { TodoAction } from 'src/app/store/actions/todo.action';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo: ITodo = null;
  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  toggleSelected = (index: number) => {
    this.store.dispatch(new TodoAction.ToggleTodo(index));
  }
}
