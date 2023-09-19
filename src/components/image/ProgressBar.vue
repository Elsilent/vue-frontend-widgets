<script lang="ts" setup>
import type { Mood } from '../../utils/enum/mood';
import { computed, toRefs } from 'vue';

const props = defineProps<{
  mood: Mood;
  value: number;
}>();

const { value } = toRefs(props);

const style = computed(() => ({
  '--width': `${value.value * 100}%`,
}));
</script>

<template lang="pug">
.progress-bar(
  :class="[`mood-background-${mood}`]",
  :style='style',
)
</template>

<style lang="scss" scoped>
@import '../../styles/colors.scss';
@import '../../styles/mood.scss';
@import '../../styles/radius.scss';
@import '../../styles/spacing.scss';
@import '../../styles/transition.scss';

.progress-bar {
  @include apply-color(background-color, background-lowered-2);
  @include apply-mood($rule-postfix: '::after');

  border-radius: $border-radius-normal;
  overflow: hidden;
  padding: $padding-size-small-2 0 0;
  position: relative;
  transition-duration: $transition-duration-normal;
  transition-property: background-color;

  &::after {
    background-blend-mode: color-burn, normal;
    background-image: linear-gradient(to right, rgba(black, 30%), transparent);
    background-position: center left;
    background-size: 100%;
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    top: 0;
    transition-duration: $transition-duration-normal;
    transition-timing-function: ease;
    transition-property: background-color, width;
    width: var(--width);
  }
}
</style>
