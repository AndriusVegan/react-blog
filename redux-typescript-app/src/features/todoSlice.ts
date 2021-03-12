import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { toEditorSettings } from 'typescript';
import { RootState } from '../app/store';


export interface Todo {
  title: string;
  isDone?: boolean;
}

interface TodoState {
    todos: Array<Todo>;
}

const initialState: TodoState = {
  todos: [
    {
      title: 'Go to work'
    },
    {
      title: 'Go for a run',
      isDone: true
    }
     
  ]
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    
    addATodo: (state, action: PayloadAction<Todo>) => {
      state.todos = [...state.todos, action.payload];
    },
  },
});

export const { addATodo } = todoSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTodos = (state: RootState) => state.todo.todos;

export default todoSlice.reducer;
