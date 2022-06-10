<script>
  import { Router, Route, Link } from 'svelte-navigator';

  import logo from './assets/svelte.png';
  import NavItem from './NavItem.svelte';

  export let routes = [];
</script>

<div class="layout">
  <div class="nav-bar">
    <img src={logo} alt="Svelte Logo" />
    {#each routes as route}
      <Route path={route.path}>
        <NavItem {route} />
      </Route>
    {/each}
  </div>

  <div class="page-wrapper">
    <div class="page">
      <!-- route view -->
    </div>
  </div>
</div>
