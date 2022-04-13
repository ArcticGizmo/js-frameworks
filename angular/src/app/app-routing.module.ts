import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicTacToeComponent } from './pages/tic-tac-toe/tic-tac-toe.component';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';

const routes: Routes = [
  { path: 'todo', component: TodoPageComponent },
  { path: 'tic-tac-toe', component: TicTacToeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
