import { createStore } from 'vuex';

const state = {
  todos: [{ title: 'Example todo', created: new Date(), completed: null }],
};

const getters = {};

const actions = {};

const mutations = {
  setTodos(state, todos = []) {
    state.todos = todos;
  },
};

export default createStore({
  state,
  getters,
  actions,
  mutations,
  strict: true,
});
