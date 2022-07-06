import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class Child extends Component {
  @action
  childSomething() {
    console.dir('---- child something');

    if (this.args.onSelect) {
      this.args.onSelect({ a: 1, b: 2, c: 3 });
    }
  }

  @action
  onEmitterUp(a, b) {
    this.$emit('onSelect', { a: 'bacon', b: 'apple' });
  }
}
