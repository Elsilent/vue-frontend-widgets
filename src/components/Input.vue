<script lang="ts" setup>
import { computed, toRefs } from 'vue';

const props = withDefaults(
  defineProps<{
    disabled?: boolean;
    modelValue?: string;
    password?: boolean;
    placeholder?: string;
    size?: 'small' | 'normal';
  }>(),
  {
    disabled: false,
    modelValue: '',
    password: false,
    size: 'normal',
  },
);

const { disabled, modelValue, password, placeholder } = toRefs(props);

const emit = defineEmits<{
  (e: 'blur', event: FocusEvent): void;
  (e: 'focus', event: FocusEvent): void;
  (e: 'keydown', event: KeyboardEvent): void;
  (e: 'keyup', event: KeyboardEvent): void;
  (e: 'submit'): void;
  (e: 'update:modelValue', value: string): void;
}>();

const inputType = computed(() => (password.value ? 'password' : undefined));

const whenKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    emit('submit');
  }

  emit('keydown', event);
};

const whenKeyUp = (event: KeyboardEvent) => {
  emit('keyup', event);
};

const whenUpdated = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
};
</script>

<template lang="pug">
input.input(
  @blur="(event) => emit('blur', event)",
  @focus="(event) => emit('focus', event)",
  @keydown="(event) => whenKeyDown(event)",
  @keyup="(event) => whenKeyUp(event)",
  @input="(event) => whenUpdated(event)",
  :class='`size-${size}`',
  :disabled='disabled',
  :placeholder='placeholder',
  :type='inputType',
  :value='modelValue',
)
</template>

<style lang="scss" scoped>
@use '../styles/colors' as colors;
@use '../styles/fonts/base' as fonts;
@use '../styles/radius' as radius;
@use '../styles/spacing' as spacing;
@use '../styles/transition' as transition;

@include colors.default-spacing;

.input {
  @include colors.apply-color(background-color, background-elevated-3);
  @include colors.apply-color(border-color, border-inactive);
  @include colors.apply-color(color, text-normal);

  border-radius: radius.$border-radius-normal;
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  display: inline-block;
  font-family: fonts.$font-family-normal;
  font-size: fonts.$font-size-normal;
  outline: none;
  transition-duration: transition.$transition-duration-normal;
  transition-property: background-color, border-color, color, opacity;

  &.size-normal {
    padding: spacing.$padding-size-small-2 spacing.$padding-size-normal;
  }

  &.size-small {
    padding: spacing.$padding-size-small-3;
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }

  &:not(:disabled) {
    &:focus {
      @include colors.apply-color(border-color, background-important-alt);
    }
  }

  &::placeholder {
    @include colors.apply-color(color, placeholder);
  }
}
</style>
