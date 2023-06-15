<script lang="ts" setup>
import Align from '../container/Align.vue';
import Info from '../../components/label/Info.vue';
import Separator from '../../components/marker/Separator.vue';
</script>

<template lang="pug">
Align.header(vertical='center')
  .title
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
  padding-left: $padding-size-large-2;
  transition-duration: $transition-duration-normal;
  transition-property: background-color;

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

  > .icon,
  > .title {
    align-items: center;
    display: flex;
    height: 100%;
    padding: 0 $padding-size-normal;
  }
}
</style>
