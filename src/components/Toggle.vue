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
@import '../styles/fonts/base';
@import '../styles/mood';
@import '../styles/radius';
@import '../styles/spacing';
@import '../styles/transition';

@include default-spacing;

.toggle {
  @include apply-mood;

  align-items: center;
  border-radius: $border-radius-normal;
  border-style: solid;
  border-width: 1px;
  display: inline-flex;
  justify-content: center;
  height: $font-size-normal + 2px;
  padding: $padding-size-small-2 $padding-size-large-2;
  position: relative;
  transition-duration: $transition-duration-normal;
  transition-property: background-color, border-color, opacity;
  user-select: none;

  &.active {
    &::after {
      transform: translateX(
        calc($padding-size-large-2 * 2 - $padding-size-small-4 * 2 - $padding-size-normal - 2px)
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

        &-inactive {
          @include apply-color(background-color, background-active-inactive);
          @include apply-color(border-color, border-active-inactive);
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
  }

  &:hover:not(:active, .disabled),
  &-input:focus + .toggle {
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

      &-inactive {
        @include apply-color(background-color, background-hover-inactive);
        @include apply-color(border-color, border-hover-inactive);
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
  }

  &::after {
    @include apply-color(background-color, background-elevated-3);
    @include apply-color(border-color, background-normal);

    border-radius: $border-radius-normal;
    border-style: solid;
    border-width: 1px;
    bottom: $padding-size-small-4;
    content: '';
    left: $padding-size-small-4;
    position: absolute;
    top: $padding-size-small-4;
    transition-duration: $transition-duration-normal;
    transition-property: background-color, border-color, transform;
    width: $padding-size-normal;
  }
  &-input {
    appearance: none;
    margin: 0;
    outline: 0;
  }
}
</style>
