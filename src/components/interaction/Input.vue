<script lang="ts" setup>
import { computed, toRefs } from 'vue';

const props = withDefaults(
  defineProps<{
    disabled?: boolean;
    modelValue?: string;
    password?: boolean;
    placeholder?: string;
  }>(),
  {
    disabled: false,
    modelValue: '',
    password: false,
  },
);

const { disabled, modelValue, password, placeholder } = toRefs(props);

const emit = defineEmits<{
  (event: 'blur', focusEvent: FocusEvent): void;
  (event: 'focus', focusEvent: FocusEvent): void;
  (event: 'submit'): void;
  (event: 'update:modelValue', value: string): void;
}>();

const inputType = computed(() => (password.value ? 'password' : undefined));

const whenKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    emit('submit');
  }
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
  @input="(event) => whenUpdated(event)",
  :disabled='disabled',
  :placeholder='placeholder',
  :type='inputType',
  :value='modelValue',
)
</template>

<style lang="scss" scoped>
@import '../../styles/colors.scss';
@import '../../styles/fonts.scss';
@import '../../styles/radius.scss';
@import '../../styles/spacing.scss';
@import '../../styles/transition.scss';

@include default-spacing;

.input {
  @include apply-color(background-color, background-elevated-3);
  @include apply-color(border-color, border-inactive);
  @include apply-color(color, text-normal);

  border-radius: $border-radius-normal;
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  display: inline-block;
  font-family: $font-family-normal;
  font-size: $font-size-normal;
  outline: none;
  padding: $padding-size-small-2 $padding-size-normal;
  transition-duration: $transition-duration-normal;
  transition-property: background-color, border-color, color, opacity;

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }

  &:not(:disabled) {
    &:focus {
      @include apply-color(border-color, background-important-alt);
    }
  }

  &::placeholder {
    @include apply-color(color, border-inactive);
  }
}
</style>
