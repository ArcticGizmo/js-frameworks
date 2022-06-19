import './TTTBoard.css';

import { For } from 'solid-js';
import TTTCell from './TTTCell';

function nextPlayer(player) {
  return player === 'X' ? 'O' : 'X';
}

export default props => {
  const setCell = index => {
    const player = nextPlayer(props.player);
    const cells = props.cells.slice();
    cells[index] = player;

    const state = {
      player,
      cells,
    };


    props.onChange?.(state);
  };

  return (
    <div className="ttt-board">
      <For each={props.cells}>
        {(letter, index) => <TTTCell letter={letter} onSelect={() => setCell(index())} />}
      </For>
    </div>
  );
};
