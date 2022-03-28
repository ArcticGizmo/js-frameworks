import React from 'react';
import './NavItem.css';

import Icon from '../../components/Icon';

class NavItem extends React.Component {
  render() {
    const route = this.props.route;
    return (
      <div className="nav-item">
        <Icon icon={route.icon} />
        <span className="nav-bar-tooltip">{route.name}</span>
      </div>
    );
  }
}

export default NavItem;
