<script setup lang="ts">
import { ref } from 'vue';
import { ElSelect } from 'element-plus';
import 'element-plus/es/components/select/style/index';
import SelectSuffixIcon from './SelectSuffixIcon.vue';
import { useAttrs } from 'vue';

const attrs = useAttrs();
const isOpened = ref(false);
</script>

<template lang="pug">
ElSelect(
  size="large"
  tag-type="primary"
  tag-effect="dark"
  :class="{opened: isOpened}"
  :teleported="true"
  :suffix-icon="SelectSuffixIcon"
  :fallback-placements="['bottom-start', 'top-start']"
  :popper-options="{modifiers: [{ name: 'offset', options: { offset: [0, 0] } }]}"
  @visible-change =" (visible) => isOpened = visible"
  :fit-input-width="true"
  :popper-class="`selectPopover ${attrs.teleported !== false ? 'teleported' : ''}`"
)
  template(#label)
    slot(name="label")
  template(#tag)
    slot(name="tag")
  slot
</template>

<style lang="scss" scoped>
@use 'sass:map';
@use '../styles/radius' as radius;
@use '../styles/colors' as colors;

.el-select {
  --el-color-primary: #{map.get(map.get(colors.$themes, 'light'), 'input-border-active')};
  &.opened {
    &:has([data-popper-placement='bottom-start']) {
      :deep(.el-select__wrapper) {
        --el-border-radius-base: #{radius.$border-radius-normal} #{radius.$border-radius-normal} 0 0;
      }
    }
    &:has([data-popper-placement='top-start']) {
      :deep(.el-select__wrapper) {
        --el-border-radius-base: 0 0 #{radius.$border-radius-normal} #{radius.$border-radius-normal};
      }
    }
    :deep(.el-select__popper) {
      max-width: 100%;
    }
    :deep(.el-select__popper[data-popper-placement='bottom-start']) {
      --el-popper-border-radius: 0 0 #{radius.$border-radius-normal} #{radius.$border-radius-normal};
    }
    :deep(.el-select__popper[data-popper-placement='top-start']) {
      --el-popper-border-radius: #{radius.$border-radius-normal} #{radius.$border-radius-normal} 0 0;
    }

    :deep(.el-select__popper .el-popper__arrow::before) {
      display: none;
    }
  }
  :deep(.el-tag--dark.el-tag--primary) {
    --el-tag-bg-color: #{map.get(map.get(colors.$themes, 'light'), 'background-accent')};
    --el-tag-border-color: #{map.get(map.get(colors.$themes, 'light'), 'border-accent')};
  }
}
</style>

<style lang="scss">
@use 'sass:map';
@use '../styles/radius' as radius;
@use '../styles/colors' as colors;

.selectPopover.teleported.el-popper {
  --el-color-primary: #{map.get(map.get(colors.$themes, 'light'), 'input-border-active')};
  border: none;
  box-shadow: 0 0 0 1px var(--el-border-color) inset;

  &[data-popper-placement='bottom-start'] {
    border-top: 1px solid var(--el-color-primary);
    margin-top: -3px;
    --el-popper-border-radius: 0 0 #{radius.$border-radius-normal} #{radius.$border-radius-normal};
  }
  &[data-popper-placement='top-start'] {
    border-bottom: 1px solid var(--el-color-primary);
    margin-bottom: -3px;
    --el-popper-border-radius: #{radius.$border-radius-normal} #{radius.$border-radius-normal} 0 0;
  }
  .el-popper__arrow {
    display: none;
  }
}
</style>
