import { Action } from '@ngrx/store';

export namespace TodoAction {
    export const ActionTypes = {
        ADD_TODO: '[TODO_APP] ADD TODO',
        TOGGLE_TODO: '[TODO_APP] TOGGLE TODO'
    };

    export class AddTodo implements Action {
        readonly type = ActionTypes.ADD_TODO;
        constructor(public payload: string) { }
    }

    export class ToggleTodo implements Action {
        readonly type = ActionTypes.TOGGLE_TODO;
        constructor(public payload: number) { }
    }

    export type Actions = AddTodo
        | ToggleTodo;
}
