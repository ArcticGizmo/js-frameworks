<template>
  <div class="nav-bar">
    <div class="nav-item" v-for="item in routes" :key="item.path">
      {{ item.name }} <Icon icon="hat-wizard" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    routes: { type: Array, default: () => [] },
  },
};
</script>

<style>
.nav-bar {
  /* position: fixed; */
  width: 4rem;
  background-color: green;
  height: 100vh;
  overflow-y: auto;
}
</style>