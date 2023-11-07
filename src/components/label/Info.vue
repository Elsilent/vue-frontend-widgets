<script lang="ts" setup>
import type { Elevation } from '../../utils/enum/elevation';
import type { Mood } from '../../utils/enum/mood';
import type { Size } from '../../utils/enum/size';
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
  contrast: contrast.value,
  important: important.value,
  [`elevation-${elevation.value}`]: !mood?.value,
  [`mood-text-${mood?.value}`]: mood?.value,
  [`size-${size.value}`]: true,
}));
</script>

<template lang="pug">
.info(:class='classes')
  slot(default)
</template>

<style lang="scss" scoped>
@import '../../styles/fonts.scss';
@import '../../styles/mood.scss';
@import '../../styles/transition.scss';

.info {
  @import '../../styles/elevation.scss';
  @import '../../styles/size.scss';

  @include apply-mood;

  font-family: $font-family-normal;
  transition-duration: $transition-duration-normal;
  transition-property: color;

  &.contrast {
    @include apply-color(color, text-contrast);
  }

  &.important {
    font-weight: 600;
  }

  &.mood-text-white {
    @include apply-color(color, white);
  }
}
</style>
