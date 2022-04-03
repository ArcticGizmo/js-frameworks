import React from 'react';
import './TodoPage.css';
import TodoCard from './TodoCard';
import clsx from 'clsx';

let TODOS = [{ title: 'Example todo', created: new Date(), completed: null }];

class TicTacToePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: TODOS.slice(),
    };
  }

  onAdd() {
    const todos = this.state.todos.slice();
    const todo = { title: '', created: new Date(), completed: null };
    todos.push(todo);

    this.setState({ todos });
  }

  onToggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = { ...todos[index] };

    todo.completed = todo.completed ? null : new Date();

    todos[index] = todo;

    this.setState({ todos });
  }

  onTextChange(index, event) {
    console.dir('--- on text change');
    console.dir(event);
  }

  onDelete(index) {
    const todos = this.state.todos.slice();
    todos.splice(index, 1);
    this.setState({ todos });
  }

  render() {
    const cards = this.state.todos.map((todo, index) => (
      <TodoCard
        key={index}
        className={clsx({ dim: !!todo.completed })}
        onToggle={() => this.onToggleComplete(index)}
        onTextChange={e => this.onTextChange(index, e)}
        onDelete={() => this.onDelete(index)}
      />
    ));

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
