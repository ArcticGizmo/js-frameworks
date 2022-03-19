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

export default {
  name: 'TTTBoard',
  components: {
    TTTCell,
  },
  data: () => {
    return {
      player: 'X',
      history: [Array(9).fill(null)],
    };
  },
  computed: {
    cells() {
      return this.history[this.history.length - 1];
    },
  },
  methods: {
    onSelect(index) {
      this.setCell(index);
    },
    setCell(index) {
      const cells = this.cells.slice();
      cells[index] = this.player;
      this.togglePlayer();

      this.history.push(cells);
    },
    togglePlayer() {
      this.player = this.player === 'X' ? 'O' : 'X';
    },
  },
};
</script>

<style>
.ttt-board {
  display: grid;
  grid-template-columns: 4rem 4rem 4rem;
}

.ttt-board > * {
  aspect-ratio: 1;
  font-size: 2.5rem;
  text-align: center;
  height: 4rem;
  width: 4rem;
  line-height: 4rem;
}
</style>