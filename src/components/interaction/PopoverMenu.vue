<script lang="ts" setup>
import { toRefs } from 'vue';
import Icon from '../image/Icon.vue';
import Info from '../label/Info.vue';
import Popover from '../container/Popover.vue';
import type { MenuItem } from '../../utils/interface/menu';

const props = defineProps<{
  items: Record<string, MenuItem>;
  popoverClass?: string;
  visible: boolean;
}>();

const { items, visible } = toRefs(props);

const emit = defineEmits<(e: 'select', code: string) => void>();

const whenClicked = (code: string) => {
  emit('select', code);
};
</script>

<template lang="pug">
Popover(
  :popoverClass='popoverClass',
  :visible='visible',
)
  .popover-item(
    v-for='({ icon, iconBackend, label }, code) in items',
    @click="() => whenClicked(code)",
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

    &:hover {
      @include apply-color(background-color, background-normal);
    }
  }
}
</style>
