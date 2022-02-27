import Vue from 'vue';
import App from './App.vue';

import router from '@/code/router';
import store from '@/store/store';
import Icon from '@/components/Icon.vue';
import FloatingVue from 'floating-vue';

import 'floating-vue/dist/style.css';

Vue.use(FloatingVue);
Vue.component('Icon', Icon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
