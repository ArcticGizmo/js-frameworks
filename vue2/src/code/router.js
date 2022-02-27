import Vue from 'vue';
import VueRouter from 'vue-router';

import TodoPage from '@/components/pages/TodoPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/todo',
      name: 'Todo',
      component: TodoPage,
    },
  ],
});
