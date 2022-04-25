import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Board } from 'src/app/code/types';

function nextPlayer(player: string): string {
  if (player === 'X') {
    return 'O';
  }
  return 'X';
}

@Component({
  selector: 'ttt-board',
  templateUrl: './ttt-board.component.html',
  styleUrls: ['./ttt-board.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TttBoardComponent {
  @Input() player: string = '';
  @Input() cells: string[] = [];

  @Output() change = new EventEmitter<Board>();

  onSelect(index: number) {
    const player = nextPlayer(this.player);
    const cells = this.cells.slice();
    cells[index] = player;

    const state = {
      player,
      cells,
    };

    this.change.emit(state);
  }
}
