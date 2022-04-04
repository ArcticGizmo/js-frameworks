import './TodoPage.css';

import { useSelector, useDispatch } from 'react-redux';
import { set } from '../../../store/slicers/todos';

import TodoCard from './TodoCard';
import clsx from 'clsx';

export default function TodoPage() {
  const todos = useSelector(state => state.todos.value);
  const dispatch = useDispatch();

  const setTodos = e => dispatch(set(e));

  const onAdd = () => {
    const entries = todos.slice();
    const todo = { title: '', created: Date.now(), completed: null };
    entries.push(todo);

    setTodos(entries);
  };

  const onToggleComplete = index => {
    const entries = todos.slice();
    const todo = { ...entries[index] };

    todo.completed = todo.completed ? null : Date.now();

    entries[index] = todo;

    setTodos(entries);
  };

  const onTextChange = (index, title) => {
    const entries = todos.slice();

    const todo = { ...entries[index], title };

    entries[index] = todo;

    setTodos(entries);
  };

  const onDelete = index => {
    const entries = todos.slice();

    entries.splice(index, 1);
    setTodos(entries);
  };

  const cards = todos.map((todo, index) => (
    <TodoCard
      key={index}
      className={clsx({ dim: !!todo.completed })}
      title={todo.title}
      completed={todo.completed}
      onToggle={() => onToggleComplete(index)}
      onTextChange={e => onTextChange(index, e)}
      onDelete={() => onDelete(index)}
    />
  ));

  return (
    <div className="todo-page">
      <div className="add">
        <button onClick={onAdd}>Create New</button>
      </div>
      <div className="cards">{cards}</div>
    </div>
  );
}
