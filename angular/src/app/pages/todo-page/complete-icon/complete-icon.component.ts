import {
  Component,
  Input,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'complete-icon',
  templateUrl: './complete-icon.component.html',
  styleUrls: ['./complete-icon.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CompleteIconComponent {
  @Input() value: boolean = false;
  @Output() input = new EventEmitter();

  onToggle() {
    this.input.emit(!this.value);
  }
}
