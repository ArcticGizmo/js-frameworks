<script>
  import { cls } from '../../util';
  import { createEventDispatcher } from 'svelte';

  export let letter = '';

  const emit = createEventDispatcher();

  const onClick = () => {
    if (!letter) {
      emit('select');
    }
  };

  $: classes = cls({ 'ttt-cell': true, empty: !letter });
</script>

<div class={classes} on:click={onClick}>
  {letter || ''}
</div>

<style>
  .ttt-cell {
    width: 100%;
    height: 100%;
    font-weight: bold;
    border: 1px solid black;
  }

  .ttt-cell.empty:hover {
    cursor: pointer;
    background-color: #ff3e00;
  }
</style>
