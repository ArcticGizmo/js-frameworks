import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

import { calculateWinner } from '../../helpers/ttt';

function initBoard() {
  return { player: 'O', cells: Array(9).fill(null) };
}

export default class TicTacToePage extends Component {
  @tracked history = [initBoard()];

  get active() {
    return this.history[this.history.length - 1];
  }

  get winningPlayer() {
    return calculateWinner(this.active.cells);
  }

  get showUndo() {
    return this.history.length > 1;
  }

  @action
  onReset() {
    this.history = [initBoard()];
  }

  @action
  onUndo() {
    const history = this.history.slice();
    history.splice(-1, 1);
    this.history = history;
  }

  @action
  onChange(event) {
    if (!this.winningPlayer) {
      const history = this.history.slice();
      history.push(event);
      this.history = history;
    }
  }
}
