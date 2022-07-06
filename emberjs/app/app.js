import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'emberjs/config/environment';

import Component from '@glimmer/component';

Component.prototype.$emit = function (eventName, ...args) {
  const cb = this.args[eventName];
  if (cb) {
    cb(args);
  }
};

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
