<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import Icon from '../image/Icon.vue';
import Info from '../label/Info.vue';
import type { IconBackend } from '../../utils/enum/icon_backend';
import type { Mood } from '../../utils/enum/mood';
import type { Size } from '../../utils/enum/size';

const props = withDefaults(
  defineProps<{
    disabled?: boolean;
    icon?: string;
    iconBackend?: IconBackend;
    label?: string;
    mood?: Mood;
    outline?: boolean;
    size?: Size;
    shape?: 'normal' | 'round';
  }>(),
  {
    disabled: false,
    mood: 'accent',
    outline: false,
    size: 'normal',
    shape: 'normal',
  },
);

const { disabled, mood, outline, shape } = toRefs(props);

const classes = computed(() => ({
  disabled: disabled.value,
  outline: outline.value,
  [`mood-background-${mood.value}`]: !outline.value,
  [`mood-border-${mood.value}`]: true,
  [`shape-${shape.value}`]: true,
}));

const whenClicked = (event: Event) => {
  if (disabled.value) {
    event.stopImmediatePropagation();
  }
};
</script>

<template lang="pug">
button.button(
  @click='(event) => whenClicked(event)',
  :class='classes',
)
  Icon(
    v-if='icon',
    :backend='iconBackend',
    :mood="outline ? mood : 'white'",
    :size='size',
    :value='icon',
  )
  Info(
    v-if='label',
    :mood="outline ? mood : 'white'",
    :size='size',
  ) {{ label }}
</template>

<style lang="scss" scoped>
@import '../../styles/mood.scss';
@import '../../styles/radius.scss';
@import '../../styles/spacing.scss';
@import '../../styles/transition.scss';

@include default-spacing;

.button {
  @include apply-mood;

  align-items: center;
  border-style: solid;
  border-width: 1px;
  display: inline-flex;
  justify-content: center;
  transition-duration: $transition-duration-normal;
  transition-property: background-color, border-color, opacity;
  background-color: transparent;

  &.mood-background-inactive {
    > .icon,
    > .info {
      @include apply-color(color, text-normal);
    }
  }

  &.shape-normal {
    border-radius: $border-radius-normal;
    padding: $padding-size-small-2 $padding-size-normal;
  }

  &.shape-round {
    border-radius: $border-radius-round;
    padding: $padding-size-normal;
    position: relative;

    > .icon,
    > .info {
      position: absolute;
    }
  }

  &.disabled {
    cursor: default;
    opacity: 0.5;
  }

  &:not(.disabled) {
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &:not(.outline):active,
    &:not(.outline):focus {
      &.mood-border {
        &-accent {
          @include apply-color(background-color, background-active-accent);
          @include apply-color(border-color, border-active-accent);
        }

        &-important {
          @include apply-color(background-color, background-active-important);
          @include apply-color(border-color, border-active-important);
        }

        &-important-alt {
          @include apply-color(background-color, background-active-important-alt);
          @include apply-color(border-color, border-active-important-alt);
        }

        &-negative {
          @include apply-color(background-color, background-active-negative);
          @include apply-color(border-color, border-active-negative);
        }

        &-neutral {
          @include apply-color(background-color, background-active-neutral);
          @include apply-color(border-color, border-active-neutral);
        }

        &-neutral-alt {
          @include apply-color(background-color, background-active-neutral-alt);
          @include apply-color(border-color, border-active-neutral-alt);
        }

        &-positive {
          @include apply-color(background-color, background-active-positive);
          @include apply-color(border-color, border-active-positive);
        }
      }
    }

    &:hover:not(:active),
    &.outline:hover,
    &.outline:focus,
    &.outline:active {
      &.mood-border {
        &-accent {
          @include apply-color(background-color, background-hover-accent);
          @include apply-color(border-color, border-hover-accent);
        }

        &-important {
          @include apply-color(background-color, background-hover-important);
          @include apply-color(border-color, border-hover-important);
        }

        &-important-alt {
          @include apply-color(background-color, background-hover-important-alt);
          @include apply-color(border-color, border-hover-important-alt);
        }

        &-negative {
          @include apply-color(background-color, background-hover-negative);
          @include apply-color(border-color, border-hover-negative);
        }

        &-neutral {
          @include apply-color(background-color, background-hover-neutral);
          @include apply-color(border-color, border-hover-neutral);
        }

        &-neutral-alt {
          @include apply-color(background-color, background-hover-neutral-alt);
          @include apply-color(border-color, border-hover-neutral-alt);
        }

        &-positive {
          @include apply-color(background-color, background-hover-positive);
          @include apply-color(border-color, border-hover-positive);
        }
      }

      > .icon {
        &::not(.mood-background-inactive) {
          @include apply-color(color, white);
        }
      }

      > .info {
        @include apply-color(color, white);
      }
    }
  }
}
</style>
