import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class TodoRoute extends Route {
  model() {
    return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];
  }

  @action
  onAdd(a) {
    console.dir('---- on add');
    console.dir(a);
  }
}
