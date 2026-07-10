<script setup lang="ts">
import { ElTag } from 'element-plus';
</script>

<template lang="pug">
ElTag
  slot
</template>

<style lang="scss" scoped>
@use 'sass:map';
@use '../styles/colors' as colors;

.el-tag--dark.el-tag--primary {
  --el-tag-bg-color: #{map.get(map.get(colors.$themes, 'light'), 'background-accent')};
  --el-tag-border-color: #{map.get(map.get(colors.$themes, 'light'), 'background-accent')};
}
</style>
