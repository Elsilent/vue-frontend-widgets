<script lang="ts" setup>
import type { Mood } from '../utils/enum/mood';
import { computed, toRefs } from 'vue';

const props = withDefaults(
  defineProps<{
    mood?: { chart: number } | { mood: Mood };
  }>(),
  {
    mood: () => ({ mood: 'accent' }),
  },
);

const { mood } = toRefs(props);

const classes = computed(() => {
  const classes: Record<string, boolean> = {};

  if ('mood' in mood.value) {
    classes[`mood-background-${mood.value.mood}`] = true;
  } else if ('chart' in mood.value) {
    classes[`chart-${mood.value.chart}`] = true;
  }

  return classes;
});
</script>

<template lang="pug">
.dot(:class='classes')
</template>

<style lang="scss">
@use '../styles/mood' as mood;
@use '../styles/spacing' as spacing;
@use '../styles/colors' as colors;

$-chart-colors: (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21);

.dot {
  @include mood.apply-mood;

  border-radius: spacing.$padding-size-small;
  content: '';
  display: inline-block;
  margin-right: spacing.$padding-size-small;
  height: spacing.$padding-size-small;
  width: spacing.$padding-size-small;
  min-width: spacing.$padding-size-small;

  @each $chart in $-chart-colors {
    &.chart-#{$chart} {
      @include colors.apply-color(background-color, chart-#{$chart});
    }
  }
}
</style>
