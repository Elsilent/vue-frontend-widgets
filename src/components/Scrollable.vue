<script lang="ts" setup>
import { computed, nextTick, onMounted, onUnmounted, ref, toRefs, watch } from 'vue';
import ScrollableArea from './ScrollableArea.vue';
import { throttle } from '../utils/throttle';

const props = withDefaults(
  defineProps<{
    contentClass?: string;
    mode?: 'both' | 'both-top' | 'horizontal' | 'vertical';
    /**
     * When true prevents the contents from re-rendering on each scroll update.
     *
     * To force the contents to get updated provide a different value of the updateKey
     * each time you need to update the contents
     */
    optimized?: boolean;
    relativeTo?: () => HTMLElement;
    scrollPosition: { left: number; top: number };
    scrollHeightDelta?: number;
    scrollWidthDelta?: number;
    staticPosition?: boolean;
    updateKey?: any;
    size?: 'small' | 'normal';
    theme?: 'light' | 'dark';
  }>(),
  {
    mode: 'vertical',
    optimized: false,
    scrollPosition: () => ({ left: 0, top: 0 }),
    scrollHeightDelta: 0,
    scrollWidthDelta: 0,
    staticPosition: false,
    size: 'normal',
    theme: 'light',
  },
);

const { mode, relativeTo, scrollPosition, scrollHeightDelta, scrollWidthDelta, staticPosition } =
  toRefs(props);

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
const isHovered = ref(false);

const leftRatio = computed(() => scrollLeft.value / (contentWidth.value - containerWidth.value));
const thumbWidth = computed(
  () => `max(56px, (100% - 14px) * ${containerWidth.value / contentWidth.value})`,
);
const thumbHeight = computed(
  () => `max(56px, (100% - 14px) * ${containerHeight.value / contentHeight.value})`,
);
const topRatio = computed(() => scrollTop.value / (contentHeight.value - containerHeight.value));

const content = ref<HTMLElement | undefined>();
const area = ref<HTMLElement>();

const emit = defineEmits<{
  (e: 'update:scrollPosition', position: { left: number; top: number }): void;
}>();

const onMouseMove = (event: MouseEvent) => {
  isHovered.value = area.value?.contains(event.target as HTMLElement) || false;
};

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove);
  mutationObserver.disconnect();
  resizeObserver.disconnect();
});

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
};

const throttledScroll = throttle(whenScrolledManually, 80);

const unforceActive = () => {
  forceActiveMode.value = undefined;

  window.removeEventListener('mousemove', throttledScroll);
  window.removeEventListener('mouseup', unforceActive);
};

const forceActive = (event: MouseEvent, newForceActiveMode: 'horizontal' | 'vertical') => {
  event.preventDefault();
  event.stopPropagation();

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

  window.addEventListener('mousemove', throttledScroll);
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
  if (restoring) {
    return;
  }
  setScrollLeftWith(event.target! as HTMLElement);
  setScrollTopWith(event.target! as HTMLElement);
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
  if (area.value) {
    window.addEventListener('mousemove', onMouseMove);
  }
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

watch(isHovered, () => whenResized());

let savedScrollRatioX = 0;
let savedScrollRatioY = 0;
let restoring = false;

const getScrollPosition = () => ({
  left: scrollLeft.value,
  top: scrollTop.value,
});

const saveScroll = () => {
  const el = getRelativeElement();
  // Read scroll position directly from the DOM element, not the Vue ref,
  // because the ref may be stale if whenScrolled was blocked during a previous restore.
  const currentScrollLeft = el?.scrollLeft ?? 0;
  const currentScrollTop = el?.scrollTop ?? 0;
  const maxScrollLeft = (el?.scrollWidth ?? 0) - (el?.clientWidth ?? 0);
  const maxScrollTop = (el?.scrollHeight ?? 0) - (el?.clientHeight ?? 0);
  savedScrollRatioX = maxScrollLeft > 0 ? currentScrollLeft / maxScrollLeft : 0;
  savedScrollRatioY = maxScrollTop > 0 ? currentScrollTop / maxScrollTop : 0;
};

const restoreScroll = () => {
  restoring = true;
  const applyScroll = () => {
    const el = getRelativeElement();
    if (!el) return;
    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    const maxScrollTop = el.scrollHeight - el.clientHeight;
    const targetLeft = Math.round(savedScrollRatioX * maxScrollLeft);
    const targetTop = Math.round(savedScrollRatioY * maxScrollTop);
    scrollTo({ left: targetLeft, top: targetTop });
  };
  applyScroll();
  // Use double requestAnimationFrame to ensure scroll restoration happens
  // after all pending layout recalculations (ResizeObserver callbacks,
  // CSS variable updates, etc.). The first frame waits for the browser to
  // finish layout; the second ensures any observer-triggered reflows settle.
  requestAnimationFrame(() => {
    applyScroll();
    requestAnimationFrame(() => {
      applyScroll();
      // Sync Vue refs with the actual DOM scroll position so they're not stale
      const el = getRelativeElement();
      if (el) {
        scrollLeft.value = el.scrollLeft;
        scrollTop.value = el.scrollTop;
      }
      restoring = false;
    });
  });
};

defineExpose({
  getScrollPosition,
  saveScroll,
  restoreScroll,
  scrollTo,
});
</script>

<template lang="pug">
.scrollable(
  :class="{ [`mode-${mode}`]: true, static: staticPosition }"
  ref="area"
)
  .scrollable-content(
    v-if="optimized",
    v-memo="[updateKey]",
    ref="content",
    :key="updateKey",
    @scroll="whenScrolled",
    :class="contentClass",
  )
    slot(default)
  .scrollable-content(
    v-else,
    ref="content",
    @scroll="whenScrolled",
    :class="contentClass",
  )
    slot(default)
  ScrollableArea(
    v-if="mode !== 'vertical'",
    @mousedown.stop="(event) => forceActive(event, 'horizontal')",
    :active="contentWidth > containerWidth && (isHovered || forceActiveMode === 'horizontal')",
    :class="{ 'scrollbar-visible': contentWidth > containerWidth }",
    :thumbOffset='leftRatio',
    :thumbSize='thumbWidth',
    mode='horizontal',
    :size="size",
    :theme="theme",
  )
  ScrollableArea(
    v-if="mode === 'both-top'",
    @mousedown.stop="(event) => forceActive(event, 'horizontal')",
    :active="contentWidth > containerWidth && (isHovered || forceActiveMode === 'horizontal')",
    :class="{ 'scrollbar-visible': contentWidth > containerWidth }",
    :thumbOffset='leftRatio',
    :thumbSize='thumbWidth',
    mode='horizontal-top',
    :size="size",
    :theme="theme",
  )
  ScrollableArea(
    v-if="mode !== 'horizontal'",
    @mousedown.stop="(event) => forceActive(event, 'vertical')",
    :active="contentHeight > containerHeight && (isHovered || forceActiveMode === 'vertical')",
    :class="{ 'scrollbar-visible': contentHeight > containerHeight }",
    :thumbOffset='topRatio',
    :thumbSize='thumbHeight',
    mode='vertical',
    :size="size",
    :theme="theme",
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
