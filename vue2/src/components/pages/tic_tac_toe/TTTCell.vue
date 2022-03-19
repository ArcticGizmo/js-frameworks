<template>
  <div class="ttt-cell" :class="{ empty: !letter }" @click="onClick()">
    {{ letter }}
  </div>
</template>

<script>
export default {
  name: 'TTTCell',
  props: {
    letter: { type: String, default: '' },
  },
  methods: {
    onClick() {
      if (!this.letter) {
        this.$emit('select');
      }
    },
  },
};
</script>

<style>
.ttt-cell {
  width: 100%;
  height: 100%;
  font-weight: bold;
  border: 1px solid black;
}

.ttt-cell.empty:hover {
  cursor: pointer;
  background-color: #3fb27f;
}
</style>