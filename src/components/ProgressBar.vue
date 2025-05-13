<script lang="ts" setup>
import type { Mood } from '../utils/enum/mood';
import { computed, toRefs } from 'vue';

const props = withDefaults(
  defineProps<{
    mood: Mood;
    value: number;
    size?: 'small' | 'large';
  }>(),
  { size: 'large' },
);

const { value, size } = toRefs(props);

const style = computed(() => ({
  '--width': `${value.value * 100}%`,
  '--height': size.value === 'large' ? '30px' : 'auto',
}));
</script>

<template lang="pug">
.progress-bar(
  :class="[`mood-background-${mood}`]",
  :style='style',
)
</template>

<style lang="scss" scoped>
@use '../styles/colors' as colors;
@use '../styles/mood' as mood;
@use '../styles/radius' as radius;
@use '../styles/spacing' as spacing;
@use '../styles/transition' as transition;

.progress-bar {
  @include colors.apply-color(background-color, background-lowered-2, null, null, '', 0.3);
  @include mood.apply-mood($rule-postfix: '::after');

  border-radius: radius.$border-radius-normal;
  overflow: hidden;
  padding: spacing.$padding-size-small-2 0 0;
  position: relative;
  transition-duration: transition.$transition-duration-normal;
  transition-property: background-color;
  box-sizing: border-box;
  height: var(--height);
  border: 1px solid transparent;

  &::after {
    background-position: center left;
    background-size: 100%;
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    top: 0;
    transition-duration: transition.$transition-duration-normal;
    transition-timing-function: ease;
    transition-property: background-color, width;
    width: var(--width);
    border-radius: radius.$border-radius-normal;
  }
}
</style>
