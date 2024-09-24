<script setup lang="ts">
import { ElCheckbox } from 'element-plus';
import 'element-plus/es/components/checkbox/style/index';
</script>

<template lang="pug">
ElCheckbox
  slot
</template>

<style lang="scss" scoped>
@use 'sass:map';
@import '../../styles/colors.scss';

:not(.is-checked):deep(:not(.is-indeterminate) .el-checkbox__inner:hover) {
  transition: background-color 0.3s;
  background-color: map.get(map.get($themes, 'light'), 'background-hover-neutral');
}
:deep(.el-checkbox__inner:after) {
  border-width: 2px;
  width: 6px;
  height: 10px;
  left: 6px;
  top: 2px;
}
.el-checkbox:deep(.el-checkbox__inner:before) {
  height: 4px;
  top: 8px;
}
</style>
