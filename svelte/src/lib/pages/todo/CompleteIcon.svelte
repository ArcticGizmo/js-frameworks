<script>
  import { cls } from 'src/lib/util';
  import { createEventDispatcher } from 'svelte';

  export let value = false;

  const emit = createEventDispatcher();

  $: classes = () => {
    return [];
  };

  const onToggle = () => emit('input', !value);
</script>

<div class={cls({ 'complete-icon': true, complete: value, incomplete: !value })}>
  x
  <!-- icon here -->
</div>
