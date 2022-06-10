<script>
  import { Router, Link, Route } from 'svelte-navigator';
  import routes from './lib/routes';
  import TodoPage from './lib/pages/todo/TodoPage.svelte';
  import TicTacToePage from './lib/pages/tic_tac_toe/TicTacToePage.svelte';
  import Layout from './lib/layout/Layout.svelte';
</script>

<Layout {routes} />
