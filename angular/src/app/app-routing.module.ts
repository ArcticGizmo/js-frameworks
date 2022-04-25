import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomRoutes } from './code/types';
import { TicTacToePageComponent } from './pages/tic-tac-toe-page/tic-tac-toe-page.component';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';

const routes: CustomRoutes = [
  { path: 'todo', component: TodoPageComponent, name: 'Todo', icon: 'list' },
  {
    path: 'tic-tac-toe',
    component: TicTacToePageComponent,
    name: 'Tic Tac Toe',
    icon: 'gamepad',
  },
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  static ROUTES = routes;
}
