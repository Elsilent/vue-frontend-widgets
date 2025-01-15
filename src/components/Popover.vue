<script lang="ts" setup>
import { computed, nextTick, ref, toRefs, watch } from 'vue';
import Card from './Card.vue';

const props = withDefaults(
  defineProps<{
    autoPosition?: boolean;
    parentNode?: HTMLElement;
    popoverClass?: string;
    visible: boolean;
  }>(),
  {
    autoPosition: false,
  },
);

const { autoPosition, parentNode, popoverClass, visible } = toRefs(props);

const left = ref<number | undefined>();
const popover = ref<typeof Card | undefined>();
const top = ref<number | undefined>();

const popoverClasses = computed(() => ({
  [popoverClass?.value ?? '']: !!popoverClass,
  visible: visible.value,
}));

const popoverStyle = computed(() => {
  if (!autoPosition.value || left.value === undefined || top.value === undefined) {
    return undefined;
  }

  return {
    left: `${left.value}px`,
    top: `${top.value}px`,
  };
});

const updatePosition = () => {
  if (!popover.value || !parentNode?.value) {
    return;
  }

  const parentRect = parentNode.value.getBoundingClientRect();

  left.value = 0;
  top.value = 0;

  nextTick(() => {
    const scrollLeft = parentRect.left;
    const scrollTop = parentRect.top + document.documentElement.scrollTop;

    const popoverWidth = popover.value!.$el.offsetWidth;
    const popoverWidthDelta = (popoverWidth - parentRect.width) / 2;

    if (parentRect.left - popoverWidthDelta < 0) {
      left.value = scrollLeft;
    } else if (parentRect.left + popoverWidthDelta + parentRect.width > document.body.clientWidth) {
      left.value = scrollLeft - popoverWidth + parentRect.width;
    } else {
      left.value = scrollLeft - popoverWidthDelta;
    }

    const popoverHeight = popover.value!.$el.offsetHeight;

    if (parentRect.bottom + popoverHeight > document.body.clientHeight) {
      top.value = scrollTop - popoverHeight;
    } else {
      top.value = scrollTop + parentRect.height;
    }
  });
};

const resizeObserver = autoPosition?.value ? new ResizeObserver(() => updatePosition()) : undefined;

watch(
  visible,
  (visible) => {
    if (!autoPosition?.value || !resizeObserver) {
      return;
    }

    resizeObserver.disconnect();

    if (visible) {
      nextTick(() => {
        updatePosition();

        resizeObserver!.observe(popover.value!.$el);
      });
    }
  },
  {
    immediate: true,
  },
);
</script>

<template lang="pug">
Card.no-spacing.popover(
  ref='popover',
  :class='popoverClasses',
  :style='popoverStyle',
)
  slot(default)
</template>

<style lang="scss" scoped>
.popover {
  opacity: 0;
  outline: none;
  pointer-events: none;
  position: absolute;
  transition-property: background-color, opacity;
  z-index: 1000;

  &.visible {
    opacity: 1;
    pointer-events: initial;
  }
}
</style>
