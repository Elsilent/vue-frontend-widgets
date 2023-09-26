<template lang="pug">
.scrollable(:class="{ [`mode-${mode}`]: true, static }")
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

<script>
import ScrollableArea from './ScrollableArea.vue';

export default {
  components: {
    ScrollableArea,
  },
  computed: {
    leftRatio() {
      return this.scrollLeft / (this.contentWidth - this.containerWidth);
    },
    thumbWidth() {
      return `max(56px, (100% - 14px) * ${
        this.containerWidth / this.contentWidth
      })`;
    },
    thumbHeight() {
      return `max(56px, (100% - 14px) * ${
        this.containerHeight / this.contentHeight
      })`;
    },
    topRatio() {
      return this.scrollTop / (this.contentHeight - this.containerHeight);
    },
  },
  data() {
    return {
      active: false,
      containerHeight: 0,
      containerWidth: 0,
      contentHeight: 0,
      contentWidth: 0,
      forceActiveMode: undefined,
      forceActiveInitialPositionLeft: 0,
      forceActiveInitialPositionTop: 0,
      forceActiveInitialScrollLeft: 0,
      forceActiveInitialScrollTop: 0,
      mutationObserver: undefined,
      resizeObserver: undefined,
      scrollLeft: 0,
      scrollTop: 0,
      touchTimeout: undefined,
    };
  },
  destroyed() {
    this.mutationObserver.disconnect();
    this.resizeObserver.disconnect();
  },
  methods: {
    cancelTouchTimeout() {
      if (this.forceActiveMode) {
        return;
      }

      if (this.touchTimeout !== undefined) {
        clearTimeout(this.touchTimeout);

        this.touchTimeout = undefined;
      }

      this.active = false;
      this.forceActiveMode = undefined;
    },
    forceActive(event, forceActiveMode) {
      this.cancelTouchTimeout();

      this.active = true;
      this.forceActiveMode = forceActiveMode;

      const relativeElement = this.getRelativeElement();

      switch (forceActiveMode) {
        case 'horizontal':
          this.forceActiveInitialPositionLeft = event.clientX;
          this.forceActiveInitialScrollLeft = relativeElement.scrollLeft;
          break;
        case 'vertical':
          this.forceActiveInitialPositionTop = event.clientY;
          this.forceActiveInitialScrollTop = relativeElement.scrollTop;
          break;
      }

      window.addEventListener('mousemove', this.whenScrolledManually);
      window.addEventListener('mouseup', this.unforceActive);
    },
    getRelativeElement() {
      if (this.relativeTo) {
        const relativeTo = this.relativeTo();

        if ('$el' in relativeTo) {
          return relativeTo.$el;
        } else if (relativeTo instanceof HTMLElement) {
          return relativeTo;
        }
      }

      return this.$refs.content;
    },
    scrollTo(position) {
      const relativeElement = this.getRelativeElement();

      if (!relativeElement) {
        return;
      }

      relativeElement.scrollTo(position);
    },
    setContainerHeightWith(element) {
      if (this.containerHeight === element.clientHeight) {
        return;
      }

      this.containerHeight = element.clientHeight;
    },
    setContainerWidthWith(element) {
      if (this.containerWidth === element.clientWidth) {
        return;
      }

      this.containerWidth = element.clientWidth;
    },
    setContentHeightWith(element) {
      if (this.contentHeight === element.scrollHeight) {
        return;
      }

      this.contentHeight = element.scrollHeight;
    },
    setContentWidthWith(element) {
      if (this.contentWidth === element.scrollWidth) {
        return;
      }

      this.contentWidth = element.scrollWidth;
    },
    setManualScrollLeftWith(x) {
      this.scrollTo({
        left:
          this.forceActiveInitialScrollLeft +
          (x * this.contentWidth) / (this.containerWidth - this.scrollWidthDelta),
      });
    },
    setManualScrollTopWith(y) {
      this.scrollTo({
        top:
          this.forceActiveInitialScrollTop +
          (y * this.contentHeight) / (this.containerHeight - this.scrollHeightDelta),
      });
    },
    setScrollLeftWith(element) {
      this.scrollLeft = element.scrollLeft;

      this.$emit('update:scrollPosition', {
        left: this.scrollLeft,
        top: this.scrollTop,
      });
    },
    setScrollTopWith(element) {
      this.scrollTop = element.scrollTop;

      this.$emit('update:scrollPosition', {
        left: this.scrollLeft,
        top: this.scrollTop,
      });
    },
    startTouchTimeout() {
      this.whenResized();

      if (this.forceActiveMode) {
        return;
      }

      this.cancelTouchTimeout();

      this.active = true;

      this.touchTimeout = setTimeout(() => {
        this.active = false;
      }, 2500);
    },
    unforceActive() {
      this.forceActiveMode = undefined;

      this.startTouchTimeout();

      window.removeEventListener('mousemove', this.whenScrolledManually);
      window.removeEventListener('mouseup', this.unforceActive);
    },
    updateObservers() {
      const relativeElement = this.getRelativeElement();

      this.mutationObserver.disconnect();
      this.resizeObserver.disconnect();

      this.mutationObserver.observe(relativeElement, {
        childList: true,
        subtree: true,
      });
      this.resizeObserver.observe(relativeElement);

      this.scrollTo(this.scrollPosition);
    },
    whenResized() {
      const relativeElement = this.getRelativeElement();

      this.setContainerHeightWith(relativeElement);
      this.setContainerWidthWith(relativeElement);
      this.setContentHeightWith(relativeElement);
      this.setContentWidthWith(relativeElement);
    },
    whenScrolled(event) {
      this.setScrollLeftWith(event.target);
      this.setScrollTopWith(event.target);
      this.startTouchTimeout();
    },
    whenScrolledManually(event) {
      if (!this.forceActiveMode) {
        return;
      }

      switch (this.forceActiveMode) {
        case 'horizontal':
          this.setManualScrollLeftWith(
            event.clientX - this.forceActiveInitialPositionLeft
          );
          break;
        case 'vertical':
          this.setManualScrollTopWith(
            event.clientY - this.forceActiveInitialPositionTop
          );
          break;
      }

      event.preventDefault();
    },
  },
  mounted() {
    this.mutationObserver = new MutationObserver(() => this.whenResized());
    this.resizeObserver = new ResizeObserver(() => this.whenResized());

    this.updateObservers();
  },
  props: {
    mode: {
      type: String,
      default: 'vertical',
    },
    relativeTo: {
      type: Function,
      required: false,
    },
    scrollPosition: {
      type: Object,
      default: () => ({ left: 0, top: 0 }),
    },
    scrollHeightDelta: {
      type: Number,
      default: 0,
    },
    scrollWidthDelta: {
      type: Number,
      default: 0,
    },
    static: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    relativeTo() {
      this.updateObservers();
    },
    scrollPosition: {
      deep: true,
      immediate: true,
      handler(position) {
        this.scrollLeft = position.left;
        this.scrollTop = position.top;

        this.$nextTick(() => {
          this.scrollTo(position);
        });
      },
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../styles/colors.scss';

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
