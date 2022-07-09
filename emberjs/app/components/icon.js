import Component from '@glimmer/component';
import { action } from '@ember/object';

import clsx from 'clsx';

export default class Icon extends Component {
  get cls() {
    const cls = {
      icon: true,
      invalid: !this.args.icon,
      hidden: !this.args.icon,
    };

    if (this.args.class) {
      cls[this.args.class] = true;
    }

    return clsx(cls);
  }

  @action
  clicked() {
    this.$emit('onClick');
  }
}
