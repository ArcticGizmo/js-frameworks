<template>
  <div class="layout">
    <NavBar :routes="routes" />
    <router-view />
  </div>
</template>

<script>
import NavBar from './NavBar.vue';

export default {
  name: 'Layout',
  components: {
    NavBar,
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    },
  },
};
</script>

<style>
.layout {
  position: relative;
  min-height: 100vh;
}

body {
  margin: 0;
}
</style>