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
@use '../styles/colors' as colors;
@use '../styles/radius' as radius;
@use '../styles/spacing' as spacing;
@use '../styles/shadows' as shadows;
@use '../styles/transition' as transition;

.card {
  @include colors.apply-color(background-color, background-elevated-3);
  @include shadows.apply-shadow(card);

  border-radius: radius.$border-radius-normal;
  padding: spacing.$padding-size-large;
  transition-duration: transition.$transition-duration-normal;
  transition-property: background-color;
  &.super {
    @include colors.apply-color(background-color, white, $opacity: 0.4);
  }

  &.widget {
    @include colors.apply-color(background-color, background-neutral, $opacity: 0.05);
  }
}
</style>
