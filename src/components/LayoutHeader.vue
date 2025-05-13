<script lang="ts" setup>
import Align from './Align.vue';
import Info from './Info.vue';
import Separator from './Separator.vue';

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
@use '../styles/colors' as colors;
@use '../styles/fonts/base' as fonts;
@use '../styles/shadows' as shadows;
@use '../styles/spacing' as spacing;
@use '../styles/transition' as transition;

.header {
  @include colors.apply-color(background-color, background-elevated-3);
  @include shadows.apply-shadow(large-header);

  align-items: center;
  display: flex;
  height: spacing.$padding-size-large-2 * 2 + fonts.$font-size-normal;
  transition-duration: transition.$transition-duration-normal;
  transition-property: background-color;

  > .menu-button {
    cursor: pointer;
    height: 100%;
    margin-left: spacing.$padding-size-large;

    > .menu-button-lines {
      @include colors.apply-color(background-color, text-normal);

      height: 2px;
      margin: 0 spacing.$padding-size-normal;
      position: relative;
      width: 18px;

      &::after {
        @include colors.apply-color(background-color, text-normal);

        content: '';
        height: 2px;
        position: absolute;
        top: 5px;
        width: 18px;
      }

      &::before {
        @include colors.apply-color(background-color, text-normal);

        content: '';
        height: 2px;
        position: absolute;
        top: -5px;
        width: 18px;
      }
    }
  }

  > .title {
    @include colors.apply-color(background-color, background-elevated-2);

    cursor: pointer;
    height: 100%;
    padding: 0 spacing.$padding-size-normal;
    transition-duration: transition.$transition-duration-normal;
    transition-property: background-color;
    width: min-content;
    white-space: nowrap;

    > .info-text {
      align-items: center;
      display: flex;
      height: 100%;
    }
  }
}
</style>
