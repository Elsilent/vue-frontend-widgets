<script lang="ts" setup>
import type { Size } from '../../utils/enum/size';
import match from '../../utils/match';
import { computed, ref, toRefs } from 'vue';
import Align from '../container/Align.vue';
import Icon from '../image/Icon.vue';
import Info from '../label/Info.vue';
import { useUpDownKeys } from '../../composables/upDownKeys';

const props = withDefaults(
  defineProps<{
    items: Record<string | number | symbol, string>;
    modelValue?: string | number | symbol;
    noInline?: boolean;
    size?: 'small' | 'normal';
    tabindex?: number;
  }>(),
  {
    noInline: false,
    size: 'normal',
    tabindex: 0,
  },
);

const { items, modelValue, size } = toRefs(props);

const { selectedItem, onKeypressDown, onKeypressUp, clearSelectedItem } = useUpDownKeys({
  length: Object.keys(items.value).length - 1,
});

const active = ref(false);

const classes = computed(() => ({
  active: active.value,
  [`size-${size.value}`]: true,
}));

const iconSize = computed(
  () =>
    match<'normal' | 'small', Size>(size.value)
      .when('small', () => 'small-3')
      .when('normal', () => 'small-2').done!,
);

const selectionOffset = computed(() => {
  if (!modelValue?.value || modelValue.value === undefined) {
    return 1;
  }

  return -Object.keys(items.value).indexOf(modelValue.value.toString());
});

const style = computed(() => ({
  '--item-count': Object.keys(items.value).length,
  '--selection-offset': selectionOffset.value,
}));

const emit = defineEmits<{
  (event: 'update:modelValue', value: string | number | symbol): void;
}>();

const updateValue = (value: string | number | symbol) => {
  emit('update:modelValue', value);

  clearSelectedItem();
  active.value = false;
};

const onKeypressEnter = () => {
  if (active.value) {
    updateValue(Object.keys(items.value)[selectedItem.value]);
    return;
  }
  clearSelectedItem();
  active.value = true;
};
</script>

<template lang="pug">
Align(
  :inline='!noInline',
  column
)
  .dropdown(
    @blur='() => active = false',
    @click='() => active = !active',
    @keyup.enter='onKeypressEnter()',
    @keydown.down.prevent="onKeypressDown()",
    @keydown.up.prevent="onKeypressUp()",
    :class='classes',
    :style='style',
    :tabindex='tabindex',
  )
    Align.item.current(vertical='center')
      Info.flex-max {{ modelValue === undefined ? '&nbsp;' : items[modelValue] }}
      Icon(
        :size='iconSize',
        backend='boxicons-solid',
        value='down-arrow',
      )
    Align.dropdown-menu.no-spacing(column)
      Info.item.no-spacing(
        v-for='(item, itemCode, index) in items',
        :class='{ current: modelValue === itemCode, selected: selectedItem === index }',
        @click.stop="updateValue(itemCode)",
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

.dropdown {
  @include apply-color(background-color, background-elevated-3);
  @include apply-color(border-color, border-inactive);

  border-radius: $border-radius-normal;
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  display: inline-block;
  font-family: $font-family-normal;
  font-size: $font-size-normal;
  outline: none;
  position: relative;
  transition-duration: $transition-duration-normal;
  transition-property: background-color, border-color;
  user-select: none;

  &.active {
    > .dropdown-menu {
      pointer-events: initial;
      top: 100%;
      opacity: 1;
    }

    > .item {
      &.current {
        > .icon {
          transform: rotateZ(180deg);
        }
      }
    }
  }

  &.size-normal {
    $-item-height: $font-size-normal * 1.5 + $padding-size-small-2 * 2 - 2;

    &.active {
      > .dropdown-menu {
        height: calc(var(--item-count) * $-item-height);
      }
    }

    > .dropdown-menu {
      height: $-item-height;
      top: $-item-height;
    }

    .item {
      padding: $padding-size-small-2 $padding-size-normal;
    }
  }

  &.size-small {
    $-item-height: $font-size-normal * 1.5 + $padding-size-small-3 * 2 - 2;

    &.active {
      > .dropdown-menu {
        height: calc(var(--item-count) * $-item-height);
      }
    }

    > .dropdown-menu {
      height: $-item-height;
      top: $-item-height;
    }

    .item {
      padding: $padding-size-small-3 $padding-size-small-2;
    }
  }

  &:focus {
    @include apply-color(border-color, background-important-alt);
  }

  > .dropdown-menu {
    @include apply-color(background-color, background-elevated-3);
    @include apply-color(border-color, border-inactive);

    border-bottom-left-radius: $border-radius-normal;
    border-bottom-right-radius: $border-radius-normal;
    border-style: solid;
    border-top-style: none;
    border-width: 1px;
    left: -1px;
    margin-top: -1px;
    opacity: 0;
    overflow: hidden;
    padding-top: 1px;
    pointer-events: none;
    position: absolute;
    transition-duration: $transition-duration-fast;
    transition-property: height, top, opacity;
    width: 100%;
    z-index: 100;

    > .item {
      transition-duration: $transition-duration-fast-2;

      &:hover,
      &.selected {
        @include apply-color(background-color, background-lowered);
      }

      &.current {
        &:not(:hover, .selected) {
          @include apply-color(background-color, background-accent);
          @include apply-color(color, white);
        }
      }
    }
  }

  .item {
    transition-property: background-color, color;

    &.current {
      > .icon {
        padding-top: 1px;
        transition-duration: $transition-duration-fast;
        transition-property: transform;
      }
    }
  }
}
</style>
