import React from 'react';
import './CompleteIcon.css'
import clsx from 'clsx';

import Icon from '../../Icon';

class CompleteIcon extends React.Component {
  render() {
    const value = this.props.value;
    const classes = clsx('complete-icon', { complete: !!value, incomplete: !value });
    return (
      <div className={classes} onClick={this.props.onToggle}>
        <Icon icon="check" />
      </div>
    );
  }
}

export default CompleteIcon;
