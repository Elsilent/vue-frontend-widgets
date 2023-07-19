<template lang="pug">
.scrollable-area(
  @mousedown.stop="(event) => $emit('mousedown', event)",
  :class="{ active, [mode]: true }",
)
  .scrollbar
    .thumb(:style="thumbStyle")
</template>

<script lang="ts">
export default {
  computed: {
    thumbStyle() {
      const [offsetProp, sizeProp] =
        this.mode === 'vertical' ? ['top', 'height'] : ['left', 'width'];

      return {
        [offsetProp]: `calc(3px + ${this.thumbOffset} * (100% - ${this.thumbSize} - 6px))`,
        [sizeProp]: `${this.thumbSize}`,
      };
    }
  },
  props: {
    active: {
      type: Boolean,
      required: true,
    },
    mode: {
      type: String,
      required: true,
    },
    thumbOffset: {
      type: Number,
      required: true,
    },
    thumbSize: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../styles/colors.scss';

.scrollable-area {
  pointer-events: none;
  position: absolute;

  &:hover {
    > .scrollbar {
      background-color: rgba(white, 0.5);

      box-shadow: 0 0 1px rgba(black, 0.25);

      > .thumb {
        background-color: rgba($color-scrollbar-thumb, 0.75);
      }
    }
  }

  &:active {
    > .scrollbar {
      background-color: rgba(white, 0.75);

      box-shadow: 0 0 1px rgba(black, 0.25);

      > .thumb {
        background-color: $color-scrollbar-thumb;
      }
    }
  }

  &.active {
    pointer-events: all;

    > .scrollbar {
      opacity: 1;
      transition-duration: 0.3s;
    }
  }

  &.horizontal {
    bottom: 0;
    height: 20px;
    left: 0;
    right: 0;

    > .scrollbar {
      bottom: 3px;
      left: 3px;
      height: 14px;
      margin: 3px;
      right: 3px;

      > .thumb {
        bottom: 3px;
        min-width: 42px;
        top: 3px;
      }
    }

    & + .scrollable-area.vertical {
      bottom: 20px;

      > .scrollbar {
        bottom: 6px;

        > .thumb {
          bottom: 3px;
        }
      }
    }
  }

  &.horizontal-top {
    height: 20px;
    left: 0;
    right: 0;
    top: 0;

    > .scrollbar {
      left: 3px;
      height: 14px;
      margin: 3px;
      right: 3px;
      top: 3px;

      > .thumb {
        bottom: 3px;
        min-width: 42px;
        top: 3px;
      }
    }

    & + .scrollable-area.vertical {
      top: 20px;

      > .scrollbar {
        top: 6px;

        > .thumb {
          top: 3px;
        }
      }
    }
  }

  &.vertical {
    bottom: 0;
    right: 0;
    top: 0;
    width: 20px;

    > .scrollbar {
      bottom: 3px;
      right: 3px;
      top: 3px;
      width: 14px;

      > .thumb {
        min-height: 42px;
        left: 3px;
        right: 3px;
      }
    }
  }

  > .scrollbar {
    border-radius: 9px;
    opacity: 0;
    position: absolute;
    transition: background-color 0.3s, box-shadow 0.3s, opacity 0.3s;

    > .thumb {
      background: rgba($color-scrollbar-thumb, 0.35);
      border-radius: 4px;
      position: absolute;
      transition: background-color 0.3s, box-shadow 0.3s;
    }
  }
}
</style>
