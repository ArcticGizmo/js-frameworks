import React from 'react';
import './TTTCell.css';
import clsx from 'clsx';

class TTTCell extends React.Component {
  render() {
    const letter = this.props.letter;
    const classes = clsx('ttt-cell', { empty: !letter });

    return (
      <div className={classes} onClick={this.props.onSelect}>
        {letter}
      </div>
    );
  }
}

export default TTTCell;
