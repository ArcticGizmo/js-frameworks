import React from 'react';
import './Layout.css';

import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import TodoPage from '../pages/todo/TodoPage';
import TicTacToePage from '../pages/tic_tac_toe/TicTacToePage';

class Layout extends React.Component {
  render() {
    return (
      <div className="layout">
        <div className="nav-bar"></div>

        <div className="page-wrapper">
          <BrowserRouter className="page">
            <Routes>
              <Route path="/todo" element={<TodoPage />} />
              <Route path="/tic_tac_toe" element={<TicTacToePage />} />
              <Route path="*" element={<Navigate to="/todo" replace />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default Layout;
