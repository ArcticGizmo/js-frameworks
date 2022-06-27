import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import clsx from 'clsx';

export default class Icon extends Component {
  @tracked icon;

  get cls() {
    return clsx({
      icon: true,
      invalid: !this.args.icon,
      hidden: !this.args.icon,
    });
  }
}
