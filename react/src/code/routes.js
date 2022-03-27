import second from '../components/pages'

export default [
  {
    path: '*',
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
