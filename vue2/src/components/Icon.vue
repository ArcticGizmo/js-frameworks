<template>
  <FontAwesomeIcon
    :class="{ invalid: !completeIcon }"
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
      const icon = LOOKUP[this.icon];

      if (!icon) {
        console.error(`[Icon] Cannot find icon '${this.icon}'. Has it been imported? See /code/icons.js`);
        return;
      }

      return [icon.prefix, icon.iconName];
    },
  },
};
</script>

<style>
.icon.invalid {
  color: red;
}
</style>