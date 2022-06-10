<script>
  import Fa from 'svelte-fa';
  import { faCancel } from '@fortawesome/free-solid-svg-icons';
  import { cls } from '../util';
  import * as allIcons from '../icons.js';

  const ICONS = Object.values(allIcons);

  const LOOKUP = ICONS.reduce((acc, icon) => {
    acc[icon.iconName] = icon;
    return acc;
  }, {});

  export let icon;
  let className = '';
  export { className as class };

  function determineIcon(givenIcon) {
    if (!givenIcon) {
      return;
    }

    const maybeIcon = LOOKUP[givenIcon];

    if (!maybeIcon) {
      console.error(
        `[Icon] Cannot find icon ${givenIcon}. Has it been imported? See /lib/icons.js`,
      );
    }

    return maybeIcon;
  }

  $: completeIcon = determineIcon(icon);

  $: classes = cls({ icon: true, [className]: true, invalid: !completeIcon, hidden: !icon });
</script>

<div class={classes}>
  <Fa icon={completeIcon || faCancel} />
</div>

<style>
  .icon :global(svg.svelte-fa) {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .icon.invalid :global(svg.svelte-fa) {
    color: red;
  }

  .icon.hidden :global(svg.svelte-fa) {
    opacity: 0;
  }
</style>
