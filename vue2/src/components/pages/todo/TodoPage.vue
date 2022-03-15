<template>
  <div class="todo-page">
    <div class="add">
      <button @click="onAdd()">Create New</button>
    </div>
    <div class="cards">
      <TodoCard
        v-for="(entry, index) in entries"
        :class="{ dim: !!entry.completed }"
        :key="index"
        v-bind="entry"
        @toggle="onToggleComplete(entry)"
        @textChange="onTextChange(entry, $event)"
        @delete="onDelete(index)"
      />
    </div>
  </div>
</template>

<script>
import TodoCard from './TodoCard.vue';

export default {
  name: 'TodoPage',
  components: {
    TodoCard,
  },
  data: () => {
    return {
      entries: [{ title: 'Example item', created: new Date(), completed: null }],
    };
  },
  methods: {
    onAdd() {
      const entry = { title: '', created: new Date(), completed: null };
      this.entries.push(entry);
    },
    onToggleComplete(entry) {
      if (entry.completed) {
        entry.completed = null;
      } else {
        entry.completed = new Date();
      }

      this.entries = this.entries.slice();
    },
    onTextChange(entry, title) {
      entry.title = title;
      this.entries = this.entries.slice();
    },
    onDelete(index) {
      this.entries.splice(index, 1);
      this.entries = this.entries.slice();
    },
  },
};
</script>

.<style>
.todo-page .cards {
  min-height: 4rem;
  display: flex;
  flex-wrap: wrap;
}

.todo-page .cards .todo-card.dim {
  opacity: 0.5;
}
</style>