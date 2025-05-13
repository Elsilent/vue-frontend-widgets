<template lang="pug">
.loader
</template>

<style scoped lang="scss">
@use '../styles/colors' as colors;
@use '../styles/spacing' as spacing;
@use '../styles/radius' as radius;

.loader {
  @include colors.apply-color(border-color, border-accent);
  @include colors.apply-color(border-right-color, border-accent, null, null, '', 0);

  width: 10px;
  aspect-ratio: 1;
  border-radius: radius.$border-radius-round;
  border: 2px solid;
  animation: spin 1s infinite linear;
  margin: spacing.$padding-size-small-3;
  @keyframes spin {
    to {
      transform: rotate(1turn);
    }
  }
}
</style>
