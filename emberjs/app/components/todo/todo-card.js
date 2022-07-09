import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class TodoCard extends Component {
  @action
  onToggleCompleted() {
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
