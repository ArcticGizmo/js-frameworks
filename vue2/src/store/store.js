import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

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

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: true,
});
