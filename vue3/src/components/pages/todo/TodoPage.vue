<template>
  <div class="todo-page">
    <div class="add">
      <button @click="onAdd()">Create New</button>
    </div>
    <div class="cards">
      <TodoCard
        v-for="(entry, index) in todos"
        :class="{ dim: !!entry.completed }"
        :key="index"
        v-bind="entry"
        @toggle="onToggleComplete(index)"
        @textChange="onTextChange(index, $event)"
        @delete="onDelete(index)"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import TodoCard from './TodoCard.vue';

const store = useStore();

const todos = computed(() => store.state.todos);

const setTodos = todos => store.commit('setTodos', todos);

const onAdd = () => {
  const entries = todos.value.slice();
  const entry = { title: '', created: new Date(), completed: null };
  entries.push(entry);
  setTodos(entries);
};

const onToggleComplete = index => {
  const entries = todos.value.slice();
  const newEntry = { ...entries[index] };

  if (newEntry.completed) {
    newEntry.completed = null;
  } else {
    newEntry.completed = new Date();
  }

  entries[index] = newEntry;

  setTodos(entries);
};

const onTextChange = (index, title) => {
  const entries = todos.value.slice();
  const newEntry = { ...entries[index], title };
  entries[index] = newEntry;
  setTodos(entries);
};

const onDelete = index => {
  const entries = todos.value.slice();
  entries.splice(index, 1);
  setTodos(entries);
};
</script>
