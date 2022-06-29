import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import clsx from 'clsx';

const call = (key, ...args) => {
  const cb = this[key];
  if (!cb) {
    return;
  }

  cb(args);
};

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
    call('onToggle', !this.completed);
  }

  @action
  onTextChange() {
    // call('onTextChange')
    // const cb = this.onTextChange;
    console.dir('---- on text change');
  }

  @action
  onDelete() {
    console.dir('---- on delete');
  }
}
