<template>
  <FontAwesomeIcon
    :class="{ invalid: !completeIcon, hidden: !icon }"
    class="icon"
    :icon="completeIcon || ['fas', 'cancel']"
  />
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import * as allIcons from '@/code/icons.js';

const ICONS = Object.values(allIcons);

const LOOKUP = ICONS.reduce((acc, icon) => {
  acc[icon.iconName] = icon;
  return acc;
}, {});

// add icons
library.add(...ICONS);

export default {
  components: {
    FontAwesomeIcon,
  },
  props: {
    icon: { type: String, default: null },
  },
  computed: {
    completeIcon() {
      if (!this.icon) {
        return;
      }

      const icon = LOOKUP[this.icon];

      if (!icon) {
        console.error(
          `[Icon] Cannot find icon '${this.icon}'. Has it been imported? See /code/icons.js`,
        );
        return;
      }

      return [icon.prefix, icon.iconName];
    },
  },
};
</script>

<style>
svg.icon.svg-inline--fa {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.icon.invalid {
  color: red;
}

.icon.hidden {
  opacity: 0;
}
</style>