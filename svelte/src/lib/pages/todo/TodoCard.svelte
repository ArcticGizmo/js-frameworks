<script>
  import Icon from '../../components/Icon.svelte';
  import { createEventDispatcher } from 'svelte';
  import CompleteIcon from './CompleteIcon.svelte';
import { cls } from '../../util';

  let className = "";

  export let completed = false;
  export let title = '';
  export {className as class};

  const emit = createEventDispatcher();

  const onToggleComplete = bool => emit('toggle', bool);
  const onTextChange = event => emit('textChange', event.target.value);
  const onDelete = () => emit('delete');

  $: classes = cls({'todo-card': true, [className]: true})
</script>

<div class={classes}>
  <CompleteIcon value={!!completed} on:input={onToggleComplete} />
  <input type="title" class="title" value={title} disabled={!!completed} on:change={onTextChange} />
  <Icon class="delete" icon="xmark" on:click={onDelete} />
</div>

<style>
  .todo-card {
    display: inline-flex;
    height: 3rem;
    width: 24rem;
    margin: 1rem;
    padding: 0.5rem;
    box-shadow: 5px 5px 10px 0 gray;
    border: 1px solid transparent;
  }

  .todo-card .title {
    margin-left: 0.5rem;
    padding-left: 0.5rem;
    border: none;
    border-bottom: 1px solid gray;
    height: 2rem;
    line-height: 1.5rem;
    flex-grow: 1;
  }

  .todo-card :global(.delete) {
    cursor: pointer;
    margin: auto;
    margin-left: 0.5rem;
  }

  .todo-card  :global(.delete:hover) {
    opacity: 0.8;
  }
</style>
