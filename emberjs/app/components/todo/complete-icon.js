import Component from '@glimmer/component';
import { action } from '@ember/object';
import clsx from 'clsx';

export default class CompleteIcon extends Component {
  get cls() {
    return clsx({
      'complete-icon': true,
      complete: !!this.args.value,
      incomplete: !this.args.value,
    });
  }

  @action
  onToggle() {
    this.$emit('onToggle');
  }
}
