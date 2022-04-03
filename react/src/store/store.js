import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './slicers/todos';

export default configureStore({
  reducer: {
    todos: todosReducer,
  },
});
