import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'ttt-cell',
  templateUrl: './ttt-cell.component.html',
  styleUrls: ['./ttt-cell.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TttCellComponent {
  @Input() letter: string = '';

  @Output() select = new EventEmitter();

  onClick() {
    if (!this.letter) {
      this.select.emit();
    }
  }
}
