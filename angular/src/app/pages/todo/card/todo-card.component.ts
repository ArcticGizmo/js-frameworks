import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css'],
})
export class TodoCardComponent {
  @Input() childMessage: string = '';

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Hello from child');
  }
}
