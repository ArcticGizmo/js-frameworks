import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoPageComponent } from './pages/todo/todo-page.component';
import {TodoCardComponent} from './pages/todo/card/todo-card.component'

@NgModule({
  declarations: [
    AppComponent,
    TodoPageComponent,
    TodoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
