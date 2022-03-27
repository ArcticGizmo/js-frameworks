<template>
  <div class="tic-tac-toe-page">
    <div class="actions">
      <button @click="onReset()">Reset</button>
      <button v-if="history.length > 1" @click="onUndo()">Undo</button>
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
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import TTTBoard from './TTTBoard.vue';
import { calculateWinner } from '@/code/ttt';

function initBoard() {
  return { player: 'O', cells: Array(9).fill(null) };
}

const history = ref([initBoard()]);

const active = computed(() => history.value[history.value.length - 1]);
const winningPlayer = computed(() => calculateWinner(active.value.cells));

const onReset = () => (history.value = [initBoard()]);
const onUndo = () => {
  const histories = history.value.slice();
  histories.splice(-1, 1);
  history.value = histories;
};

const onChange = event => {
  if (!winningPlayer.value) {
    history.value.push(event);
  }
};
</script>

<style>
.tic-tac-toe-page .actions > * {
  margin-right: 0.25rem;
}

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
