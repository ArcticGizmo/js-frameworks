<template>
  <div class="layout">
    <div class="nav-bar">
      <a class="docs" href="https://vuejs.org/guide/introduction.html" target="_blank">
        <img src="logo.png" />
      </a>
      <router-link v-for="route in routes" :key="route.path" :to="route.path">
        <NavItem :name="route.name" :icon="route.meta.icon" />
      </router-link>
    </div>

    <div class="page-wrapper">
      <div class="page">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import NavItem from './NavItem.vue';

import router from '@/code/router';

const routes = computed(() => router.getRoutes().filter(r => !r.meta.hide));
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

.layout .docs {
  width: 4rem;
  height: 4rem;
}

.layout .nav-bar img {
  height: 100%;
  width: 100%;
  border-bottom: 1px solid gray;
  padding: 0.5rem;
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
