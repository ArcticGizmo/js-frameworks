import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class MyStore extends Service {
  @tracked _todos = [{ title: 'Example todo', created: new Date(), completed: null }];

  get todos() {
    return this._todos;
  }

  set todos(value) {
    this._todos = value;
  }
}
