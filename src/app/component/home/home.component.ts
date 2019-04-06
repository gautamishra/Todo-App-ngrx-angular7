import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from 'src/app/app.module';
import { Subscription } from 'rxjs';
import { TodoSelector } from 'src/app/store/selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  count = 0;

  subscriptions: Subscription[] = [];
  constructor(private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _store: Store<State>) { }

  ngOnInit() {
    this.getTodoCount();
  }

  getTodoCount(): void {
    this.subscriptions.push(
      this._store
      .select(TodoSelector.getPendingTask)
      .subscribe((count: number) => {
        this.count = count;
      })
    );
  }


  navigateToTodoList = (): void => {
    this._router.navigate(['./todos'], { relativeTo: this._activatedRoute });
  }
}
