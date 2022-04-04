import React from 'react';
import './TicTacToePage.css';

import TTTBoard from './TTTBoard';

import { calculateWinner } from '../../../code/ttt';
import clsx from 'clsx';

function initBoard() {
  return { player: 'O', cells: Array(9).fill(null) };
}

class TicTacToePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [initBoard()],
    };
  }

  onReset() {
    this.setState({ history: [initBoard()] });
  }

  onUndo() {
    const history = this.state.history.slice();
    history.splice(-1, 1);
    this.setState({ history });
  }

  onChange(event) {
    const active = this.state.history[this.state.history.length - 1];
    const winner = calculateWinner(active.cells);
    if (winner) {
      return;
    }
    const history = this.state.history.slice();
    history.push(event);
    this.setState({ history });
  }

  render() {
    const active = this.state.history[this.state.history.length - 1];

    const winningPlayer = calculateWinner(active.cells);

    if (this.state.history.length > 1) {
      var undo = <button onClick={() => this.onUndo()}>Undo</button>;
    }

    if (winningPlayer) {
      var winner = (
        <div className="winner">
          <div className="label">Player {winningPlayer} Wins!</div>
        </div>
      );
    }

    return (
      <div className="tic-tac-toe-page">
        <div className="actions">
          <button onClick={() => this.onReset()}>Reset</button>
          {undo}
        </div>
        <div className="game-wrapper">
          <div className="game-area">
            <TTTBoard
              className={clsx({ complete: !!winningPlayer })}
              player={active.player}
              cells={active.cells}
              onChange={e => this.onChange(e)}
            />
            {winner}
          </div>
        </div>
      </div>
    );
  }
}

export default TicTacToePage;
