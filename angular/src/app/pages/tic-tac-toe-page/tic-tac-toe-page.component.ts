import { Component, ViewEncapsulation } from '@angular/core';
import { Board } from 'src/app/code/types';
import { calculateWinner } from 'src/app/code/ttt';

function defaultBoard() {
  return { player: 'O', cells: Array(9).fill(null) };
}

@Component({
  selector: 'tic-tac-toe-page',
  templateUrl: './tic-tac-toe-page.component.html',
  styleUrls: ['./tic-tac-toe-page.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TicTacToePageComponent {
  private _history: Board[] = [defaultBoard()];

  active: Board;
  winningPlayer: string | null = null;

  get history() {
    return this._history;
  }

  set history(value: Board[]) {
    this._history = value;
    this.update();
  }

  constructor() {
    this.active = this._history[this._history.length - 1];
  }

  update() {
    this.active = this._history[this._history.length - 1];
    this.winningPlayer = calculateWinner(this.active.cells);
  }

  onReset() {
    this.history = [defaultBoard()];
  }

  onUndo() {
    this.history.splice(-1, 1);
    this.update();
  }

  onChange(board: Board) {
    if (this.winningPlayer) {
      return;
    }

    this.history.push(board);
    this.update();
  }
}
