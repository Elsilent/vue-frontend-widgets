<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import Align from '../container/Align.vue';
import Info from '../label/Info.vue';

const props = withDefaults(
  defineProps<{
    label?: string;
    modelValue?: string;
    noInline?: boolean;
    password?: boolean,
    placeholder?: string;
  }>(),
  {
    modelValue: '',
    noInline: false,
    password: false,
  },
);

const { modelValue, noInline, password } = toRefs(props);

const emit = defineEmits<{
  (event: 'submit'): void;
  (event: 'update:modelValue', value: string): void;
}>();

const inputType = computed(() => password.value ? 'password' : undefined);

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
Align(:inline='!noInline', column)
  Info(v-if='label') {{ label }}
  input.input(
    @keydown="(event) => whenKeyDown(event)",
    @input="(event) => whenUpdated(event)",
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
  @include apply-color(border-color, border-normal);
  @include apply-color(color, text-normal);

  border-radius: $border-radius-normal;
  border-style: solid;
  border-width: 1px;
  display: inline-block;
  font-family: $font-family-normal;
  font-size: $font-size-normal;
  outline: none;
  padding: $padding-size-small-2 $padding-size-normal;
  transition-duration: $transition-duration-normal;
  transition-property: background-color, border-color, color;

  &:focus {
    @include apply-color(border-color, background-important-alt);
  }

  &::placeholder {
    @include apply-color(color, border-normal);
  }
}
</style>
