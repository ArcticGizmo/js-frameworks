import React from 'react';
import './Icon.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

import * as allIcons from '../code/icons';

const ICONS = Object.values(allIcons);

const LOOKUP = ICONS.reduce((acc, icon) => {
  acc[icon.iconName] = icon;
  return acc;
}, {});

// add icons
library.add(...ICONS);

class Icon extends React.Component {
  get completeIcon() {
    const pIcon = this.props.icon;
    if (Array.isArray(pIcon)) {
      return pIcon;
    }

    if (!pIcon) {
      return;
    }

    const icon = LOOKUP[pIcon];

    if (!icon) {
      console.error(`[Icon] Cannot find icon '${pIcon}'. Has it been imported? See /code/icons.js`);
      return;
    }

    return [icon.prefix, icon.iconName];
  }

  render() {
    const icon = this.completeIcon || ['fas', 'cancel'];
    const classes = clsx('icon', { invalid: !icon, hidden: !this.props.icon });

    return <FontAwesomeIcon className={classes} icon={icon} />;
  }
}

export default Icon;
