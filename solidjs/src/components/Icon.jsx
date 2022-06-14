import './Icon.css';
import Fa from 'solid-fa';
import { faCancel } from '@fortawesome/free-solid-svg-icons';

import * as allIcons from '../code/icons';

const ICONS = Object.values(allIcons);

const LOOKUP = ICONS.reduce((acc, icon) => {
  acc[icon.iconName] = icon;
  return acc;
}, {});

function determineIcon(givenIcon) {
  if (!givenIcon) {
    return;
  }

  const maybeIcon = LOOKUP[givenIcon];

  if (!maybeIcon) {
    console.error(`[Icon] Cannot find icon ${givenIcon}. Has it been imported? See /lib/icons.js`);
  }

  return maybeIcon;
}

export default function Icon(props) {
  const computedIcon = () => determineIcon(props.icon);
  const icon = () => computedIcon() || faCancel;

  const classes = () => {
    return {
      icon: true,
      invalid: !computedIcon(),
      hidden: !props.icon,
    };
  };

  return (
    <div classList={classes()}>
      <Fa icon={icon()} />
    </div>
  );
}
