import { Routes, Route, Link, Navigate } from 'solid-app-router';
import Layout from './layout/Layout';
import routes from './code/routes.js';

import TodoPage from './pages/todo/TodoPage';
import TicTacToePage from './pages/tic_tac_toe/TicTacToePage';

export default function App() {
  return (
    <div>
      <Layout routes={routes} />
    </div>
  );
}

// export default function App() {
//   return (
//     <div>
//       <h1>My Site with Lots of Pages</h1>
//       <nav>
//         <Link href="/todo">Todo</Link>
//         <Link href="/tic_tac_toe">Tic-Tac-Toe</Link>
//       </nav>
//       <Routes>
//         <Route path="/">
//           <Navigate href="/todo" />
//         </Route>
//         {/* <Route path="/todo" element={<TodoPage />} />
//         <Route path="/tic_tac_toe" element={<TicTacToePage />} /> */}
//       </Routes>
//     </div>
//   );
// }
