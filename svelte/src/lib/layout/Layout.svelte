<script>
  import { link, push } from 'svelte-spa-router';
  import active from 'svelte-spa-router/active';
  import Router from 'svelte-spa-router';

  import logo from '../../assets/logo.png';
  import NavItem from './NavItem.svelte';

  export let routes = {};

  function createRouteMap(givenRoutes) {
    const map = {
      '/': undefined,
    };

    givenRoutes.forEach(r => {
      if (r.component) {
        map[r.path] = r.component;
      }
    });

    return map;
  }

  $: validRoutes = routes.filter(r => (r.meta || {}).hide !== true);

  $: routeMap = createRouteMap(routes);

  push('/todo');
</script>

<div class="layout">
  <nav>
    <a class="docs" href="https://svelte.dev/" target="_blank">
      <img src={logo} alt="Svelte Logo" />
    </a>
    {#each validRoutes as route}
      <a href={route.path} use:link use:active>
        <NavItem {route} />
      </a>
    {/each}
  </nav>

  <div class="page-wrapper">
    <div class="page">
      <Router routes={routeMap} />
    </div>
  </div>
</div>

<style>
  .layout {
    color: black;
  }

  .layout nav {
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

  .layout .docs img {
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
