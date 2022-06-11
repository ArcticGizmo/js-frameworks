<script>
  import Icon from '../../components/Icon.svelte';
  import { cls } from '../../util';
  import { createEventDispatcher } from 'svelte';

  export let value = false;

  const emit = createEventDispatcher();

  const onToggle = () => emit('input', !value);
</script>

<div
  class={cls({ 'complete-icon': true, complete: value, incomplete: !value })}
  on:click={onToggle}
>
  <Icon icon="check" />
</div>

<style>
  .complete-icon {
    cursor: pointer;
    display: inline-block;
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
    border-radius: 100%;
    border: 1px solid black;
    transition: background-color 0.3s ease-in-out;
  }

  .complete-icon :global(.icon) {
    margin-left: 0.5rem;
  }

  .complete-icon.complete {
    background-color: lightgreen;
  }
</style>
