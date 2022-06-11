import { Routes, Route } from "solid-app-router";

import TodoPage from "./pages/TodoPage";
import TicTacToePage from "./pages/TicTacToePage";

export default function App() {
  return (
    <div>
      <h1>My Site with Lots of Pages</h1>
      <Routes>
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/tic_tac_toe" element={<TicTacToePage />} />
      </Routes>
    </div>
  );
}
