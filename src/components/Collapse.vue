<script lang="ts" setup>
import { toRefs } from 'vue';

const props = withDefaults(
  defineProps<{
    expanded?: boolean;
  }>(),
  {
    expanded: false,
  },
);

const { expanded } = toRefs(props);

const afterEnter = (element: Element) => {
  const htmlElement = element as HTMLElement;

  htmlElement.style.height = 'auto';
};

const whenEntered = (element: Element) => {
  const htmlElement = element as HTMLElement;

  const width = getComputedStyle(htmlElement).width;

  htmlElement.style.width = width;
  htmlElement.style.position = 'absolute';
  htmlElement.style.visibility = 'hidden';
  htmlElement.style.height = 'auto';

  const height = getComputedStyle(htmlElement).height;

  htmlElement.style.width = '';
  htmlElement.style.position = '';
  htmlElement.style.visibility = '';
  htmlElement.style.height = '0';

  getComputedStyle(htmlElement).height;

  requestAnimationFrame(() => {
    htmlElement.style.height = height;
  });
};

const whenLeft = (element: Element) => {
  const htmlElement = element as HTMLElement;

  const height = getComputedStyle(htmlElement).height;

  htmlElement.style.height = height;

  getComputedStyle(htmlElement).height;

  requestAnimationFrame(() => {
    htmlElement.style.height = '0';
  });
};
</script>

<template lang="pug">
transition(
  name='collapse',
  @afterEnter='afterEnter',
  @enter='whenEntered',
  @leave='whenLeft',
)
  .collapse(v-if='expanded')
    slot(default)
</template>

<style lang="scss" scoped>
@import '../styles/transition';

.collapse-enter-active,
.collapse-leave-active {
  overflow: hidden;
  transition-duration: $transition-duration-normal;
  transition-property: height, opacity;
}

.collapse-enter-from,
.collapse-leave-to {
  opacity: 0;
}
</style>
