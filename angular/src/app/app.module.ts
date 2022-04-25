import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconComponent } from './components/icon/icon.component';

import { StoreModule } from '@ngrx/store';
import { todoReducer } from './store/todo/todo.reducer';

import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { TicTacToePageComponent } from './pages/tic-tac-toe-page/tic-tac-toe-page.component';

import { TodoCardComponent } from './pages/todo-page/card/todo-card.component';
import { CompleteIconComponent } from './pages/todo-page/complete-icon/complete-icon.component';
import { LayoutComponent } from './layout/layout.component';
import { NavItemComponent } from './layout/nav-item/nav-item.component';
import { TttBoardComponent } from './pages/tic-tac-toe-page/ttt-board/ttt-board.component';
import { TttCellComponent } from './pages/tic-tac-toe-page/ttt-cell/ttt-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoPageComponent,
    TicTacToePageComponent,
    TodoCardComponent,
    IconComponent,
    CompleteIconComponent,
    LayoutComponent,
    NavItemComponent,
    TttBoardComponent,
    TttCellComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ todos: todoReducer }),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
