import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { RootComponent, HeaderComponent, BodyComponent, HomeComponent } from './component/index';
import { SharedModule } from './modules/shared/shared.module';
import { ITodo } from './modules/shared/modal/todo.modal';
import { TodoReducer } from './store/reducers/todo.reducer';

export interface State {
  todos: ITodo[];
}

export const reducers: ActionReducerMap<State> = {
  todos: TodoReducer.reducer,
};

@NgModule({
  declarations: [
    RootComponent,
    HeaderComponent,
    BodyComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 5,
    }),
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
