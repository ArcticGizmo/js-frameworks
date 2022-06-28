import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import clsx from 'clsx';

export default class CompleteIcon extends Component {
  @tracked value;

  get cls() {
    return clsx({
      'complete-icon': true,
      complete: !!this.value,
      incomplete: !this.value,
    });
  }

  @action
  onToggle() {
    console.dir('---- on toggle');
  }
}
