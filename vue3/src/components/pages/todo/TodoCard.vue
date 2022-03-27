<template>
  <div class="todo-card">
    <CompleteIcon :value="!!props.completed" @input="onToggleCompleted" />
    <input
      class="title"
      :value="props.title"
      :disabled="!!props.completed"
      @change="onTextChange"
    />
    <Icon class="delete" icon="xmark" @click="onDelete()" />
  </div>
</template>

<script setup>
import CompleteIcon from './CompleteIcon.vue';

const props = defineProps({
  title: String,
  completed: Date,
});

const emit = defineEmits(['toggle', 'textChange', 'delete']);

const onToggleCompleted = bool => emit('toggle', bool);
const onTextChange = event => emit('textChange', event.target.value);
const onDelete = () => emit('delete');
</script>

<style>
.todo-card {
  display: inline-flex;
  height: 3rem;
  width: 24rem;
  margin: 1rem;
  padding: 0.5rem;
  box-shadow: 5px 5px 10px 0 gray;
  border: 1px solid transparent;
}

.todo-card .title {
  margin-left: 0.5rem;
  padding-left: 0.5rem;
  border: none;
  border-bottom: 1px solid gray;
  height: 2rem;
  line-height: 1.5rem;
  flex-grow: 1;
}

.todo-card .delete {
  cursor: pointer;
  margin: auto;
  margin-left: 0.5rem;
}

.todo-card .delete:hover {
  opacity: 0.8;
}
</style>
