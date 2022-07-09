import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TodoCard extends Component {
  @tracked title;
  @tracked completed;

  @action
  onToggleCompleted() {
    console.dir('---- this on toggle complete');
    this.$emit('onToggle', !this.args.completed);
  }

  @action
  onTextChange(event) {
    this.$emit('onTextChange', event.target.value);
  }

  @action
  onDelete() {
    this.$emit('onDelete');
  }
}
