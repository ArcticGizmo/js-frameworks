import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import routes from '../../helpers/routes';

export default class Layout extends Component {
  @tracked routes;

  constructor() {
    super(...arguments);
    this.routes = routes;
  }
}
