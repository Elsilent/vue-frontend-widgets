<script lang="ts" setup>
defineProps<{
  kind?: 'super' | 'widget';
}>();
</script>

<template lang="pug">
.card(:class="[kind ? kind : '']")
  slot(default)
</template>

<style lang="scss" scoped>
@import '../styles/colors';
@import '../styles/radius';
@import '../styles/spacing';
@import '../styles/shadows';
@import '../styles/transition';

.card {
  @include apply-color(background-color, background-elevated-3);
  @include apply-shadow(card);

  border-radius: $border-radius-normal;
  padding: $padding-size-large;
  transition-duration: $transition-duration-normal;
  transition-property: background-color;
  &.super {
    @include apply-color(background-color, white, $opacity: 0.4);
  }

  &.widget {
    @include apply-color(background-color, background-neutral, $opacity: 0.05);
  }
}
</style>
