import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/code/types';

export const setTodos = createAction(
  '[Todos] Set Todos',
  props<{ todos: Todo[] }>()
);
