import { State } from './../../app.module';

export namespace TodoSelector {
    export const getToList = (state: State) => state.todos;
    export const getPendingTask = (state: State) => state.todos.filter((todo) => !todo.isCompleted).length;
}
