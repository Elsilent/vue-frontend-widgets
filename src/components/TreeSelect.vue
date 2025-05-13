<script setup lang="ts">
import 'element-plus/es/components/tree-select/style/index';
import { ElTreeSelect } from 'element-plus';
import type { TreeNodeData } from 'element-plus/lib/components/tree/src/tree.type';
import { ref, useAttrs } from 'vue';
import SelectSuffixIcon from './SelectSuffixIcon.vue';

const attrs = useAttrs();
const isOpened = ref(false);

const props = defineProps(['modelValue', 'name']);
const emit = defineEmits(['update:modelValue']);

const values = ref(props.modelValue);

const onChecked = (_: any, { checkedNodes }: { checkedNodes: TreeNodeData[] }) => {
  const resultNodeKeys: string[] = [];
  const childNodes = checkedNodes.map((item) => item.children.flat(Infinity)).flat();

  checkedNodes.forEach((node) => {
    if (node.children.length || !childNodes.some((childNode) => childNode.value === node.value)) {
      resultNodeKeys.push(node.value);
    }
  });
  values.value = resultNodeKeys;
};
</script>

<template lang="pug">
input(v-if="!values || values.length === 0", :name="`${name}[]`", type="hidden")
input(
  v-for="value in values",
  :name="`${name}[]`",
  :value="value",
  type="hidden",
)
ElTreeSelect(
  v-bind="$attrs"
  v-model="values"
  @check="onChecked"
  class="multiSelectTree"
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
@use '../styles/spacing' as spacing;

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
  .el-select-dropdown__item {
    margin: 0 1px;
  }
}

.multiSelectTree {
  margin: 0 1px;
  .el-checkbox {
    margin-bottom: 0;
  }
  .el-checkbox:not(.is-checked) :not(.is-indeterminate) .el-checkbox__inner:hover {
    transition: background-color 0.3s;
    background-color: map.get(map.get(colors.$themes, 'light'), 'background-hover-neutral');
  }
  .el-checkbox .el-checkbox__inner:after {
    border-width: 2px;
    width: 6px;
    height: 10px;
    left: 6px;
    top: 2px;
  }
  .el-checkbox .el-checkbox__inner:before {
    height: 4px;
    top: 8px;
  }

  .el-select-dropdown__item {
    margin: 0 2px 0 -1px;
    white-space: wrap;
    word-wrap: normal;
    height: auto;
    line-height: 1.5;
    padding: 6.5px 20px 6.5px 0;
    &.default {
      padding: spacing.$padding-size-menu-small-3 spacing.$padding-size-small-2;
    }
    &.is-selected {
      color: inherit;
      background-color: map.get(map.get(colors.$themes, 'light'), 'background-list-accent');
      font-weight: normal;
      &:after {
        display: none;
      }
    }
  }
}
</style>
