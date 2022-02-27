<template>
  <div class="nav-bar">
    <router-link v-for="route in routes" :key="route.path" :to="route.path">
      <div
        class="nav-item"
        v-tooltip="{ content: route.name, placement: 'right', delay: { show: 0, hide: 0 } }"
      >
        <Icon :icon="route.icon" />
      </div>
    </router-link>

    <!-- <div
      v-tooltip="{ content: item.name, placement: 'right', delay: { show: 0, hide: 0 } }"
      class="nav-item"
      v-for="item in routes"
      :key="item.path"
    >
      <Icon :icon="item.icon" />
    </div> -->
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
  width: 3rem;
  background-color: rgb(193, 255, 193);
  height: 100vh;
  overflow-y: auto;
}

.nav-bar .nav-item {
  cursor: pointer;
}

.nav-bar .router-link-active .nav-item {
  background-color: rgb(165, 218, 165);
}

.nav-bar .nav-item:hover {
  opacity: 0.75;
}

.nav-bar .nav-item .icon {
  color: darkgreen;
  width: 3rem;
  height: 3rem;
  padding: 0.25rem;
}
</style>