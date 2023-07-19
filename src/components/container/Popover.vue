<template lang="pug">
Teleport(v-if="visible", to="body")
  .popover-container(
    ref="popover",
    :class="popoverClass",
    :style="style",
  )
    slot(default)
</template>

<script>
import Teleport from 'vue2-teleport';

export default {
  components: {
    Teleport,
  },
  computed: {
    style() {
      const style = {};

      if (this.left !== undefined) {
        style.left = `${this.left}px`;
      }

      if (this.top !== undefined) {
        style.top = `${this.top}px`;
      }

      return style;
    }
  },
  data: () => ({
    left: undefined,
    resizeObserver: undefined,
    top: undefined,
  }),
  destroyed() {
    this.resizeObserver.disconnect();
  },
  methods: {
    getParent() {
      if (this.parentClass === undefined) {
        return undefined;
      }

      let element = this.$el.parentNode;

      while (element && !element.classList.contains(this.parentClass)) {
        element = element.parentNode;
      }

      return element;
    },
    getPopover() {
      return this.$refs.popover;
    },
    updatePosition() {
      const parent = this.getParent();
      const popover = this.getPopover();

      if (!parent || !popover) {
        return;
      }

      const parentRect = parent.getBoundingClientRect();

      this.left = 0;
      this.top = 0;

      this.$nextTick(() => {
        let scrollLeft = parentRect.left;
        let scrollTop = parentRect.top + document.documentElement.scrollTop;

        const popoverWidth = popover.offsetWidth;
        const popoverWidthDelta = (popoverWidth - parentRect.width) / 2;

        if (parentRect.left - popoverWidthDelta < 0) {
          this.left = scrollLeft;
        } else if (parentRect.left + popoverWidthDelta + parentRect.width > document.body.clientWidth) {
          this.left = scrollLeft - popoverWidth + parentRect.width;
        } else {
          this.left = scrollLeft - popoverWidthDelta;
        }

        const popoverHeight = popover.offsetHeight;

        if (parentRect.bottom + popoverHeight > document.body.clientHeight) {
          this.top = scrollTop - popoverHeight;
        } else {
          this.top = scrollTop + parentRect.height;
        }
      });
    },
  },
  mounted() {
    this.resizeObserver = new ResizeObserver(() => {
      this.updatePosition();
    });
  },
  props: {
    parentClass: {
      type: String,
      required: false,
    },
    popoverClass: {
      type: [Array, String],
      default: '',
    },
    visible: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    visible: {
      immediate: true,
      handler() {
        if (this.visible) {
          this.$nextTick(() => {
            if (this.$refs.popover) {
              this.updatePosition();

              this.resizeObserver.observe(this.$refs.popover);
            }
          });
        } else {
          this.$nextTick(() => {
            if (this.$refs.popover) {
              this.resizeObserver.unobserve(this.$refs.popover);
            }
          });
        }
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.popover-container {
  background-color: #ffffff;
  border: 1px solid rgba(black, 0.15);
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  min-width: 15rem;
  position: absolute;
  z-index: 2;
}
</style>
