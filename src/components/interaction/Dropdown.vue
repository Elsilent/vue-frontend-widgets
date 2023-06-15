<script lang="ts" setup>
import { computed, ref, toRefs } from 'vue';
import Align from '../container/Align.vue';
import Icon from '../image/Icon.vue';
import Info from '../label/Info.vue';

const props = withDefaults(
  defineProps<{
    items: Record<string | number | symbol, string>;
    modelValue?: string | number | symbol;
    noInline?: boolean;
  }>(),
  {
    noInline: false,
  },
);

const { items, modelValue } = toRefs(props);

const active = ref(false);

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

  active.value = false;
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
    :class='{ active }',
    :style='style',
    tabindex='-1',
  )
    Align.item.current(vertical='center')
      Info.flex-max {{ modelValue === undefined ? '&nbsp;' : items[modelValue] }}
      Icon(
        backend='boxicons-solid',
        size='small-2',
        value='down-arrow',
      )
    Align.dropdown-menu(column)
      Info.item.no-spacing(
        v-for='(item, itemCode) in items',
        :class='{ current: modelValue === itemCode }',
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

.dropdown {
  @include apply-color(background-color, background-elevated-3);
  @include apply-color(border-color, background-lowered-3);

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

  > .dropdown-menu {
    @include apply-color(background-color, background-elevated-3);
    @include apply-color(border-color, background-lowered-3);

    border-bottom-left-radius: $border-radius-normal;
    border-bottom-right-radius: $border-radius-normal;
    border-style: solid;
    border-top-style: none;
    border-width: 1px;
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

    > .item {
      transition-duration: $transition-duration-fast-2;

      &:hover {
        @include apply-color(background-color, background-accent);
        @include apply-color(color, white);
      }

      &.current {
        &:not(:hover) {
          @include apply-color(background-color, background-lowered);
        }
      }
    }
  }

  .item {
    padding: $padding-size-small-2 $padding-size-normal;
    transition-property: background-color, color;

    &.current {
      > .icon {
        padding-top: 1px;
        transition-duration: $transition-duration-fast;
        transition-property: transform;
      }
    }
  }

  &.active {
    > .dropdown-menu {
      height: calc(var(--item-count) * $-item-height);
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
}
</style>
