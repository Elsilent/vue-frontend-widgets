<template lang="pug">
.loader
  .loader-line(v-for="_ in 5")
</template>

<style lang="scss" scoped>
@use 'sass:math';
@use 'sass:map';

@import '../styles/colors';
@import '../styles/spacing';
@import '../styles/transition';

.loader {
  align-items: center;
  display: flex;
  gap: $padding-size-small-2;
  height: $padding-size-large-3;

  > .loader-line {
    // downgrade for loaders, teleported to body (only light theme)
    background-color: map-get(map-get($themes, 'light'), 'background-neutral');
    @include apply-color(background-color, background-neutral);

    animation-duration: $transition-duration-slow-2;
    animation-iteration-count: infinite;
    animation-name: loader-line;
    border-radius: $padding-size-small-3;
    padding: $padding-size-small 0;
    width: math.round($padding-size-small-3);
    box-sizing: content-box;

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
        $-normalized-index: math.abs(3 - $-index);
        $-delay: math.div(-$-normalized-index, 3) * $transition-duration-slow-2;

        animation-delay: $-delay;
      }
    }
  }
}
</style>
