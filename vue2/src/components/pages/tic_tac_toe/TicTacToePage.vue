<template>
  <div class="tic-tac-toe-page">
    <TTTBoard />
  </div>
</template>

<script>
import TTTBoard from './TTTBoard.vue';

export default {
  name: 'TicTacToePage',
  components: {
    TTTBoard,
  },
};
</script>