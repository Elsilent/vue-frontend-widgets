<script lang="ts" setup>
import { computed, ref, toRefs } from 'vue';
import Align from '../container/Align.vue';
import Icon from '../image/Icon.vue';
import Info from '../label/Info.vue';
import { sort } from '../../utils/sort';

const props = withDefaults(
  defineProps<{
    allItemsLabel?: string;
    disabled?: boolean;
    items: Record<string | number | symbol, string>;
    modelValue?: (string | number | symbol)[];
    noInline?: boolean;
  }>(),
  {
    disabled: false,
    noInline: false,
  },
);

const { disabled, items, modelValue } = toRefs(props);

const active = ref(false);

const multiSelectContainer = ref<typeof Align|null>(null);
const newValueInput = ref<HTMLInputElement|null>(null);
const newValueFilter = ref<string>('');

const allItemsSelected = computed(() => {
  if (!modelValue || !modelValue.value) {
    return false;
  }

  return Object.keys(items.value).every((itemCode) => modelValue.value!.includes(itemCode));
});
const allItemsTitle = computed(() => Object.values(items.value).sort(sort).join(', '));

const dropdownItems = computed(() => {
  const filteredItems = newValueFilter.value
    ? Object.entries(items.value)
      .filter(([, item]) => item.toLowerCase().includes(newValueFilter.value.toLowerCase()))
      .map(([itemCode]) => itemCode)
    : Object.keys(items.value);

  return filteredItems.sort(sort).reduce(
    (dropdownItems, itemCode) => {
      dropdownItems[itemCode] = items.value[itemCode];

      return dropdownItems;
    },
    {} as Record<string|number|symbol, string>,
  );
});

const selectionOffset = computed(() => {
  if (!modelValue?.value || modelValue.value === undefined) {
    return 1;
  }

  return -Object.keys(dropdownItems.value).indexOf(modelValue.value.toString());
});

const selectedItems = computed(() => {
  if (!modelValue || !modelValue.value) {
    return [];
  }

  return modelValue.value.sort(sort);
});

const style = computed(() => ({
  '--item-count': Object.keys(dropdownItems.value).length,
  '--selection-offset': selectionOffset.value,
}));

const emit = defineEmits<{
  (event: 'update:modelValue', value: (string | number | symbol)[]): void;
}>();

const activate = () => {
  if (disabled.value) {
    return;
  }

  active.value = true;

  newValueInput.value?.focus();
};

const whenBlurred = (event: FocusEvent) => {
  if (!multiSelectContainer.value?.$el.contains(event.relatedTarget)) {
    active.value = false;
    newValueFilter.value = '';

    newValueInput.value?.blur();

    return;
  }

  newValueInput.value?.focus();
};

const updateValue = (value: string | number | symbol) => {
  if (!modelValue || !modelValue.value || (disabled && disabled.value) || !active.value) {
    return;
  }

  const newValue = [...modelValue.value];

  const index = newValue.indexOf(value);

  if (index >= 0) {
    newValue.splice(index, 1);
  } else {
    newValue.push(value);
  }

  emit('update:modelValue', newValue);
};
</script>

<template lang="pug">
Align.multiselect-container(
  ref='multiSelectContainer',
  :inline='!noInline',
  column
)
  .multiselect(
    @click='() => activate()',
    :class='{ active, disabled }',
    :style='style',
    tabindex='-1',
  )
    Align.current-item(vertical='center')
      Info.default-value(v-if='!modelValue || modelValue.length === 0') &nbsp;
      Align.current-values(
        v-else,
        wrap,
      )
        Info.current-value.all-items(
          v-if='allItemsSelected && allItemsLabel',
          :title='allItemsTitle',
        ) {{ allItemsLabel }}
        Info.current-value.no-spacing(
          v-else,
          v-for='itemCode in selectedItems',
          @click.stop='() => updateValue(itemCode)',
        ) {{ items[itemCode] }}
      input.flex-max.new-value-input.no-spacing(
        ref='newValueInput',
        @blur='(event) => whenBlurred(event)',
        :disabled='disabled',
        v-model='newValueFilter',
      )
      Icon(
        backend='boxicons-solid',
        size='small-2',
        value='down-arrow',
      )
    Align.dropdown-menu.no-spacing(column)
      Info.item.no-spacing(
        v-for='(item, itemCode) in dropdownItems',
        :class='{ current: modelValue?.includes(itemCode) }',
        @click.stop="() => updateValue(itemCode)",
      ) {{ item }}
</template>

<style lang="scss" scoped>
@use 'sass:math';

@import '../../styles/colors.scss';
@import '../../styles/fonts.scss';
@import '../../styles/radius.scss';
@import '../../styles/spacing.scss';
@import '../../styles/transition.scss';

@include default-spacing;

$-item-height: $font-size-normal * 1.5 + $padding-size-small-2 * 2 - 2;

.multiselect {
  @include apply-color(background-color, background-elevated-3);
  @include apply-color(border-color, border-inactive);

  border-radius: $border-radius-normal;
  border-style: solid;
  border-width: 1px;
  cursor: text;
  display: inline-block;
  font-family: $font-family-normal;
  font-size: $font-size-normal;
  outline: none;
  position: relative;
  transition-duration: $transition-duration-normal;
  transition-property: background-color, border-color, opacity;
  user-select: none;

  &.disabled {
    cursor: default;
    opacity: 0.5;
  }

  > .current-item {
    margin-right: $padding-size-normal;

    > .current-values {
      gap: $padding-size-small-2;
      padding: ($padding-size-small-2 - $padding-size-small-3 - 1px) ($padding-size-normal - $padding-size-small-2);

      > .current-value {
        @include apply-color(background-color, background-accent);
        @include apply-color(border-color, border-accent);
        @include apply-color(color, white);

        border-radius: $border-radius-normal;
        border-style: solid;
        border-width: 1px;
        padding: $padding-size-small-3 $padding-size-small-2;
        transition-duration: $transition-duration-normal;
        transition-property: background-color, border-color;

        &.all-items {
          cursor: help;
        }

        &:not(.all-items) {
          cursor: pointer;
        }
      }
    }

    > .default-value {
      padding: $padding-size-small-2 0;
    }

    > .new-value-input {
      @include apply-color(color, text-normal);

      background-color: transparent;
      border: none;
      display: flex;
      font-family: $font-family-normal;
      font-size: $font-size-normal;
      outline: none;
      width: min-content;
    }

    > .icon {
      padding-top: 1px;
      transition-duration: $transition-duration-fast;
      transition-property: transform;
    }
  }

  > .dropdown-menu {
    @include apply-color(background-color, background-elevated-3);
    @include apply-color(border-color, border-inactive);

    border-bottom-left-radius: $border-radius-normal;
    border-bottom-right-radius: $border-radius-normal;
    border-style: solid;
    border-top-style: none;
    border-width: 1px;
    cursor: pointer;
    height: $-item-height;
    left: -1px;
    margin-top: -1px;
    opacity: 0;
    overflow: hidden;
    padding-top: 1px;
    pointer-events: none;
    position: absolute;
    top: $-item-height;
    transition-duration: $transition-duration-fast;
    transition-property: height, top, opacity;
    width: 100%;
    z-index: 100;

    > .item {
      transition-duration: $transition-duration-fast-2;

      &:hover {
        @include apply-color(background-color, background-lowered);
      }

      &.current {
        &:not(:hover) {
          @include apply-color(background-color, background-accent);
          @include apply-color(color, white);
        }
      }
    }
  }

  .item {
    padding: $padding-size-small-2 $padding-size-normal;
    transition-property: background-color, color;
  }

  &.active {
    > .dropdown-menu {
      height: calc(var(--item-count) * $-item-height);
      pointer-events: initial;
      top: 100%;
      opacity: 1;
    }

    > .current-item {
      > .icon {
        transform: rotateZ(180deg);
      }
    }
  }
}
</style>
