<template>
  <div class="todo-card">
    <div class="heading">
      <CompleteIcon :value="!!completed" @input="onToggleCompleted" />
      <span class="title">{{ title }}</span>
    </div>
    <div class="created">{{ createdAt }}</div>
  </div>
</template>

<script>
import CompleteIcon from './CompleteIcon.vue';

export default {
  name: 'TodoCard',
  components: {
    CompleteIcon,
  },
  props: {
    title: { type: String, required: true },
    created: { type: Date, default: null },
    completed: { type: Date, default: null },
  },
  computed: {
    createdAt() {
      if (!this.created) {
        return;
      }

      return this.created.toISOString();
    },
  },
  methods: {
    onToggleCompleted(bool) {
      this.$emit('toggle', bool);
    },
  },
};
</script>

<style>
.todo-card {
  height: 3rem;
  width: 24rem;
  margin: 1rem;
  box-shadow: 5px 5px 10px 0 gray;
  border: 1px solid transparent;
}

.todo-card .heading {
  margin-top: 0.5rem;
  padding-left: 0.5rem;
}

.todo-card .heading .title {
  padding-left: 0.5rem;
}

.todo-card .created {
  float: right;
  font-size: 0.65rem;
  padding-right: 0.25rem;
  color: gray;
  margin-top: -0.5rem;
}
</style>