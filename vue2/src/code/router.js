import Vue from 'vue';
import VueRouter from 'vue-router';

import TodoPage from '@/components/pages/todo/TodoPage.vue';
import TicTacToePage from '@/components/pages/TicTacToePage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/todo',
    hide: true,
  },
  {
    path: '/todo',
    name: 'Todo',
    icon: 'list',
    component: TodoPage,
  },
  {
    path: '/tic_tac_toe',
    name: 'Tic Tac Toe',
    icon: 'gamepad',
    component: TicTacToePage,
  },
];

export default new VueRouter({
  routes,
});
