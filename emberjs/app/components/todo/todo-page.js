import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

const TODOS = [{ title: 'Example todo', created: new Date(), completed: null }];

export default class TodoCard extends Component {
  @tracked todos = TODOS;

  @action
  onAdd() {
    const todos = this.todos.slice();
    const todo = { title: '', created: Date.now(), completed: null };
    todos.push(todo);
    this.todos = todos;
  }

  @action
  onToggleComplete(index) {
    const todos = this.todos.slice();
    const todo = { ...todos[index] };

    todo.completed = todo.completd ? null : Date.now();

    todos[index] = todo;

    this.todos = todos;
  }

  @action
  onTextChange(index, title) {
    const todos = this.todos.slice();

    const todo = { ...todos[index], title };

    todos[index] = todo;

    this.todos = todos;
  }

  @action
  onDelete(index) {
    const todos = this.todos.slice();

    todos.splice(index, 1);
    this.todos = todos;
  }
}
