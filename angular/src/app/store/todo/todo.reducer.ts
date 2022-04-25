import { createReducer, on } from '@ngrx/store';
import { Todo } from 'src/app/code/types';

import { setTodos } from './todo.actions';

export const initialState: Todo[] = [
  { title: 'Example todo', created: new Date(), completed: null },
];

export const todoReducer = createReducer(
  initialState,
  on(setTodos, (state, { todos }) => todos)
);
