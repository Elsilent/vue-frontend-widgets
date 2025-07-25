<script lang="ts" setup>
import { toRefs, onUnmounted, watch } from 'vue';
import Icon from './Icon.vue';
import Info from './Info.vue';
import Popover from './Popover.vue';
import type { MenuItem } from '../utils/interface/menu';
import { useUpDownKeys } from '../composables/upDownKeys.js';

const props = defineProps<{
  items: Record<string, MenuItem>;
  popoverClass?: string;
  visible: boolean;
}>();

const { items, visible } = toRefs(props);

const emit = defineEmits<(e: 'select', code: string) => void>();

const { selectedItem, onKeypressDown, onKeypressUp, clearSelectedItem } = useUpDownKeys({
  length: Object.keys(items.value).length - 1,
});

const whenClicked = (code: string) => {
  clearSelectedItem();
  emit('select', code);
};

watch(visible, (visible) => {
  if (visible) {
    window.addEventListener('keydown', onKeypress);
  } else {
    window.removeEventListener('keydown', onKeypress);
  }
});

const onKeypress = (e: KeyboardEvent) => {
  switch (e.code) {
    case 'ArrowDown':
      onKeypressDown();
      return;
    case 'ArrowUp':
      onKeypressUp();
      return;
    case 'Enter':
      onKeypressEnter();
      return;
  }
};

const onKeypressEnter = () => {
  if (visible.value) {
    whenClicked(Object.keys(items.value)[selectedItem.value]);
  }
  clearSelectedItem();
};

onUnmounted(() => {
  window.removeEventListener('keydown', onKeypress);
});
</script>

<template lang="pug">
Popover(
  :popoverClass='popoverClass',
  :visible='visible',
  @keydown.down.prevent="onKeypressDown()",
  @keydown.up.prevent="onKeypressUp()",
  @keydown.enter="onKeypressEnter()",
)
  .popover-item(
    v-for='({ icon, iconBackend, label }, code, index) in items',
    @click="whenClicked(code)",
    @mouseover="selectedItem = index",
    :class="{selected: selectedItem === index}"
  )
    Icon(v-if='icon', :backend='iconBackend', :value='icon')
    Info(v-if='label') {{ label }}
</template>

<style lang="scss" scoped>
@use '../styles/colors' as colors;
@use '../styles/spacing' as spacing;
@use '../styles/transition' as transition;

.card.popover {
  padding: spacing.$padding-size-small-2 0;
  overflow: hidden;
  transition-property: background-color, opacity;

  > .popover-item {
    cursor: pointer;
    padding: spacing.$padding-size-small-2 spacing.$padding-size-normal;
    transition-duration: transition.$transition-duration-fast-2;
    transition-property: background-color;

    &.selected {
      @include colors.apply-color(background-color, background-normal);
    }
  }
}
</style>
