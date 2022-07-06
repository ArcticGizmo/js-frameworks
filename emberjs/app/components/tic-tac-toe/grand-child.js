import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class GrandChild extends Component {
  @tracked upValue = 7;

  @action
  grandChildSomething() {
    console.dir('---- grand child something');

    if (this.args.onSelect) {
      this.args.onSelect({ a: this.upValue, b: this.upValue * 2 });
    }
  }

  @action
  up() {
    this.$emit('onEmitterUp', { a: 11, b: 22 });
  }
}
