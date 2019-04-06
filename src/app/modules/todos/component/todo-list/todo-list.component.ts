import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './../../../../app.module';
import { TodoAction } from 'src/app/store/actions/todo.action';
import { ITodo } from 'src/app/modules/shared/modal/todo.modal';
import { Subscription } from 'rxjs';
import { TodoSelector } from 'src/app/store/selectors';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  disposableSub: Subscription[] = [];
  todos: ITodo[] = [];

  constructor(private store: Store<State>,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getToDoList();
  }

  setTodotext = (text: string) => {
    this.store.dispatch(new TodoAction.AddTodo(text));
  }

  getToDoList = () => {
    this.disposableSub.push(
      this.store.select(TodoSelector.getToList)
        .subscribe((data) => {
          this.todos = data;
        }));
  }

  navigateToHome(): void {
    this._router.navigate(['/'], {
      relativeTo: this._activatedRoute
    });
  }
}
