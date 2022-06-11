<script>
  import { cls } from '../../util';
  import { createEventDispatcher } from 'svelte';
  import TTTCell from './TTTCell.svelte';

  let className = '';

  export let player = '';
  export let cells = [];
  export { className as class };

  const emit = createEventDispatcher();

  function getNextPlayer(p) {
    return p === 'X' ? 'O' : 'X';
  }

  function setCell(index) {
    const newPlayer = getNextPlayer(player);
    const newCells = cells.slice();
    console.dir(index)
    newCells[index] = newPlayer;

    const state = { player: newPlayer, cells: newCells };

    emit('change', state);
  }

  const onSelect = index => setCell(index);

  $: classes = cls({ 'ttt-board': true, [className]: true });
</script>

<div class={classes}>
  {#each cells as letter, index}
    <TTTCell {letter} on:select={() => onSelect(index)} />
  {/each}
</div>

<style>
  .ttt-board {
    display: grid;
    grid-template-columns: 4rem 4rem 4rem;
  }

  .ttt-board :global(.ttt-cell) {
    aspect-ratio: 1;
    font-size: 2.5rem;
    text-align: center;
    height: 4rem;
    width: 4rem;
    line-height: 4rem;
  }
</style>
