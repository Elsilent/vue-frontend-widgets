<script lang="ts" setup>
import { computed, toRefs } from 'vue';

const props = defineProps<{
  active: boolean;
  mode: 'horizontal' | 'horizontal-top' | 'vertical';
  thumbOffset: number;
  thumbSize: string;
}>();

const { active, mode, thumbOffset, thumbSize } = toRefs(props);

const thumbStyle = computed(() => {
  const [offsetProp, sizeProp] = mode.value === 'vertical' ? ['top', 'height'] : ['left', 'width'];

  return {
    [offsetProp]: `calc(3px + ${thumbOffset.value} * (100% - ${thumbSize.value} - 6px))`,
    [sizeProp]: `${thumbSize.value}`,
  };
});

const emit = defineEmits<{
  (e: 'mousedown', event: MouseEvent): void;
}>();
</script>

<template lang="pug">
.scrollable-area(
  @mousedown.stop="(event) => emit('mousedown', event)",
  :class="{ active, [mode]: true }",
)
  .scrollbar
    .thumb(:style="thumbStyle")
</template>

<style lang="scss" scoped>
@import '../../styles/colors.scss';

.scrollable-area {
  pointer-events: none;
  position: absolute;

  &:hover {
    > .scrollbar {
      @include apply-color(
        background-color,
        background-elevated-3,
        $value-prefix: 'rgba(',
        $value-postfix: '0.25)'
      );
      box-shadow: 0 0 1px rgba(black, 0.25);

      > .thumb {
        opacity: 0.75;
      }
    }
  }

  &:active {
    > .scrollbar {
      @include apply-color(
        background-color,
        background-elevated-3,
        $value-prefix: 'rgba(',
        $value-postfix: '0.75)'
      );

      box-shadow: 0 0 1px rgba(black, 0.25);

      > .thumb {
        opacity: 1;
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
      @include apply-color(background-color, background-neutral);
      border-radius: 4px;
      opacity: 0.35;
      position: absolute;
      transition: background-color 0.3s, box-shadow 0.3s, opacity 0.3s;
    }
  }
}
</style>
