import {
  Component,
  Input,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  Output,
} from '@angular/core';

@Component({
  selector: 'complete-icon',
  templateUrl: './complete-icon.component.html',
  styleUrls: ['./complete-icon.component.css'],
})
export class CompleteIconComponent implements OnChanges {
  @Input() value: boolean = false;
  @Output() input = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {}

  onToggle() {
    this.input.emit(!this.value);
  }
}
