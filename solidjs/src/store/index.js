import { createStore } from 'solid-js/store';

export const [todos, setTodos] = createStore([
  { title: 'Example todo', created: new Date(), completed: null },
]);
