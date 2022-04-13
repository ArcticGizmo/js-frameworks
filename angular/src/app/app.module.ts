import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconComponent } from './components/icon/icon.component';
import { TodoPageComponent } from './pages/todo/todo-page.component';
import { TodoCardComponent } from './pages/todo/card/todo-card.component';
import { CompleteIconComponent } from './pages/todo/complete-icon/complete-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoPageComponent,
    TodoCardComponent,
    IconComponent,
    CompleteIconComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
