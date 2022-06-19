import EmberRouter from '@ember/routing/router';
import config from 'emberjs/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('todo');
  this.route('tic_tac_toe');
});
