import Component from '@glimmer/component';
import routes from '../../helpers/routes';

export default class Layout extends Component {
  constructor() {
    super(...arguments);
    this.routes = routes;
  }
}
