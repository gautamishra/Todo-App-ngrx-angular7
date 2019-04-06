import { ITodo } from 'src/app/modules/shared/modal/todo.modal';
import { TodoAction } from '../actions/todo.action';

const initialState: ITodo[] = [];

export namespace TodoReducer {
    export function reducer(state: ITodo[] = initialState, action: TodoAction.Actions): ITodo[] {
        switch (action.type) {
            case TodoAction.ActionTypes.ADD_TODO: {
                const newState: ITodo = {
                    index: state.length,
                    text: action.payload as string,
                    isCompleted: false
                };
                return [...state, newState ];
            }

            case TodoAction.ActionTypes.TOGGLE_TODO: {
             const changeTodo = state.find((todo) => todo.index === action.payload);
             changeTodo.isCompleted = !changeTodo.isCompleted;
             return state;
            }
            default: {
                return state;
            }
        }
    }

}
