import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Parent extends Component {
  @tracked parentValue = 99;
  // constructor() {
  //   super(...arguments);

  //   addEventListener('apple', () => console.dir("---- I got apple"))
  // }

  @action
  parentSomething() {
    console.dir('---- parent something');
  }

  @action
  increment() {
    this.parentValue += 1;
  }

  @action
  aCallback() {
    console.dir('--- a callback');
  }

  @action
  onSelect(shouldBe10, event) {
    console.dir('---- this is the top');
    console.dir(shouldBe10);
    console.dir(event);
  }
}
