import TodoPage from '../pages/todo/TodoPage';
import TicTacToePage from '../pages/tic_tac_toe/TicTacToePage';

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

export default routes;
