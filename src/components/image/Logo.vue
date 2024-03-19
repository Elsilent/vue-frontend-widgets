<script lang="ts" setup>
import { toRefs } from 'vue';

const props = withDefaults(
  defineProps<{
    forceDarkMode?: boolean;
    size?: 'middle' | 'small';
  }>(),
  {
    forceDarkMode: false,
    size: 'small',
  },
);
const { forceDarkMode, size } = toRefs(props);
</script>

<template lang="pug">
.logo(:class="[{ light: forceDarkMode}, size]")
  include ../../assets/images/logo.svg
</template>

<style lang="scss" scoped>
@import '../../styles/colors.scss';
@import '../../styles/spacing.scss';
.logo {
  max-height: $logo-size-small;
  max-width: $logo-size-small;
  min-height: $logo-size-small;
  min-width: $logo-size-small;

  &.middle {
    max-height: $logo-size;
    max-width: $logo-size;
    min-height: $logo-size;
    min-width: $logo-size;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  &:not(.light) svg {
    path {
      @include apply-color(fill, brand-primary);
    }
    polygon {
      @include apply-color(fill, brand-secondary);
    }
  }

  &.light svg {
    path {
      fill: white;
    }
    polygon {
      fill: #626262;
    }
  }
}
</style>
