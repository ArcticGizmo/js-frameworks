import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TodoCardComponent {
  @Input() title: string = '';
  @Input() completed: Date | null | undefined = undefined;

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
