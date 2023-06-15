<script lang="ts" setup>
import type { Elevation } from '../../utils/enum/elevation';
import type { Size } from '../../utils/enum/size';
import { computed, toRefs } from 'vue';

const props = withDefaults(
  defineProps<{
    elevation?: Elevation;
    important?: boolean;
    size?: Size;
  }>(),
  {
    elevation: 'normal',
    important: false,
    size: 'large-5',
  },
);

const { elevation, important, size } = toRefs(props);

const classes = computed(() => ({
  important: important.value,
  [`elevation-${elevation.value}`]: true,
  [`size-${size.value}`]: true,
}));
</script>

<template lang="pug">
.header(:class='classes')
  slot(default)
</template>

<style lang="scss" scoped>
@import '../../styles/colors.scss';
@import '../../styles/fonts.scss';

.header {
  font-family: $font-family-normal;

  @import '../../styles/elevation.scss';
  @import '../../styles/size.scss';

  &.important {
    font-weight: 700;
  }
}
</style>
