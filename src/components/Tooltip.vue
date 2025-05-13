<script setup lang="ts">
import { ElPopover } from 'element-plus';
import 'element-plus/es/components/popover/style/index';
</script>

<template lang="pug">
ElPopover
  template(#reference)
    slot(name="reference")
  slot
</template>

<style lang="scss">
@use 'sass:map';
@use '../styles/radius' as radius;
@use '../styles/colors' as colors;

.el-popover__title {
  background-color: map.get(map.get(colors.$themes, 'light'), 'background-row-odd');
  margin: calc(var(--el-popover-padding) * -1);
  margin-bottom: var(--el-popover-padding);
  padding: var(--el-popover-padding);
  border-radius: #{radius.$border-radius-normal} #{radius.$border-radius-normal} 0 0;
  border-bottom: 1px solid var(--el-border-color-light);
}
</style>
