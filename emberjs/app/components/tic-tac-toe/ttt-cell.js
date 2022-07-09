import Component from '@glimmer/component';
import { action } from '@ember/object';

import clsx from 'clsx';

export default class TttCell extends Component {
  get cls() {
    const cls = {
      'ttt-cell': true,
      empty: !this.args.letter,
    };

    if (this.args.class) {
      cls[this.args.class] = true;
    }

    return clsx(cls);
  }

  @action
  onClick(event) {
    event.stopPropagation();
    if (!this.args.letter) {
      this.$emit('onSelect');
    }
  }
}
