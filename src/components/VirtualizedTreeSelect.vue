<script setup lang="ts">
import { ElInput, ElTreeV2, ElTree, ElPopover, ElTag } from 'element-plus';
import { CircleClose } from '@element-plus/icons-vue';
import { computed, watch, ref, onMounted, onBeforeUnmount } from 'vue';
import SelectSuffixIcon from '@/components/SelectSuffixIcon.vue';
declare type TreeNodeData_2 = Record<string, any>;

const props = defineProps([
  'modelValue',
  'name',
  'data',
  'minHeight',
  'minWidth',
  'placeholder',
  'noMatchText',
]);
const emit = defineEmits(['update:modelValue']);

const treeProps = { value: 'value', label: 'label', children: 'children' };

const popoverRef = ref<InstanceType<typeof ElPopover> | null>(null);
const triggerRef = ref<HTMLElement | null>(null);
const inputRef = ref<InstanceType<typeof ElInput> | null>(null);
const treeRef = ref<InstanceType<typeof ElTreeV2> | null>(null);

const visible = ref(false);
const rawValues = ref<TreeNodeData_2[]>([]);
const filterValue = ref('');

const height = ref(0);
const width = ref(200);

const values = computed(() => {
  return rawValues.value.map((treeNode: TreeNodeData_2) => treeNode.value);
});

const filterMethod = (query: string, node: { label: string }) => node.label.includes(query);

const handleInput = () => {
  treeRef.value?.filter(filterValue.value);
  if (!filterValue.value) {
    treeRef.value?.setExpandedKeys([]);
  } else if (!visible.value) {
    visible.value = true;
  }
};

const handleClickOutside = ({ target }: MouseEvent) => {
  const inputEl = inputRef.value?.$el;
  const triggerEl = triggerRef.value;
  const popoverEl = popoverRef.value?.popperRef?.contentRef;

  if (
    triggerEl &&
    !triggerEl.contains(target as Node) &&
    inputEl &&
    !inputEl.contains(target as Node) &&
    popoverEl &&
    !popoverEl.contains(target as Node)
  ) {
    // Add a small delay to allow clicks inside the popover to register
    setTimeout(() => {
      visible.value = false;
      filterValue.value = '';
      treeRef.value?.filter('');
      treeRef.value?.setExpandedKeys([]);
    }, 200);
  } else if (triggerEl && triggerEl.contains(target as Node)) {
    if (!['path', 'svg'].includes((target as HTMLElement).tagName)) {
      visible.value = !visible.value;
    }
    if (visible.value) {
      setTimeout(() => focusInput(), 200);
    }
  }
};

const onChecked = (_: undefined, { checkedNodes }: TreeNodeData_2) => {
  const resultNodes: TreeNodeData_2[] = [];
  const childNodes = checkedNodes
    .map((item: TreeNodeData_2) => item.children?.flat(Infinity))
    .flat();

  checkedNodes.forEach((node: TreeNodeData_2) => {
    if (
      node.children?.length ||
      !childNodes.some((childNode: TreeNodeData_2) => childNode?.value === node.value)
    ) {
      resultNodes.push(node);
    }
  });
  rawValues.value = resultNodes;
};

const onCloseTag = (tag: TreeNodeData_2) => {
  focusInput();
  treeRef.value?.setChecked(tag.value, false);
  const checkedValues = treeRef.value?.getCheckedNodes();
  onChecked(undefined, { checkedNodes: checkedValues });
};

const onClear = () => {
  rawValues.value = [];
  treeRef.value?.setCheckedKeys([]);
  filterValue.value = '';
  treeRef.value?.filter('');
  treeRef.value?.setExpandedKeys([]);
  focusInput();
};

watch(values, (newValues) => {
  emit('update:modelValue', newValues);
});

//Helper for waiting first loading (all old slow components) and recalc popup position
const firstLoading = ref(true);
const onFocus = () => {
  if (firstLoading.value) {
    const triggerRect = triggerRef.value?.getBoundingClientRect();
    if (triggerRect) {
      height.value = triggerRect['bottom'] + window.scrollY;
      firstLoading.value = false;
    }
  }
  visible.value = true;
};

const focusInput = () => {
  inputRef.value?.focus();
};

const resizeObserver = new ResizeObserver((entries, observer) => {
  if (!popoverRef.value) {
    return;
  }
  const triggerRect = triggerRef.value?.getBoundingClientRect();

  if (triggerRect && triggerRect.bottom + window.scrollY !== height.value) {
    height.value = triggerRect.bottom + window.scrollY;
  }
  if (entries[0].borderBoxSize[0].inlineSize !== width.value) {
    width.value = entries[0].borderBoxSize[0].inlineSize;
  }
});

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside);

  if (triggerRef.value) {
    width.value = triggerRef.value?.offsetWidth;
    resizeObserver.observe(triggerRef.value);
  }

  treeRef.value?.setCheckedKeys(props.modelValue);

  setTimeout(() => {
    const checkedValues = treeRef.value?.getCheckedNodes();
    onChecked(undefined, { checkedNodes: checkedValues });
  }, 0);
});

onBeforeUnmount(() => {
  resizeObserver.disconnect();
  document.removeEventListener('mousedown', handleClickOutside);
});
</script>

<template lang="pug">
input(v-if="!values || values.length === 0", :name="`${name}[]`", type="hidden")
input(
  v-for="value in values",
  :name="`${name}[]`",
  :value="value",
  type="hidden",
)
ElPopover(
  ref="popoverRef"
  placement="top-start"
  :popper-class="{'vtree-tooltip': true,'opened': visible}"
  :popper-style="{'top': height + 'px', 'min-height': props.minHeight || '202px'}"
  :width="width"
  :visible="visible"
)
  template(#reference)
    div.vtree-trigger(
      ref="triggerRef"
      :class="{'is-focused': visible}"
      :style="{'min-width': props.minWidth || 'initial'}"
    )
      div.vtree-tags
        template(v-for="rawValue in rawValues" :key="rawValue.value")
          ElTag(
            effect="dark"
            closable
            @close="onCloseTag(rawValue)"
          ) {{rawValue.label}}
        div.vtree-filter
          ElInput(
            ref="inputRef"
            v-model="filterValue"
            @focus="onFocus"
            @input="handleInput"
            :placeholder="values.length ? '' : props.placeholder"
          )
      div.vtree-suffix
        CircleClose.vtree-closeControl(
          v-if="values.length"
          @click="onClear"
        )
        SelectSuffixIcon.vtree-selectControl(
          :class="{filled: values.length}"
        )
  ElTreeV2.vtree(
    ref="treeRef"
    :data="data"
    :show-checkbox="true"
    :props="treeProps"
    :filter-method="filterMethod"
    @node-click="focusInput"
    @check-change="focusInput"
    @node-expand="focusInput"
    @node-collapse="focusInput"
    @check="onChecked"
    :empty-text="props.noMatchText"
  )
</template>

<style lang="scss" scoped>
@use 'sass:map';
@use '../styles/radius' as radius;
@use '../styles/colors' as colors;

.vtree-trigger {
  border-radius: radius.$border-radius-normal;
  box-shadow: 0 0 0 1px var(--el-input-border-color, var(--el-border-color)) inset;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  min-height: var(--el-component-size-large);
  padding: 5px 16px 5px 8px;
  width: max-content;
  &:hover:not(.is-focused) {
    box-shadow: 0 0 0 1px var(--el-border-color-hover) inset;
  }

  .vtree-suffix {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    margin-left: auto;
    min-width: 30px;
    .vtree-closeControl,
    .vtree-selectControl {
      color: var(--el-select-input-color);
      cursor: pointer;
      transition: var(--el-transition-duration);
      transform: rotate(0);
      transform-origin: center;
      width: 14px;
      &:before {
        position: relative;
        left: 2px;
      }
    }
    .vtree-closeControl {
      display: none;
    }
  }
  &:hover .vtree-closeControl {
    display: inline-block;
    &:hover {
      color: var(--el-select-close-hover-color);
    }
  }
  &.is-focused {
    border-radius: radius.$border-radius-normal radius.$border-radius-normal 0 0;
    box-shadow: 0 0 0 1px var(--el-color-primary) inset;
    .vtree-selectControl {
      transform: rotate(180deg);
    }
  }
  &:hover .vtree-selectControl.filled {
    display: none;
  }

  .vtree-tags {
    display: flex;
    flex-wrap: wrap;
    .el-tag {
      margin: 3px 6px 3px 0;
      &.el-tag--dark.el-tag--primary {
        --el-tag-bg-color: #{map.get(map.get(colors.$themes, 'light'), 'background-accent')};
        --el-tag-border-color: #{map.get(map.get(colors.$themes, 'light'), 'border-accent')};
      }
    }
  }

  .vtree-filter {
    flex-grow: 1;
    min-width: 50px;
    :deep(.el-input__wrapper) {
      box-shadow: none;
      padding: 0 11px;
    }
  }
}
</style>

<style lang="scss">
@use '../styles/radius' as radius;

.el-popover.el-popper.vtree-tooltip {
  border-radius: 0 0 radius.$border-radius-normal radius.$border-radius-normal;
  padding: 0;
  .el-popper__arrow::before {
    display: none;
  }
  .el-checkbox {
    margin-bottom: 0;
  }
  .el-checkbox .el-checkbox__inner::after {
    border-width: 2px;
    width: 6px;
    height: 10px;
    left: 6px;
    top: 2px;
  }
}
</style>
