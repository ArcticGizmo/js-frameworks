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

<script>
import TTTCell from './TTTCell.vue';

function nextPlayer(player) {
  if (player === 'X') {
    return 'O';
  }
  return 'X';
}

export default {
  name: 'TTTBoard',
  components: {
    TTTCell,
  },
  props: {
    player: { type: String, required: true },
    cells: { type: Array, required: true },
  },
  methods: {
    onSelect(index) {
      this.setCell(index);
    },
    setCell(index) {
      const player = nextPlayer(this.player);
      const cells = this.cells.slice();
      cells[index] = player;

      const state = {
        player,
        cells,
      };

      this.$emit('change', state);
    },
  },
};
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