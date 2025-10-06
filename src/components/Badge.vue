<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import type { Mood } from '../utils/enum/mood';
import type { Size } from '../utils/enum/size';
import Info from './Info.vue';

const props = withDefaults(
  defineProps<{
    mood?: Mood;
    outline?: boolean;
    size?: Size;
  }>(),
  {
    mood: 'accent',
    outline: false,
    size: 'normal',
  },
);

const { mood, outline, size } = toRefs(props);

const badgeElementClasses = computed(() => ({
  [`mood-background-${mood.value}`]: !outline.value,
  [`mood-border-${mood.value}`]: true,
}));

const infoElementClasses = computed(() => ({
  [`size-${size.value}`]: true,
}));
</script>

<template lang="pug">
.badge(:class='badgeElementClasses')
  Info(:mood="outline ? mood : 'white'" :class="infoElementClasses")
    slot(default)
</template>

<style lang="scss" scoped>
@use '../styles/mood' as mood;
@use '../styles/radius' as radius;
@use '../styles/spacing' as spacing;
@use '../styles/transition' as transition;
@use '../styles/fonts/size' as size;
@use '../styles/colors' as colors;

.badge {
  @include size.apply-size;
  @include mood.apply-mood;
  
  border-radius: radius.$border-radius-round;
  border-style: solid;
  border-width: 1px;
  display: inline-block;
  padding: spacing.$padding-size-small-3 spacing.$padding-size-normal;
  transition-duration: transition.$transition-duration-normal;
  transition-property: background-color, border-color;

  &.mood-border-accent {
    @include colors.apply-color(border-color, background-accent);
  }
  &.mood-border-important {
    @include colors.apply-color(border-color, background-important);
  }
  &.mood-border-important-alt {
    @include colors.apply-color(border-color, background-important-alt);
  }
  &.mood-border-inactive {
    @include colors.apply-color(border-color, background-inactive);
  }
  &.mood-border-negative {
    @include colors.apply-color(border-color, background-negative);
  }
  &.mood-border-neutral {
    @include colors.apply-color(border-color, background-neutral);
  }
  &.mood-border-neutral-alt {
    @include colors.apply-color(border-color, background-neutral-alt);
  }
  &.mood-border-positive {
    @include colors.apply-color(border-color, background-positive);
  }
}
</style>
