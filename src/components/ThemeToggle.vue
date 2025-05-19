<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import Align from './Align.vue';
import Button from './Button.vue';
import match from '../utils/match';
import type { Mood } from '../utils/enum/mood';
import type { Theme } from '../utils/enum/theme';
import UndefinedThemeError from '../utils/error/undefined_theme';

const props = defineProps<{
  modelValue: Theme;
}>();

const { modelValue } = toRefs(props);

const emit = defineEmits<{
  (event: 'update:modelValue', theme: Theme): void;
}>();

const themeIcon = computed(
  () =>
    match<Theme, string>(modelValue.value)
      .when('dark', () => 'moon')
      .when('light', () => 'sun')
      .or((theme) => {
        throw new UndefinedThemeError(theme);
      }).done,
);

const themeMood = computed(
  () =>
    match<Theme, Mood>(modelValue.value)
      .when('dark', () => 'accent')
      .when('light', () => 'important')
      .or((theme) => {
        throw new UndefinedThemeError(theme);
      }).done,
);

const toggleTheme = () => {
  const newTheme = match<Theme, Theme>(modelValue.value)
    .when('dark', () => 'light')
    .when('light', () => 'dark')
    .or((theme) => {
      throw new UndefinedThemeError(theme);
    }).done!;

  emit('update:modelValue', newTheme);
};
</script>

<template lang="pug">
Align.theme-toggle
  Button(
    @click='() => toggleTheme()',
    :icon='themeIcon',
    iconBackend="regular"
    :mood='themeMood',
    outline,
    size='large-2',
    shape='round',
  )
</template>

<style lang="scss" scoped>
@use '../styles/spacing' as spacing;

@include spacing.default-spacing;
</style>
