<script setup lang="ts">
import { ElOptionGroup } from 'element-plus';
</script>

<template lang="pug">
ElOptionGroup(class="customOptionGroup")
    slot
</template>

<style lang="scss" scoped>
.customOptionGroup:deep(.el-select-group__title) {
  font-weight: bold;
}
</style>
