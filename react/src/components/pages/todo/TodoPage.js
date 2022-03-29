import React from 'react';
import './TodoPage.css';
import TodoCard from './TodoCard';
import clsx from 'clsx';

let TODOS = [{ title: 'Example todo', created: new Date(), completed: null }];

class TicTacToePage extends React.Component {
  get todos() {
    // something to do redux or something
    return TODOS;
  }

  set todos(value) {
    TODOS = value;
    this.render();
  }

  onAdd() {
    const todos = this.todos.slice();
    const todo = { title: '', created: new Date(), completed: null };
    todos.push(todo);
    this.todos = todos;
  }

  onToggleComplete(index) {
    const todos = this.todos.slice();
    const todo = { ...todos[index] };

    todo.completed = todo.completed ? null : new Date();

    todos[index] = todo;

    this.todos = todos;
  }

  onTextChange(index, event) {
    console.dir('--- on text change');
    console.dir(event);
  }

  onDelete(index) {
    const todos = this.todos.slice();
    todos.splice(index, 1);
    this.todos = todos;
  }

  render() {
    const cards = this.todos.map((todo, index) => (
      <TodoCard
        key={index}
        className={clsx({ dim: !!todo.completed })}
        onToggle={() => this.onToggleComplete(index)}
        onTextChange={e => this.onTextChange(index, e)}
        onDelete={() => this.onDelete(index)}
      />
    ));

    console.dir(cards);

    return (
      <div className="todo-page">
        <div className="add">
          <button onClick={() => this.onAdd()}>Create New</button>
        </div>
        <div className="cards">{cards}</div>
      </div>
    );
  }
}

export default TicTacToePage;
