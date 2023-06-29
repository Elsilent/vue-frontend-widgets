<template lang="pug">
.loader
  .loader-line(v-for="_ in 5")
</template>

<style lang="scss" scoped>
@use 'sass:math';

@import '../../styles/colors.scss';
@import '../../styles/spacing.scss';
@import '../../styles/transition.scss';

.loader {
  align-items: center;
  display: flex;
  gap: $padding-size-small-2;
  height: $padding-size-large-3;

  > .loader-line {
    @include apply-color(background-color, background-neutral);

    animation-duration: $transition-duration-slow-2;
    animation-iteration-count: infinite;
    animation-name: loader-line;
    border-radius: $padding-size-small-3;
    padding: $padding-size-small 0;
    width: math.round($padding-size-small-3);

    @keyframes loader-line {
      0% {
        height: 0;
      }

      50% {
        height: 100%;
      }

      100% {
        height: 0;
      }
    }

    @for $-index from 1 through 5 {
      &:nth-child(#{$-index}) {
        // indexes: 1 and 5 = no delay
        // indexes: 2 and 4 = half delay
        // index 3 = full delay
        $-delay: math.div(- math.abs(3 - $-index), 3) * $transition-duration-slow-2;

        animation-delay: $-delay;
      }
    }
  }
}
</style>
