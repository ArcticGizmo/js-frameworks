<template>
  <div class="ttt-cell" :class="{ empty: !props.letter }" @click="onClick()">
    {{ letter }}
  </div>
</template>

<script setup>
const props = defineProps({
  letter: String,
});

const emit = defineEmits(['select']);

const onClick = () => emit('select');
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
