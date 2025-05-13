<script lang="ts" setup>
import type { Elevation } from '../utils/enum/elevation';
import type { Mood } from '../utils/enum/mood';
import type { Size } from '../utils/enum/size';
import { computed, toRefs } from 'vue';

const props = withDefaults(
  defineProps<{
    contrast?: boolean;
    elevation?: Elevation;
    important?: boolean;
    mood?: Mood | 'white';
    size?: Size;
  }>(),
  {
    elevation: 'normal',
    important: false,
    size: 'normal',
  },
);

const { contrast, elevation, important, mood, size } = toRefs(props);

const classes = computed(() => ({
  contrast: !mood?.value ? contrast.value : false,
  important: important.value,
  [`elevation-${elevation.value}`]: !mood?.value,
  [`mood-text-${mood?.value}`]: mood?.value,
  [`size-${size.value}`]: true,
}));
</script>

<template lang="pug">
.info-text(:class='classes')
  slot(default)
</template>

<style lang="scss" scoped>
@use '../styles/fonts/base' as base;
@use '../styles/mood' as mood;
@use '../styles/transition' as transition;
@use '../styles/elevation' as elevation;
@use '../styles/fonts/size' as size;
@use '../styles/colors' as colors;

.info-text {
  @include mood.apply-mood;
  @include elevation.apply-elevation;
  @include size.apply-size;

  font-family: base.$font-family-normal;
  transition-duration: transition.$transition-duration-normal;
  transition-property: color;

  &.contrast {
    @include colors.apply-color(color, text-contrast);
  }

  &.important {
    font-weight: 600;
  }

  &.mood-text-white {
    @include colors.apply-color(color, white);
  }
}
</style>
