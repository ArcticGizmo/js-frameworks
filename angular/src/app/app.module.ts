import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconComponent } from './components/icon/icon.component';

import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { TicTacToeComponent } from './pages/tic-tac-toe/tic-tac-toe.component';

import { TodoCardComponent } from './pages/todo-page/card/todo-card.component';
import { CompleteIconComponent } from './pages/todo-page/complete-icon/complete-icon.component';
import { LayoutComponent } from './layout/layout.component';
import { NavItemComponent } from './layout/nav-item/nav-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoPageComponent,
    TicTacToeComponent,
    TodoCardComponent,
    IconComponent,
    CompleteIconComponent,
    LayoutComponent,
    NavItemComponent,
    TicTacToeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
