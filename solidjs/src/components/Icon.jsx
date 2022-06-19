import './Icon.css';
import Fa from 'solid-fa';
import { faCancel } from '@fortawesome/free-solid-svg-icons';

import * as allIcons from '../code/icons';
import { createMemo } from 'solid-js';

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

  const i = createMemo(() => icon().icon || [0, 0, '', [], '']);
  const s = createMemo(() => '');

  return (
    <div classList={{ icon: true, [props.className]: true }}>
      <svg
        className="solid-fa"
        viewBox={`0 0 ${i()[0]} ${i()[1]}`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          transform={`translate(${i()[0] / 2} ${i()[1] / 2})`}
          transform-origin={`${i()[0] / 4} 0`}
        >
          <g>
            <Show
              when={typeof i()[4] === 'string'}
              fallback={
                <>
                  <path
                    d={i()[4][0]}
                    fill={props.secondaryColor || props.color || 'currentColor'}
                    fill-opacity={
                      props.swapOpacity != false ? props.primaryOpacity : props.secondaryOpacity
                    }
                    transform={`translate(${i()[0] / -2} ${i()[1] / -2})`}
                  />
                  <path
                    d={i()[4][1]}
                    fill={props.primaryColor || props.color || 'currentColor'}
                    fill-opacity={
                      props.swapOpacity != false ? props.secondaryOpacity : props.primaryOpacity
                    }
                    transform={`translate(${i()[0] / -2} ${i()[1] / -2})`}
                  />
                </>
              }
            >
              <path
                d={i()[4]}
                fill={props.color || props.primaryColor || 'currentColor'}
                transform={`translate(${i()[0] / -2} ${i()[1] / -2})`}
              />
            </Show>
          </g>
        </g>
      </svg>
    </div>
  );

  const classes = () => {
    return {
      icon: true,
      invalid: !computedIcon(),
      hidden: !props.icon,
      [props.className]: true,
    };
  };

  return (
    <div classList={classes()} onClick={props.onClick}>
      <Fa icon={icon()} size="0.1x" />
    </div>
  );
}
