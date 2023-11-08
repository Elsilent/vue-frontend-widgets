<script lang="ts" setup>
import { computed, nextTick, onMounted, onUnmounted, ref, toRefs, watch } from 'vue';
import ScrollableArea from './ScrollableArea.vue';

const props = withDefaults(
  defineProps<{
    mode?: 'both' | 'both-top' | 'horizontal' | 'vertical';
    relativeTo?: () => HTMLElement;
    scrollPosition: { left: number; top: number };
    scrollHeightDelta?: number;
    scrollWidthDelta?: number;
    staticPosition?: boolean;
  }>(),
  {
    mode: 'vertical',
    scrollPosition: () => ({ left: 0, top: 0 }),
    scrollHeightDelta: 0,
    scrollWidthDelta: 0,
    staticPosition: false,
  },
);

const { mode, relativeTo, scrollPosition, scrollHeightDelta, scrollWidthDelta, staticPosition } =
  toRefs(props);

const active = ref(false);
const containerHeight = ref(0);
const containerWidth = ref(0);
const contentHeight = ref(0);
const contentWidth = ref(0);
const forceActiveMode = ref<'horizontal' | 'vertical' | undefined>();
const forceActiveInitialPositionLeft = ref<number | undefined>();
const forceActiveInitialPositionTop = ref<number | undefined>();
const forceActiveInitialScrollLeft = ref<number | undefined>();
const forceActiveInitialScrollTop = ref<number | undefined>();
const scrollLeft = ref(0);
const scrollTop = ref(0);
const touchTimeout = ref<number | undefined>();

const leftRatio = computed(() => scrollLeft.value / (contentWidth.value - containerWidth.value));
const thumbWidth = computed(
  () => `max(56px, (100% - 14px) * ${containerWidth.value / contentWidth.value})`,
);
const thumbHeight = computed(
  () => `max(56px, (100% - 14px) * ${containerHeight.value / contentHeight.value})`,
);
const topRatio = computed(() => scrollTop.value / (contentHeight.value - containerHeight.value));

const content = ref<HTMLElement | undefined>();

const emit = defineEmits<{
  (e: 'update:scrollPosition', position: { left: number; top: number }): void;
}>();

onUnmounted(() => {
  mutationObserver.disconnect();
  resizeObserver.disconnect();
});

const cancelTouchTimeout = () => {
  if (!forceActiveMode.value) {
    return;
  }

  if (touchTimeout.value !== undefined) {
    clearTimeout(touchTimeout.value);

    touchTimeout.value = undefined;
  }

  active.value = false;
  forceActiveMode.value = undefined;
};

const getRelativeElement = () => {
  if (!relativeTo?.value) {
    return content.value;
  }

  return relativeTo.value();
};

const scrollTo = (position: { left?: number; top?: number }) => {
  const relativeElement = getRelativeElement();

  if (!relativeElement) {
    return;
  }

  relativeElement.scrollTo(position);
};

const setManualScrollLeftWith = (x: number) => {
  scrollTo({
    left:
      (forceActiveInitialScrollLeft?.value ?? 0) +
      (x * contentWidth.value) / (containerWidth.value - scrollWidthDelta.value),
  });
};

const setManualScrollTopWith = (y: number) => {
  scrollTo({
    top:
      (forceActiveInitialScrollTop?.value ?? 0) +
      (y * contentHeight.value) / (containerHeight.value - scrollHeightDelta.value),
  });
};

const whenScrolledManually = (event: MouseEvent) => {
  if (!forceActiveMode.value) {
    return;
  }

  switch (forceActiveMode.value) {
    case 'horizontal':
      setManualScrollLeftWith(event.clientX - (forceActiveInitialPositionLeft?.value ?? 0));
      break;
    case 'vertical':
      setManualScrollTopWith(event.clientY - (forceActiveInitialPositionTop?.value ?? 0));
      break;
  }

  event.preventDefault();
};

const unforceActive = () => {
  forceActiveMode.value = undefined;

  startTouchTimeout();

  window.removeEventListener('mousemove', whenScrolledManually);
  window.removeEventListener('mouseup', unforceActive);
};

const forceActive = (event: MouseEvent, newForceActiveMode: 'horizontal' | 'vertical') => {
  cancelTouchTimeout();

  active.value = true;
  forceActiveMode.value = newForceActiveMode;

  const relativeElement = getRelativeElement();

  switch (forceActiveMode.value) {
    case 'horizontal':
      forceActiveInitialPositionLeft.value = event.clientX;
      forceActiveInitialScrollLeft.value = relativeElement?.scrollLeft ?? 0;
      break;
    case 'vertical':
      forceActiveInitialPositionTop.value = event.clientY;
      forceActiveInitialScrollTop.value = relativeElement?.scrollTop ?? 0;
      break;
  }

  window.addEventListener('mousemove', whenScrolledManually);
  window.addEventListener('mouseup', unforceActive);
};


const setContainerHeightWith = (element: HTMLElement) => {
  if (containerHeight.value === element.clientHeight) {
    return;
  }

  containerHeight.value = element.clientHeight;
};

const setContainerWidthWith = (element: HTMLElement) => {
  if (containerWidth.value === element.clientWidth) {
    return;
  }

  containerWidth.value = element.clientWidth;
};

const setContentHeightWith = (element: HTMLElement) => {
  if (contentHeight.value === element.scrollHeight) {
    return;
  }

  contentHeight.value = element.scrollHeight;
};

const setContentWidthWith = (element: HTMLElement) => {
  if (contentWidth.value === element.scrollWidth) {
    return;
  }

  contentWidth.value = element.scrollWidth;
};

const setScrollLeftWith = (element: HTMLElement) => {
  scrollLeft.value = element.scrollLeft;

  emit('update:scrollPosition', {
    left: scrollLeft.value,
    top: scrollTop.value,
  });
};

const setScrollTopWith = (element: HTMLElement) => {
  scrollTop.value = element.scrollTop;

  emit('update:scrollPosition', {
    left: scrollLeft.value,
    top: scrollTop.value,
  });
};

const whenResized = () => {
  const relativeElement = getRelativeElement();

  if (!relativeElement) {
    return;
  }

  setContainerHeightWith(relativeElement);
  setContainerWidthWith(relativeElement);
  setContentHeightWith(relativeElement);
  setContentWidthWith(relativeElement);
};

const mutationObserver = new MutationObserver(() => whenResized());
const resizeObserver = new ResizeObserver(() => whenResized());

const whenScrolled = (event: Event) => {
  setScrollLeftWith(event.target! as HTMLElement);
  setScrollTopWith(event.target! as HTMLElement);
};

const startTouchTimeout = () => {
  whenResized();

  if (forceActiveMode.value) {
    return;
  }

  cancelTouchTimeout();

  active.value = true;

  touchTimeout.value = window.setTimeout(() => {
    active.value = false;
  }, 2500);
};

const updateObservers = () => {
  mutationObserver.disconnect();
  resizeObserver.disconnect();

  const relativeElement = getRelativeElement();

  if (!relativeElement) {
    return;
  }

  mutationObserver.observe(relativeElement, {
    childList: true,
    subtree: true,
  });
  resizeObserver.observe(relativeElement);
};

onMounted(() => {
  updateObservers();
});

watch(relativeTo!, () => updateObservers());
watch(
  scrollPosition,
  (position: { left: number; top: number }) => {
    scrollLeft.value = position.left;
    scrollTop.value = position.top;

    nextTick(() => scrollTo(position));
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>

<template lang="pug">
.scrollable(:class="{ [`mode-${mode}`]: true, static: staticPosition }")
  .scrollable-content(
    ref='content',
    @mousemove='startTouchTimeout',
    @scroll='whenScrolled',
  )
    slot(default)
  ScrollableArea(
    v-if="mode !== 'vertical'",
    @mousedown.stop="(event) => forceActive(event, 'horizontal')",
    :active="contentWidth > containerWidth && (active || forceActiveMode === 'horizontal')",
    :class="{ 'scrollbar-visible': contentWidth > containerWidth }",
    :thumbOffset='leftRatio',
    :thumbSize='thumbWidth',
    mode='horizontal',
  )
  ScrollableArea(
    v-if="mode === 'both-top'",
    @mousedown.stop="(event) => forceActive(event, 'horizontal')",
    :active="contentWidth > containerWidth && (active || forceActiveMode === 'horizontal')",
    :class="{ 'scrollbar-visible': contentWidth > containerWidth }",
    :thumbOffset='leftRatio',
    :thumbSize='thumbWidth',
    mode='horizontal-top',
  )
  ScrollableArea(
    v-if="mode !== 'horizontal'",
    @mousedown.stop="(event) => forceActive(event, 'vertical')",
    :active="contentHeight > containerHeight && (active || forceActiveMode === 'vertical')",
    :class="{ 'scrollbar-visible': contentHeight > containerHeight }",
    :thumbOffset='topRatio',
    :thumbSize='thumbHeight',
    mode='vertical',
  )
</template>

<style lang="scss" scoped>
.scrollable {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;

  &:not(.static) {
    position: relative;
  }

  &.mode-both,
  &.mode-both-top {
    overflow: hidden;

    > .scrollable-content {
      height: 100%;
      overflow: scroll;
      width: 100%;
    }
  }

  &.mode-horizontal {
    overflow: hidden;

    > .scrollable-content {
      overflow-x: scroll;
      overflow-y: hidden;
      width: 100%;
    }
  }

  &.mode-vertical {
    overflow: hidden;

    > .scrollable-content {
      overflow-x: hidden;
      overflow-y: scroll;
      width: 100%;
    }
  }

  > .scrollable-area {
    z-index: 2;
  }

  > .scrollable-content {
    box-sizing: border-box;
    display: flex;
    flex: 1;
    flex-direction: column;
    z-index: 1;

    &::-webkit-scrollbar {
      height: 0;
      width: 0;
    }
  }
}
</style>
