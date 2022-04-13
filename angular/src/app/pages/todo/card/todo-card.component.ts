import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css'],
})
export class TodoCardComponent {
  faCheckCircle = faCheckCircle;
  title: string = '';
  completed: boolean = false;

  @Input() childMessage: string = '';

  @Output() toggle = new EventEmitter<boolean>();
  @Output() textChange = new EventEmitter<string>();
  @Output() delete = new EventEmitter();

  onToggleCompleted(bool: boolean) {
    this.toggle.emit(bool);
  }

  onTextChange(event: any) {
    this.textChange.emit(event.target.value);
  }

  onDelete() {
    this.delete.emit();
  }
}
