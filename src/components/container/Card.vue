<template lang="pug">
.card
  slot(default)
</template>

<style lang="scss" scoped>
@import '../../styles/colors.scss';
@import '../../styles/radius.scss';
@import '../../styles/spacing.scss';
@import '../../styles/shadows.scss';
@import '../../styles/transition.scss';

.card {
  @include apply-color(background-color, background-elevated-3);
  @include apply-shadow(card);

  border-radius: $border-radius-normal;
  padding: $padding-size-large;
  transition-duration: $transition-duration-normal;
  transition-property: background-color;
}
</style>
