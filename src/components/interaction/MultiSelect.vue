<script lang="ts" setup>
import { computed, ref, toRefs } from 'vue';
import Align from '../container/Align.vue';
import Icon from '../image/Icon.vue';
import Info from '../label/Info.vue';
import { sort } from '../../utils/sort';
import { useUpDownKeys } from '../../composables/upDownKeys';
import BodyPopover from '../container/BodyPopover.vue';

const props = withDefaults(
  defineProps<{
    allItemsLabel?: string;
    disabled?: boolean;
    items: Record<string | number | symbol, string>;
    modelValue?: (string | number | symbol)[];
    noInline?: boolean;
    showAllItemsItem?: boolean;
    collapseTags?: boolean;
    collapseTagsLabel?: string;
    collapseTagsTooltip?: boolean;
  }>(),
  {
    disabled: false,
    noInline: false,
    showAllItemsItem: false,
    collapseTags: false,
    collapseTagsLabel: '',
    collapseTagsTooltip: false,
  },
);

const { disabled, items, modelValue, showAllItemsItem, collapseTags } = toRefs(props);

const active = ref(false);

const multiSelectContainer = ref<typeof Align | null>(null);
const newValueInput = ref<HTMLInputElement | null>(null);
const newValueFilter = ref<string>('');
const tooltipVisibility = ref<boolean>(false);

const collapseTagRef = ref<InstanceType<typeof Info> | undefined>();

const allItemsSelected = computed(() => {
  if (!modelValue || !modelValue.value) {
    return false;
  }

  return Object.keys(items.value).every((itemCode) => modelValue.value!.includes(itemCode));
});
const allItemsTitle = computed(() => Object.values(items.value).sort(sort).join(', '));

const dropdownItems = computed(() => {
  clearSelectedItem();
  const filteredItems = newValueFilter.value
    ? Object.entries(items.value)
        .filter(([, item]) => item.toLowerCase().includes(newValueFilter.value.toLowerCase()))
        .map(([itemCode]) => itemCode)
    : Object.keys(items.value);

  return filteredItems.sort(sort).reduce((dropdownItems, itemCode) => {
    dropdownItems[itemCode] = items.value[itemCode];

    return dropdownItems;
  }, {} as Record<string | number | symbol, string>);
});

const { selectedItem, onKeypressDown, onKeypressUp, clearSelectedItem } = useUpDownKeys({
  length: computed(() => Object.keys(dropdownItems.value).length),
});

const selectionOffset = computed(() => {
  if (!modelValue?.value) {
    return 1;
  }

  return -Object.keys(dropdownItems.value).indexOf(modelValue.value.toString());
});

const selectedItems = computed(() => {
  if (!modelValue || !modelValue.value) {
    return [];
  }

  return [...modelValue.value].sort(sort);
});

const style = computed(() => {
  let itemCount = Object.keys(dropdownItems.value).length;

  if (showAllItemsItem.value) {
    itemCount++;
  }

  return {
    '--item-count': itemCount,
    '--selection-offset': selectionOffset.value,
  };
});

const emit = defineEmits<{
  (event: 'update:modelValue', value: (string | number | symbol)[]): void;
}>();

const activate = () => {
  if (disabled.value) {
    return;
  }

  active.value = true;
  tooltipVisibility.value = false;

  newValueInput.value?.focus();
};

const whenBlurred = (event: FocusEvent) => {
  if (!multiSelectContainer.value?.$el.contains(event.relatedTarget)) {
    active.value = false;
    newValueFilter.value = '';

    newValueInput.value?.blur();
    clearSelectedItem();
  }
};

const toggleItem = (value: string | number | symbol) => {
  if (!modelValue?.value || disabled?.value || !active.value) {
    return;
  }

  if (!value) {
    updateValue(Object.keys(items.value));
    return;
  }
  const newValue = allItemsSelected.value ? [] : [...modelValue.value];

  const index = newValue.indexOf(value);

  if (index >= 0) {
    newValue.splice(index, 1);
  } else {
    newValue.push(value);
  }

  emit('update:modelValue', newValue);
  newValueInput.value?.focus({ preventScroll: true });
};

const updateValue = (value: (string | number | symbol)[]) => {
  emit('update:modelValue', value);
  newValueInput.value?.focus({ preventScroll: true });
};

const tooltipContent = computed(() => {
  let res = items.value[selectedItems.value[1]];
  for (let i = 2; i < selectedItems.value.length; i++) {
    res += ', ' + items.value[selectedItems.value[i]];
  }
  return res;
});
</script>

<template lang="pug">
Align.multiselect-container(
  ref='multiSelectContainer',
  :inline='!noInline',
  column
)
  .multiselect(
    @click='activate()',
    :class='{ active, disabled }',
    :style='style',
    tabindex='-1',
    @keydown.down.prevent="onKeypressDown()",
    @keydown.up.prevent="onKeypressUp()",
    @keydown.enter.prevent="toggleItem(Object.keys(dropdownItems)[selectedItem - 1])",
  )
    Align.current-item(vertical='center')
      Info.default-value(v-if='!modelValue || modelValue.length === 0') &nbsp;
      Align.current-values(
        v-else,
        :wrap="!collapseTags",
      )
        Info.current-value.all-items(
          v-if='allItemsSelected && allItemsLabel',
          :title='allItemsTitle',
        ) {{ allItemsLabel }}
        template(v-else-if="collapseTags")
          Info.current-value.no-spacing.cuttable(
            @click='() => toggleItem(selectedItems[0])',
          ) {{ items[selectedItems[0]] }}
          Info.current-value.no-spacing.cuttable(
            v-if="selectedItems.length === 2"
            @click='() => toggleItem(selectedItems[1])',
          ) {{ items[selectedItems[1]] }}
          template(v-else-if="selectedItems.length > 2")
            Info.current-value.no-spacing(
              ref="collapseTagRef"
              @mouseover="tooltipVisibility = !active"
              @mouseleave="tooltipVisibility = false"
            )
              | {{ collapseTagsLabel }}
            BodyPopover(
              v-if="collapseTagsTooltip"
              :visible="tooltipVisibility",
              autoPosition,
              :parentNode="collapseTagRef?.$el",
              popoverClass="collapse-tooltip",
              placementY="top"
              placementX="left"
            )
              Info {{ tooltipContent }}
        Info.current-value.no-spacing(
          v-else,
          v-for='itemCode in selectedItems',
          @click.stop='() => toggleItem(itemCode)',
        ) {{ items[itemCode] }}
      input.flex-max.new-value-input.no-spacing(
        ref='newValueInput',
        v-model='newValueFilter',
        @blur='whenBlurred($event)',
        @focus='activate()'
        :disabled='disabled',
      )
      Icon(
        backend='boxicons-solid',
        size='small-2',
        value='down-arrow',
      )
    Align.dropdown-menu.no-spacing(column)
      Info.item(
        v-if="showAllItemsItem",
        @click.stop="updateValue(Object.keys(items))",
        :class="{ current: allItemsSelected, selected: selectedItem === 0}",
        @mouseover="selectedItem = 0",
      ) {{ allItemsLabel }}
      Info.item.no-spacing(
        v-for='(item, itemCode, index) in dropdownItems',
        @click.stop="toggleItem(itemCode)",
        :class='{ current: modelValue?.includes(itemCode) && !allItemsSelected, selected: selectedItem - 1 === index }',
        @mouseover="selectedItem = index + 1",
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
      padding: ($padding-size-small-2 - $padding-size-small-3 - 1px)
        ($padding-size-normal - $padding-size-small-2);
      max-width: 90%;

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

        &.cuttable {
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
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
      width: 100%;
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
    z-index: 1001;

    > .item {
      transition-duration: $transition-duration-fast-2;

      &.selected {
        @include apply-color(background-color, background-lowered);
      }

      &.current {
        &:not(.selected) {
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

  &.active,
  &:focus {
    @include apply-color(border-color, background-important-alt);

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

<style lang="scss">
@import '../../styles/colors.scss';
@import '../../styles/spacing.scss';
.collapse-tooltip.popover {
  @include apply-color(border-color, border-inactive);

  border: 1px solid;
  bottom: 100%;
  max-width: 400px;
  height: max-content;
  padding: 0;
  transform: translateY(-10px);
  .info-text {
    margin: $padding-size-small-2;
  }
}
</style>
