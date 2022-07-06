import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

// const call = (key, ...args) => {
//   console.dir(this);

//   return;
//   // const cb = (this.args || {})[key];
//   // if (!cb) {
//   //   return;
//   // }

//   // cb(args);
// };

function call() {
  console.dir(this);

  return;
  // const cb = (this.args || {})[key];
  // if (!cb) {
  //   return;
  // }

  // cb(args);
}

// const call = (key, ...args) => {

// }

// make something like @tracked that registers an emitter for you
// this way you can just call it directly and it will automap if the param had been
// passed in or not (though some sort of args props)

function readonly(target, name, descriptor) {
  console.dir('------ aaaaaa');
  console.dir(target);
  console.dir(name);
  console.dir(descriptor);
  console.dir(this);
  target.egg = 7;
  descriptor.writable = false;
  return descriptor;
}

function emitter(target, name, descriptor) {
  descriptor.initializer = () =>
    function (key, ...args) {
      console.dir('---- initializer');
      console.dir(key);
      console.dir(this);
      console.dir(target);
    };
}

export default class TodoCard extends Component {
  @tracked title;
  @tracked completed;
  // @emitter $emit = 1;

  @action
  onToggleCompleted() {
    call('onToggle', !this.completed);
  }

  @action
  onTextChange(event) {
    console.dir('----- in todo card');
    this.$emit('sandwich');
    console.dir(this.args);
    // this.apples(7);
    // console.dir(this.egg)
    // call('onTextChange', event)
    // call.bind(this)('onTextChange', event);
  }

  @action
  onDelete() {
    console.dir('---- on delete');
    console.dir(this.egg);
  }
}
