<script setup lang="ts">
import { ref } from 'vue';
import { ElSelect } from 'element-plus';
import 'element-plus/es/components/select/style/index';
import SelectSuffixIcon from './SelectSuffixIcon.vue';

const isOpened = ref(false);
</script>

<template lang="pug">
ElSelect(
  size="large"
  tag-type="primary"
  tag-effect="dark"
  :class="{opened: isOpened}"
  :teleported="false"
  :suffix-icon="SelectSuffixIcon"
  :fallback-placements="['bottom-start', 'top-start']"
  :popper-options="{modifiers: [{ name: 'offset', options: { offset: [0, 0] } }]}"
  @visible-change =" (visible) => isOpened = visible"
)
  slot
</template>

<style lang="scss" scoped>
@use 'sass:map';
@import '../../../styles/radius.scss';
@import '../../../styles/colors.scss';

.el-select {
  --el-color-primary: #{map.get(map.get($themes, 'light'), 'input-border-active')};
  &.opened {
    &:has([data-popper-placement='bottom-start']) {
      :deep(.el-select__wrapper) {
        --el-border-radius-base: #{$border-radius-normal} #{$border-radius-normal} 0 0;
      }
    }
    &:has([data-popper-placement='top-start']) {
      :deep(.el-select__wrapper) {
        --el-border-radius-base: 0 0 #{$border-radius-normal} #{$border-radius-normal};
      }
    }
    :deep(.el-select__popper) {
      max-width: 100%;
    }
    :deep(.el-select__popper[data-popper-placement='bottom-start']) {
      --el-popper-border-radius: 0 0 #{$border-radius-normal} #{$border-radius-normal};
    }
    :deep(.el-select__popper[data-popper-placement='top-start']) {
      --el-popper-border-radius: #{$border-radius-normal} #{$border-radius-normal} 0 0;
    }

    :deep(.el-select__popper .el-popper__arrow::before) {
      display: none;
    }
  }
  :deep(.el-tag--dark.el-tag--primary) {
    --el-tag-bg-color: #{map.get(map.get($themes, 'light'), 'background-accent')};
    --el-tag-border-color: #{map.get(map.get($themes, 'light'), 'border-accent')};
  }
}
</style>
