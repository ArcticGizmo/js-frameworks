<template>
  <div class="ttt-board">
    <TTTCell
      v-for="(letter, index) in cells"
      :key="index"
      :letter="letter"
      @select="onSelect(index)"
    />
  </div>
</template>

<script setup>
import TTTCell from './TTTCell.vue';

const props = defineProps({
  player: String,
  cells: Array,
});

const emit = defineEmits(['change']);

function nextPlayer(player) {
  return player === 'X' ? 'O' : 'X';
}

const setCell = index => {
  const player = nextPlayer(props.player);
  const cells = props.cells.slice();
  cells[index] = player;

  const state = {
    player,
    cells,
  };

  emit('change', state);
};

const onSelect = index => setCell(index);
</script>

<style>
.ttt-board {
  display: grid;
  grid-template-columns: 4rem 4rem 4rem;
}

.ttt-board .ttt-cell {
  aspect-ratio: 1;
  font-size: 2.5rem;
  text-align: center;
  height: 4rem;
  width: 4rem;
  line-height: 4rem;
}
</style>
