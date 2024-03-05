<script lang="ts" setup>
import Align from '../container/Align.vue';
import Info from '../../components/label/Info.vue';
import Separator from '../../components/marker/Separator.vue';

const emit = defineEmits<{
  (e: 'menuToggle'): void;
}>();

const scrollToStart = () => {
  document.documentElement.scrollTo({
    left: 0,
    top: 0,
  });
};
</script>

<template lang="pug">
Align.header(vertical='center')
  Align.menu-button(
    @click="() => emit('menuToggle')",
    vertical='center',
  )
    .menu-button-lines
  Align.title(
    @click='() => scrollToStart()',
    vertical='center',
  )
    Info(size='large-2')
      slot(name='title')
  Separator
  slot(name='end')
</template>

<style lang="scss" scoped>
@import '../../styles/colors.scss';
@import '../../styles/fonts.scss';
@import '../../styles/shadows.scss';
@import '../../styles/spacing.scss';
@import '../../styles/transition.scss';

.header {
  @include apply-color(background-color, background-elevated-3);
  @include apply-shadow(large-header);

  align-items: center;
  display: flex;
  height: $padding-size-large-2 * 2 + $font-size-normal;
  transition-duration: $transition-duration-normal;
  transition-property: background-color;

  > .menu-button {
    cursor: pointer;
    height: 100%;
    margin-left: $padding-size-large;

    > .menu-button-lines {
      @include apply-color(background-color, text-normal);

      height: 2px;
      margin: 0 $padding-size-normal;
      position: relative;
      width: 18px;

      &::after {
        @include apply-color(background-color, text-normal);

        content: '';
        height: 2px;
        position: absolute;
        top: 5px;
        width: 18px;
      }

      &::before {
        @include apply-color(background-color, text-normal);

        content: '';
        height: 2px;
        position: absolute;
        top: -5px;
        width: 18px;
      }
    }
  }

  > .title {
    @include apply-color(background-color, background-elevated-2);

    transition-duration: $transition-duration-normal;
    transition-property: background-color;
    width: min-content;
    white-space: nowrap;

    > .info {
      align-items: center;
      display: flex;
      height: 100%;
    }
  }
}
</style>
