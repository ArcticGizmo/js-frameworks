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

<script>
import { mapState } from 'vuex';
import TodoCard from './TodoCard.vue';

export default {
  name: 'TodoPage',
  components: {
    TodoCard,
  },
  computed: {
    ...mapState({
      todos: state => state.todos,
    }),
  },
  methods: {
    setTodos(todos) {
      this.$store.commit('setTodos', todos);
    },
    onAdd() {
      const entries = this.todos.slice();
      const entry = { title: '', created: new Date(), completed: null };
      entries.push(entry);
      this.setTodos(entries);
    },
    onToggleComplete(index) {
      const entries = this.todos.slice();
      const newEntry = { ...entries[index] };

      if (newEntry.completed) {
        newEntry.completed = null;
      } else {
        newEntry.completed = new Date();
      }

      entries[index] = newEntry;

      this.setTodos(entries);
    },
    onTextChange(index, title) {
      const entries = this.todos.slice();
      const newEntry = { ...entries[index], title };

      entries[index] = newEntry;

      this.setTodos(entries);
    },
    onDelete(index) {
      const entries = this.todos.slice();
      entries.splice(index, 1);
      this.setTodos(entries);
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