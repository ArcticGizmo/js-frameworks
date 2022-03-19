<template>
  <div class="layout">
    <div class="nav-bar">
      <router-link v-for="route in routes" :key="route.path" :to="route.path">
        <NavItem :route="route" />
      </router-link>
    </div>

    <div class="page-wrapper">
      <div class="page">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import NavItem from './NavItem.vue';

export default {
  name: 'Layout',
  components: {
    NavItem,
  },
  computed: {
    routes() {
      return this.$router.options.routes.filter(r => !r.hide);
    },
  },
};
</script>

<style>
body {
  margin: 0;
}

.layout {
  color: black;
}

.layout .nav-bar {
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 4rem;
  background-color: #202225;
  height: 100vh;
  z-index: 1000;
}

.layout .page-wrapper {
  margin-left: 4rem;
}

.layout .page {
  margin: 1rem;
  padding-top: 1rem;
  padding-bottom: 1.5rem;
  border-bottom: 0.1px solid gray;
}
</style>