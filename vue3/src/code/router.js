import { createWebHistory, createRouter } from 'vue-router';

import TodoPage from '@/components/pages/todo/TodoPage.vue';
import TicTacToePage from '@/components/pages/tic_tac_toe/TicTacToePage.vue';

const routes = [
  {
    path: '/',
    redirect: '/todo',
    meta: {
      hide: true,
    },
  },
  {
    path: '/todo',
    name: 'Todo',
    meta: {
      icon: 'list',
      component: TodoPage,
    },
  },
  {
    path: '/tic_tac_toe',
    name: 'Tic Tac Toe',
    meta: {
      icon: 'gamepad',
      component: TicTacToePage,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
