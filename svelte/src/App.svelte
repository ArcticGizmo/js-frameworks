<script>
  import { Router, Link, Route } from 'svelte-navigator';
  import routes from './lib/routes';
  import TodoPage from './lib/pages/todo/TodoPage.svelte';
  import TicTacToePage from './lib/pages/tic_tac_toe/TicTacToePage.svelte';
</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="todo">Todo</Link>
    <Link to="tic_tac_toe">Tic Tac Toe</Link>
  </nav>

  <div>
    <Route path="/" component={TodoPage} />
    <Route path="todo" component={TodoPage} />
    <Route path="tic_tac_toe" component={TicTacToePage} />
  </div>
</Router>
