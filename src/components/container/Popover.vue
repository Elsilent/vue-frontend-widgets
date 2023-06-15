<script lang="ts" setup>
import { toRefs } from 'vue';
import Card from './Card.vue';

const props = defineProps<{
  visible: boolean;
}>();

const { visible } = toRefs(props);
</script>

<template lang="pug">
Card.no-spacing.popover(:class='{ visible }')
  slot(default)
</template>

<style lang="scss" scoped>
.popover {
  opacity: 0;
  outline: none;
  pointer-events: none;
  position: absolute;
  transition-property: background-color, opacity;

  &.visible {
    opacity: 1;
    pointer-events: initial;
  }
}
</style>
