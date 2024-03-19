<script lang="ts" setup>
import { toRefs } from 'vue';

const props = withDefaults(
  defineProps<{
    full?: boolean;
    forceDarkMode?: boolean;
    size?: 'middle' | 'small';
  }>(),
  {
    full: false,
    forceDarkMode: false,
    size: 'small',
  },
);
const { full, forceDarkMode, size } = toRefs(props);
</script>

<template lang="pug">
.brand-text(:class="[{ light: forceDarkMode}, size]")
  template(v-if="full")
    include ../../assets/images/brand_text_full.svg
  template(v-else)
    include ../../assets/images/brand_text.svg
</template>

<style lang="scss" scoped>
@import '../../styles/colors.scss';
@import '../../styles/spacing.scss';

.brand-text {
  max-height: $brand-text-size-small;
  min-height: $brand-text-size-small;
  height: $brand-text-size-small;
  &.middle {
    max-height: $brand-text-size;
    min-height: $brand-text-size;
    height: $brand-text-size;
  }
  svg {
    height: 100%;
    width: auto;
  }

  &:not(.light) svg * {
    @include apply-color(fill, brand-primary);
  }
  &.light svg * {
    fill: white;
  }
}
</style>
