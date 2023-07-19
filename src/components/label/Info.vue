<template lang="pug">
.info-label(:class="{ important, [`mood-${mood}`]: !noMood, [`size-${size}`]: true }")
  slot(default)
</template>

<script>
// Basic information label

export default {
  props: {
    important: {
      type: Boolean,
      default: false,
    },
    mood: {
      type: String,
      default: 'neutral',
    },
    noMood: {
      type: Boolean,
      default: false,
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

.info-label {
  color: $color-label;
  font-weight: 500;

  &.important {
    font-weight: 700;
  }

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
    font-size: 0.75rem;
  }

  &.size-small {
    font-size: 0.9rem;
  }

  &.size-medium {
    font-size: 1.125rem;
  }

  &.size-large {
    font-size: 1.25rem;
  }

  &.size-extra-large {
    font-size: 1.5rem;
  }
}
</style>
