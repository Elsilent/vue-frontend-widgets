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

const classes = computed(() => ({
  [`mood-background-${mood.value}`]: !outline.value,
  [`mood-border-${mood.value}`]: true,
  [`size-${size.value}`]: true,
}));
</script>

<template lang="pug">
.badge(:class='classes')
  Info(:mood="outline ? mood : 'white'")
    slot(default)
</template>

<style lang="scss" scoped>
@import '../styles/mood';
@import '../styles/radius';
@import '../styles/spacing';
@import '../styles/transition';

.badge {
  @import '../styles/fonts/size';

  border-radius: $border-radius-round;
  border-style: solid;
  border-width: 1px;
  display: inline-block;
  padding: $padding-size-small-3 $padding-size-normal;
  transition-duration: $transition-duration-normal;
  transition-property: background-color, border-color;

  &.mood-border-accent {
    @include apply-color(border-color, background-accent);
  }
  &.mood-border-important {
    @include apply-color(border-color, background-important);
  }
  &.mood-border-important-alt {
    @include apply-color(border-color, background-important-alt);
  }
  &.mood-border-inactive {
    @include apply-color(border-color, background-inactive);
  }
  &.mood-border-negative {
    @include apply-color(border-color, background-negative);
  }
  &.mood-border-neutral {
    @include apply-color(border-color, background-neutral);
  }
  &.mood-border-neutral-alt {
    @include apply-color(border-color, background-neutral-alt);
  }
  &.mood-border-positive {
    @include apply-color(border-color, background-positive);
  }
}
</style>
