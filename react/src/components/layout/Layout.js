import React from 'react';
import './Layout.css';
import clsx from 'clsx';

import { BrowserRouter, NavLink, Navigate, Routes, Route } from 'react-router-dom';
import NavItem from './NavItem';

import ROUTES from '../../code/routes';

class Layout extends React.Component {
  render() {
    const navItems = ROUTES.map(r => {
      return (
        <NavLink
          className={state => clsx({ 'router-link-active': state.isActive })}
          key={r.path}
          to={r.path}
        >
          <NavItem route={r} />
        </NavLink>
      );
    });

    const pages = ROUTES.map((r, i) => {
      const TagName = r.component;
      return <Route path={r.path} element={<TagName />} key={i} />;
    });

    let redirect = null;
    const redirectTo = ROUTES.find(r => r.redirect);

    if (redirectTo) {
      redirect = <Route path="*" element={<Navigate to={redirectTo.path} replace />} />;
    }

    return (
      <div className="layout">
        <BrowserRouter>
          <nav className="nav-bar">
            <img src="logo512.png" alt="React Logo" />
            {navItems}
          </nav>

          <div className="page-wrapper">
            <div className="page">
              <Routes>
                {pages}
                {redirect}
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Layout;
