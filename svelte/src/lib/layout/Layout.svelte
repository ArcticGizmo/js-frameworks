<script>
  import { Router, Route, Link } from 'svelte-navigator';

  import logo from '../../assets/logo.png';
  import NavItem from './NavItem.svelte';

  export let routes = [];

  $: validRoutes = routes.filter(r => (r.meta || {}).hide !== true);
</script>

<Router>
  <div class="layout">
    <nav>
      <img src={logo} alt="Svelte Logo" />
      {#each validRoutes as route}
        <Link to={route.path}>
          <NavItem {route} />
        </Link>
      {/each}
    </nav>

    <div class="page-wrapper">
      <div class="page">
        {#each routes as route}
          <Route path={route.path} component={route.component} />
        {/each}
      </div>
    </div>
  </div>
</Router>
