<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import Icon from './Icon.vue';
import Info from './Info.vue';
import type { IconBackend } from '../utils/enum/icon_backend';
import type { Mood } from '../utils/enum/mood';
import type { Size } from '../utils/enum/size';

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
  slot
</template>

<style lang="scss" scoped>
@use '../styles/mood' as mood;
@use '../styles/radius' as radius;
@use '../styles/spacing' as spacing;
@use '../styles/transition' as transition;
@use '../styles/colors' as colors;

@include spacing.default-spacing;

.button {
  @include mood.apply-mood;

  align-items: center;
  border-style: solid;
  border-width: 1px;
  display: inline-flex;
  justify-content: center;
  transition-duration: transition.$transition-duration-normal;
  transition-property: background-color, border-color, opacity;
  background-color: transparent;

  &.mood-background-inactive {
    > .icon,
    > .info-text {
      @include colors.apply-color(color, text-normal);
    }
  }

  &.shape-normal {
    border-radius: radius.$border-radius-normal;
    padding: spacing.$padding-size-small-2 spacing.$padding-size-normal;
  }

  &.shape-round {
    border-radius: radius.$border-radius-round;
    padding: spacing.$padding-size-normal;
    position: relative;

    > .icon,
    > .info-text {
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
          @include colors.apply-color(background-color, background-active-accent);
          @include colors.apply-color(border-color, border-active-accent);
        }

        &-important {
          @include colors.apply-color(background-color, background-active-important);
          @include colors.apply-color(border-color, border-active-important);
        }

        &-important-alt {
          @include colors.apply-color(background-color, background-active-important-alt);
          @include colors.apply-color(border-color, border-active-important-alt);
        }

        &-negative {
          @include colors.apply-color(background-color, background-active-negative);
          @include colors.apply-color(border-color, border-active-negative);
        }

        &-neutral {
          @include colors.apply-color(background-color, background-active-neutral);
          @include colors.apply-color(border-color, border-active-neutral);
        }

        &-neutral-alt {
          @include colors.apply-color(background-color, background-active-neutral-alt);
          @include colors.apply-color(border-color, border-active-neutral-alt);
        }

        &-positive {
          @include colors.apply-color(background-color, background-active-positive);
          @include colors.apply-color(border-color, border-active-positive);
        }
      }
    }

    &:hover:not(:active),
    &.outline:hover,
    &.outline:focus,
    &.outline:active {
      &.mood-border {
        &-accent {
          @include colors.apply-color(background-color, background-hover-accent);
          @include colors.apply-color(border-color, border-hover-accent);
        }

        &-important {
          @include colors.apply-color(background-color, background-hover-important);
          @include colors.apply-color(border-color, border-hover-important);
        }

        &-important-alt {
          @include colors.apply-color(background-color, background-hover-important-alt);
          @include colors.apply-color(border-color, border-hover-important-alt);
        }

        &-negative {
          @include colors.apply-color(background-color, background-hover-negative);
          @include colors.apply-color(border-color, border-hover-negative);
        }

        &-neutral {
          @include colors.apply-color(background-color, background-hover-neutral);
          @include colors.apply-color(border-color, border-hover-neutral);
        }

        &-neutral-alt {
          @include colors.apply-color(background-color, background-hover-neutral-alt);
          @include colors.apply-color(border-color, border-hover-neutral-alt);
        }

        &-positive {
          @include colors.apply-color(background-color, background-hover-positive);
          @include colors.apply-color(border-color, border-hover-positive);
        }
      }

      > .icon {
        &::not(.mood-background-inactive) {
          @include colors.apply-color(color, white);
        }
      }

      > .info-text {
        @include colors.apply-color(color, white);
      }
    }
  }
}
</style>
