import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

// const TODOS = [{ title: 'Example todo', created: new Date(), completed: null }];

export default class TodoCard extends Component {
  @service store;

  @action
  onAdd() {
    const todos = this.store.todos.slice();
    const todo = { title: '', created: Date.now(), completed: null };
    todos.push(todo);
    this.store.todos = todos;
  }

  @action
  onToggleComplete(index) {
    const todos = this.store.todos.slice();
    const todo = { ...todos[index] };

    todo.completed = todo.completd ? null : Date.now();

    todos[index] = todo;

    this.store.todos = todos;
  }

  @action
  onTextChange(index, title) {
    const todos = this.store.todos.slice();

    const todo = { ...todos[index], title };

    todos[index] = todo;

    this.store.todos = todos;
  }

  @action
  onDelete(index) {
    const todos = this.store.todos.slice();

    todos.splice(index, 1);
    this.store.todos = todos;
  }
}
