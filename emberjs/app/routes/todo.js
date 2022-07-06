import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class TodoRoute extends Route {
  @action
  onAdd(a) {
    console.dir('---- on add');
    console.dir(a);
  }
}
