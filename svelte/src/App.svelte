<script>
  import routes from './lib/routes';
  import Layout from './lib/layout/Layout.svelte';
  import { push } from 'svelte-spa-router';
</script>

<Layout {routes} />
