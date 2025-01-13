<template lang="pug">
.loader
</template>

<style scoped lang="scss">
@import '../styles/colors';
@import '../styles/spacing';
@import '../styles/radius';

.loader {
  @include apply-color(border-color, border-accent);
  @include apply-color(border-right-color, border-accent, null, null, '', 0);

  width: 10px;
  aspect-ratio: 1;
  border-radius: $border-radius-round;
  border: 2px solid;
  animation: spin 1s infinite linear;
  margin: $padding-size-small-3;
  @keyframes spin {
    to {
      transform: rotate(1turn);
    }
  }
}
</style>
