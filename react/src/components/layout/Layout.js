import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoPage from '../pages/todo/TodoPage';
import TicTacToePage from '../pages/tic_tac_toe/TicTacToePage';

class Layout extends React.Component {
  render() {
    return (
      <div className="layout">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TodoPage />} />
            <Route path="/tic_tac_toe" element={<TicTacToePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default Layout;
