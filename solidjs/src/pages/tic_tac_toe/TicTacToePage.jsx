import './TicTacToePage.css';

import { calculateWinner } from '../../code/ttt';
import { createMemo, createSignal, Show } from 'solid-js';
import TTTBoard from './TTTBoard';

function initBoard() {
  return { player: 'O', cells: Array(9).fill(null) };
}

export default () => {
  const [history, setHistory] = createSignal([initBoard()]);

  const active = createMemo(() => {
    const hist = history();
    return hist[hist.length - 1];
  });

  const winningPlayer = createMemo(() => {
    return calculateWinner(active().cells);
  });

  const onReset = () => {
    setHistory([initBoard()]);
  };

  const onUndo = () => {
    const hist = history().slice();
    hist.splice(-1, 1);
    setHistory(hist);
  };

  const onChange = event => {
    const hist = history().slice();
    if (winningPlayer()) {
      return;
    }
    hist.push(event);
    setHistory(hist);
  };

  return (
    <div className="tic-tac-toe-page">
      <div className="actions">
        <button onClick={onReset}>Reset</button>
        <Show when={history().length > 1}>
          <button onClick={onUndo}>Undo</button>
        </Show>
      </div>
      <div className="game-wrapper">
        <div className="game-area">
          <TTTBoard
            classList={{ complete: !!winningPlayer() }}
            player={active().player}
            cells={active().cells}
            onChange={onChange}
          />
          <Show when={winningPlayer()}>
            <div className="winner">
              <div className="label">Player {winningPlayer()} Wins!</div>
            </div>
          </Show>
        </div>
      </div>
    </div>
  );
};
