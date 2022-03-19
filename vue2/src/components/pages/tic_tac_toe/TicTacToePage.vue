<template>
  <div class="tic-tac-toe-page">
    <div class="actions" @click="onReset()">
      <button>Reset</button>
    </div>
    <div class="game-wrapper">
      <div class="game-area">
        <TTTBoard
          :class="{ complete: !!winningPlayer }"
          :player="active.player"
          :cells="active.cells"
          @change="onChange"
        />
        <div v-if="winningPlayer" class="winner">
          <div class="label">Player {{ winningPlayer }} Wins!</div>
        </div>
      </div>
    </div>

    <div class="history">
      <pre>{{ history }}</pre>
    </div>
  </div>
</template>

<script>
import TTTBoard from './TTTBoard.vue';
import { calculateWinner } from '@/code/ttt';

function initBoard() {
  return { player: 'O', cells: Array(9).fill(null) };
}

export default {
  name: 'TicTacToePage',
  components: {
    TTTBoard,
  },
  data: () => {
    return {
      history: [initBoard()],
    };
  },
  computed: {
    active() {
      return this.history[this.history.length - 1];
    },
    winningPlayer() {
      return calculateWinner(this.active.cells);
    },
  },
  methods: {
    onReset() {
      this.history = [initBoard()];
    },
    onChange(event) {
      if (this.winningPlayer) {
        return;
      }
      this.history.push(event);
    },
  },
};
</script>

<style>
.tic-tac-toe-page .game-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: row;
}

.tic-tac-toe-page .game-wrapper .game-area {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.tic-tac-toe-page .game-area .complete {
  pointer-events: none;
}

.tic-tac-toe-page .winner {
  width: 12rem;
  height: 2rem;
}

.tic-tac-toe-page .winner .label {
  background-color: #3fb27f;
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  font-weight: bold;
}
</style>