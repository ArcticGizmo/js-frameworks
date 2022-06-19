import { For } from 'solid-js';
import { todos, setTodos } from '../../store';
import TodoCard from './TodoCard';

export default () => {
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

  return (
    <div>
      <div className="todo-page">
        <div className="add">
          <button onClick={onAdd}>Create New</button>
        </div>
        <div className="cards">
          <For each={todos}>
            {(todo, index) => (
              <TodoCard
                classList={{ dim: !!todo.completed }}
                title={todo.title}
                completed={todo.completed}
                onToggle={() => onToggleComplete(index())}
                onTextChange={e => onTextChange(index(), e)}
                onDelete={() => onDelete(index())}
              />
            )}
          </For>
        </div>
      </div>
    </div>
  );
};
