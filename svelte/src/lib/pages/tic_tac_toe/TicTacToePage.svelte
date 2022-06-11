<script>
  import { cls } from '../../util';

  import { calculateWinner } from './ttt';
  import TTTBoard from './TTTBoard.svelte';

  function initBoard() {
    return { player: 'O', cells: Array(9).fill(null) };
  }

  let history = [initBoard()];

  $: active = history[history.length - 1];

  $: winningPlayer = calculateWinner(active.cells);

  const onReset = () => (history = [initBoard()]);
  const onUndo = () => {
    const newHistory = history.slice();
    newHistory.splice(-1, 1);
    history = newHistory;
  };

  const onChange = event => {
    if (winningPlayer) {
      return;
    }
    history.push(event.detail);
    history = history.slice();
  };
</script>

<div class="tic-tac-toe-page">
  <div class="actions">
    <button on:click={onReset}>Reset</button>
    {#if history.length > 1}
      <button on:click={onUndo}>Undo</button>
    {/if}
  </div>
  <div class="game-wrapper">
    <div class="game-area">
      <TTTBoard
        class={cls({ complete: !!winningPlayer })}
        player={active.player}
        cells={active.cells}
        on:change={onChange}
      />
      {#if winningPlayer}
        <div class="winner">
          <div class="label">Player {winningPlayer} Wins!</div>
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  .tic-tac-toe-page .actions > * {
    margin-right: 0.25rem;
  }

  .tic-tac-toe-page .game-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }

  .tic-tac-toe-page .game-wrapper .game-area {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .tic-tac-toe-page .game-area :global(.complete) {
    pointer-events: none;
  }

  .tic-tac-toe-page .winner {
    width: 12rem;
    height: 2rem;
  }

  .tic-tac-toe-page .winner .label {
    background-color: #ff3e00;
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    font-weight: bold;
  }
</style>
