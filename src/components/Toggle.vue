<script lang="ts" setup>
import type { Mood } from '../utils/enum/mood';
import { computed, toRefs } from 'vue';

const props = withDefaults(
  defineProps<{
    mood?: Mood;
    modelValue: boolean;
    id: string;
  }>(),
  {
    mood: 'positive',
  },
);

const { modelValue, mood } = toRefs(props);

const toggleClasses = computed(() => {
  const toggleMood: Mood = modelValue.value ? mood.value : 'inactive';
  return {
    active: modelValue.value,
    [`mood-background-${toggleMood}`]: true,
    [`mood-border-${toggleMood}`]: true,
  };
});

const emit = defineEmits<{
  (event: 'checked'): void;
  (event: 'unchecked'): void;
  (event: 'update:modelValue', value: boolean): void;
}>();

const whenClicked = () => {
  const newValue = !modelValue.value;

  if (newValue) {
    emit('checked');
  } else {
    emit('unchecked');
  }

  emit('update:modelValue', newValue);
};
</script>

<template lang="pug">
input(
  type="checkbox"
  :id="props.id"
  :value="modelValue"
  @change="whenClicked()"
  @keyup.enter="whenClicked()"
  class='toggle-input'
)
label.toggle(
  :for="props.id"
  :class='toggleClasses'
)
</template>

<style lang="scss" scoped>
@use '../styles/fonts/base' as base;
@use '../styles/mood' as mood;
@use '../styles/radius' as radius;
@use '../styles/spacing' as spacing;
@use '../styles/transition' as transition;
@use '../styles/colors' as colors;

@include spacing.default-spacing;

.toggle {
  @include mood.apply-mood;

  align-items: center;
  border-radius: radius.$border-radius-normal;
  border-style: solid;
  border-width: 1px;
  display: inline-flex;
  justify-content: center;
  height: base.$font-size-normal + 2px;
  padding: spacing.$padding-size-small-2 spacing.$padding-size-large-2;
  position: relative;
  transition-duration: transition.$transition-duration-normal;
  transition-property: background-color, border-color, opacity;
  user-select: none;

  &.active {
    &::after {
      transform: translateX(
        calc(spacing.$padding-size-large-2 * 2 - spacing.$padding-size-small-4 * 2 - spacing.$padding-size-normal - 2px)
      );
    }
  }

  &.disabled {
    cursor: default;
    opacity: 0.5;
  }

  &:not(.disabled) {
    cursor: pointer;

    &:active {
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

        &-inactive {
          @include colors.apply-color(background-color, background-active-inactive);
          @include colors.apply-color(border-color, border-active-inactive);
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
  }

  &:hover:not(:active, .disabled),
  &-input:focus + .toggle {
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

      &-inactive {
        @include colors.apply-color(background-color, background-hover-inactive);
        @include colors.apply-color(border-color, border-hover-inactive);
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
  }

  &::after {
    @include colors.apply-color(background-color, background-elevated-3);
    @include colors.apply-color(border-color, background-normal);

    border-radius: radius.$border-radius-normal;
    border-style: solid;
    border-width: 1px;
    bottom: spacing.$padding-size-small-4;
    content: '';
    left: spacing.$padding-size-small-4;
    position: absolute;
    top: spacing.$padding-size-small-4;
    transition-duration: transition.$transition-duration-normal;
    transition-property: background-color, border-color, transform;
    width: spacing.$padding-size-normal;
  }
  &-input {
    appearance: none;
    margin: 0;
    outline: 0;
  }
}
</style>
