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
ElOption(:value="value" :class="size")
  slot
</template>

<style lang="scss" scoped>
@use 'sass:map';
@import '../../../styles/colors.scss';
@import '../../../styles/spacing.scss';

.el-select-dropdown__item {
  margin: 0 2px 0 -1px;
  &.default {
    padding: $padding-size-menu-small-3 $padding-size-small-2;
  }
  &.is-selected {
    background-color: map.get(map.get($themes, 'light'), 'background-list-accent');
    font-weight: normal;
  }
}
</style>

<style>
.selectPopover.teleported.el-popper {
  .el-select-dropdown__item {
    margin: 0 1px;
  }
}
</style>
