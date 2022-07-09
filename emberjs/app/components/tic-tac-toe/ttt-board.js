import Component from '@glimmer/component';
import { action } from '@ember/object';

function nextPlayer(player) {
  return player === 'X' ? 'O' : 'X';
}

export default class TttBoard extends Component {
  @action
  onSelect(index) {
    const player = nextPlayer(this.args.player);
    const cells = this.args.cells.slice();
    cells[index] = player;

    const state = {
      player,
      cells,
    };

    this.$emit('onChange', state);
  }
}
