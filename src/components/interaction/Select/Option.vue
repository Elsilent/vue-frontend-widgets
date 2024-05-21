<script setup lang="ts">
import { ElOption } from 'element-plus';
import 'element-plus/es/components/option/style/index';
defineProps(['value']);
</script>

<template lang="pug">
ElOption(:value="value")
  slot
</template>

<style lang="scss" scoped>
@use 'sass:map';
@import '../../../styles/colors.scss';

.el-select-dropdown__item {
  margin: 0 2px 0 -1px;
  &.is-selected {
    background-color: map.get(map.get($themes, 'light'), 'background-list-accent');
    font-weight: normal;
  }
}
</style>
