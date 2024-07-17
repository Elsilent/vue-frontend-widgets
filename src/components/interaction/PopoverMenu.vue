<script lang="ts" setup>
import { toRefs, onUnmounted, watch } from 'vue';
import Icon from '../image/Icon.vue';
import Info from '../label/Info.vue';
import Popover from '../container/Popover.vue';
import type { MenuItem } from '../../utils/interface/menu';
import { useUpDownKeys } from '../../composables/upDownKeys.js';

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
@import '../../styles/colors.scss';
@import '../../styles/spacing.scss';
@import '../../styles/transition.scss';

.card.popover {
  padding: $padding-size-small-2 0;
  overflow: hidden;
  transition-property: background-color, opacity;

  > .popover-item {
    cursor: pointer;
    padding: $padding-size-small-2 $padding-size-normal;
    transition-duration: $transition-duration-fast-2;
    transition-property: background-color;

    &.selected {
      @include apply-color(background-color, background-normal);
    }
  }
}
</style>
