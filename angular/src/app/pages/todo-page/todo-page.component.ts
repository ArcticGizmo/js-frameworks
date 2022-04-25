import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { setTodos } from '../../store/todo/todo.actions';
import { Todo } from 'src/app/code/types';

@Component({
  selector: 'todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TodoPageComponent {
  // eventually this should come from some form of store
  $todos: Todo[] = [];

  constructor(private store: Store<{ todos: Todo[] }>) {
    store.select('todos').subscribe((todos) => (this.$todos = todos));
  }

  setTodos(todos: Todo[]) {
    this.store.dispatch(setTodos({ todos }));
  }

  onAdd() {
    const todos = this.$todos.slice();
    const todo = { title: '', created: new Date(), completed: null };
    todos.push(todo);
    this.setTodos(todos);
  }

  onToggleComplete(index: number) {
    const todos = this.$todos.slice();
    const todo = { ...todos[index] };

    if (todo.completed) {
      todo.completed = null;
    } else {
      todo.completed = new Date();
    }

    todos[index] = todo;

    this.setTodos(todos);
  }
  onTextChange(index: number, title: string) {
    const todos = this.$todos.slice();
    const todo = { ...todos[index], title };

    todos[index] = todo;

    this.setTodos(todos);
  }

  onDelete(index: number) {
    const todos = this.$todos.slice();
    todos.splice(index, 1);
    this.setTodos(todos);
  }
}
