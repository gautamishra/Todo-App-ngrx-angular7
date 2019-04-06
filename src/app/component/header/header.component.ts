import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { State } from 'src/app/app.module';
import { Store } from '@ngrx/store';
import { TodoSelector } from 'src/app/store/selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  count = 0;
  subscriptions: Subscription[] = [];
  constructor(private _store: Store<State>) { }

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

}
