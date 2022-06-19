<template>
  <div class="complete-icon" :class="{ complete: value, incomplete: !value }" @click="onToggle()">
    <Icon icon="check" />
  </div>
</template>

<script>
export default {
  name: 'CompleteIcon',
  props: {
    value: { type: Boolean, default: false },
  },
  methods: {
    onToggle() {
      this.$emit('input', !this.value);
    },
  },
};
</script>

<style>
.complete-icon {
  cursor: pointer;
  display: inline-block;
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  border-radius: 100%;
  border: 1px solid black;
  transition: background-color 0.3s ease-in-out;
}

.complete-icon .icon {
  margin-left: 0.5rem;
}

.complete-icon.complete {
  background-color: lightgreen;
}
</style>
