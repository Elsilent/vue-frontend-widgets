<template lang="pug">
.header(:class="[`mood-${mood}`, `size-${size}`]")
  slot(default)
</template>

<script>
// Page header, can be used as a subheader or a third-level subheader

export default {
  props: {
    mood: {
      type: String,
      default: 'neutral',
    },
    size: {
      type: String,
      default: 'medium',
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/colors.scss';

.header {
  color: $color-label;
  font-weight: 700;

  &.mood-important {
    color: $color-important;
  }

  &.mood-important-alt {
    color: $color-important-alt;
  }

  &.mood-negative {
    color: $color-negative;
  }

  &.mood-positive {
    color: $color-positive;
  }

  &.size-extra-small {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  &.size-small {
    font-size: 1.35rem;
    margin-bottom: 1.35rem;
  }

  &.size-medium {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  &.size-large {
    font-size: 3rem;
    margin-bottom: 3rem;
  }
}
</style>
