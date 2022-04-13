import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css'],
})
export class TodoPageComponent {
  title = 'Hello World';
  apple = {key: 7};

  ngOnInit() {
    console.dir('---- on init');
  }

  onMessage(msg: string) {
    alert(msg);
  }
}
