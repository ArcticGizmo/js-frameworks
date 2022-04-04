import React from 'react';
import './TTTBoard.css';
import clsx from 'clsx';

import TTTCell from './TTTCell';

function nextPlayer(player) {
  if (player === 'X') {
    return 'O';
  }
  return 'X';
}

class TTTBoard extends React.Component {
  onSelect(index) {
    const player = nextPlayer(this.props.player);
    const cells = this.props.cells.slice();
    cells[index] = player;

    const state = {
      player,
      cells,
    };

    this.props.onChange(state);
  }

  render() {
    const cells = (this.props.cells || []).map((letter, index) => {
      return <TTTCell key={index} letter={letter} onSelect={() => this.onSelect(index)} />;
    });

    const classes = clsx('ttt-board', this.props.className);

    return <div className={classes}>{cells}</div>;
  }
}

export default TTTBoard;
