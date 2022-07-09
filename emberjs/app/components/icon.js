import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

import clsx from 'clsx';

export default class Icon extends Component {
  @tracked class;
  @tracked icon;

  get cls() {
    return clsx({
      [this.args.class]: true,
      icon: true,
      invalid: !this.args.icon,
      hidden: !this.args.icon,
    });
  }

  @action
  clicked() {
    this.$emit('onClick');
  }
}
