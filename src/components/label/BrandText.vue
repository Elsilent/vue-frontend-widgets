<script lang="ts" setup>
import type { Elevation } from '../../utils/enum/elevation';
import type { Size } from '../../utils/enum/size';
import { computed, toRefs } from 'vue';

const props = withDefaults(
  defineProps<{
    elevation?: Elevation;
    size?: Size;
  }>(),
  {
    elevation: 'normal',
    size: 'normal',
  },
);

const { elevation, size } = toRefs(props);

const classes = computed(() => ({
  [`elevation-${elevation.value}`]: true,
  [`size-${size.value}`]: true,
}));
</script>

<template lang="pug">
.brand-text(:class='classes')
  slot(default)
</template>

<style lang="scss" scoped>
@import '../../styles/colors.scss';
@import '../../styles/fonts.scss';

.brand-text {
  font-family: $font-family-brand-text;

  @import '../../styles/elevation.scss';
  @import '../../styles/size.scss';
}
</style>
