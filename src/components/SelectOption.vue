<script setup lang="ts">
import { ElOption } from 'element-plus';
import 'element-plus/es/components/option/style/index';
withDefaults(
  defineProps<{
    value: any;
    size?: 'large' | 'default' | 'small';
  }>(),
  {
    size: 'large',
  },
);
</script>

<template lang="pug">
ElOption(:value="value" :class="size" :data-test-id="value")
  slot
</template>

<style lang="scss" scoped>
@use 'sass:map';
@use '../styles/colors' as colors;
@use '../styles/spacing' as spacing;

.el-select-dropdown__item {
  margin: 0 2px 0 -1px;
  white-space: wrap;
  word-wrap: normal;
  height: auto;
  line-height: 1.5;
  padding: 6.5px 20px;
  &.default {
    padding: spacing.$padding-size-menu-small-3 spacing.$padding-size-small-2;
  }
  &.is-selected {
    background-color: map.get(map.get(colors.$themes, 'light'), 'background-list-accent');
    font-weight: normal;
    &:after {
      display: none;
    }
  }
}
</style>

<style lang="scss">
.selectPopover.teleported.el-popper {
  .el-select-dropdown__item {
    margin: 0 1px;
  }
}
</style>
