<script>
  import TodoCard from './TodoCard.svelte';
  import { todoStore } from '../../store';

  let todos = [];
  todoStore.subscribe(v => (todos = v));

  function setTodos(data) {
    todoStore.set(data);
  }

  const onAdd = () => {
    const entries = todos.slice();
    const entry = { title: '', created: new Date(), completed: null };
    entries.push(entry);
    setTodos(entries);
  };

  const onToggleComplete = index => {
    const entries = todos.slice();
    const newEntry = { ...entries[index] };

    if (newEntry.completed) {
      newEntry.completed = null;
    } else {
      newEntry.completed = new Date();
    }

    entries[index] = newEntry;

    setTodos(entries);
  };

  const onTextChange = (index, title) => {
    console.dir(title);
    const entries = todos.slice();
    const newEntry = { ...entries[index], title };

    entries[index] = newEntry;

    setTodos(entries);
  };

  const onDelete = index => {
    const entries = todos.slice();
    entries.splice(index, 1);
    setTodos(entries);
  };
</script>

<div class="todo-page">
  <div class="add">
    <button on:click={onAdd}>Create New</button>
  </div>
  <div class="cards">
    {#each todos as todo, index}
      <TodoCard
        title={todo.title}
        completed={todo.completed}
        on:toggle={() => onToggleComplete(index)}
        on:textChange={e => onTextChange(index, e.detail)}
        on:delete={() => onDelete(index)}
      />
    {/each}
  </div>
</div>

<style>
  .todo-page .cards {
    min-height: 4rem;
    display: flex;
    flex-wrap: wrap;
  }

  .todo-page .cards :global(.todo-card.dim) {
    opacity: 0.5;
  }
</style>
