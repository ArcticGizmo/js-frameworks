import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import clsx from 'clsx';

export default class TodoCard extends Component {
  @tracked title;
  @tracked completed;

  get cls() {
    return clsx({
      icon: true,
      invalid: !this.args.icon,
      hidden: !this.args.icon,
    });
  }

  @action
  onToggleCompleted() {
    const cb = this.onToggle;
    if (!cb) {
      return;
    }

    cb(!this.completed);
  }

  @action
  onTextChange() {
    console.dir('---- on text change');
  }

  @action
  onDelete() {
    console.dir('---- on delete');
  }
}
