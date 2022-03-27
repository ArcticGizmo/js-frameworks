import React from 'react';
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
  constructor(props) {
    super(props);
    console.dir('----- props');
    console.dir(props);
  }

  render() {
    const classes = clsx('icon', { invalid: false, hidden: !this.props.icon });

    return (
      <div>
        <FontAwesomeIcon className={classes} icon={this.props.icon} />
      </div>
    );
  }
}

export default Icon;
