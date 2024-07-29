<script lang="ts" setup>
import { toRefs, ref } from 'vue';
import Tooltip from '../container/Tooltip.vue';
import Icon from '../image/Icon.vue';
import type { IconBackend } from '../../utils/enum/icon_backend';

const props = withDefaults(
  defineProps<{
    description?: string;
    title?: string;
    visible?: boolean;
    iconValue?: string;
    iconBackend?: IconBackend;
  }>(),
  {
    visible: false,
    iconValue: 'circle-question',
    iconBackend: 'solid',
  },
);
const { description, title, visible, iconValue, iconBackend } = toRefs(props);

const manualVisible = ref(false);
const iconRef = ref<HTMLElement | undefined>();
</script>

<template lang="pug">
.column-hint
  Icon(:value="iconValue" :backend="iconBackend" ref="iconRef" @mouseover="manualVisible = true" @mouseout="manualVisible = false")
  Tooltip(
    :title="title"
    :content="description"
    :show-arrow="false"
    :persistent="false"
    :offset="0"
    :visible="manualVisible || visible"
    :virtual-ref="iconRef?.closest('.cell')"
    virtual-triggering
    width="15rem"
  )
</template>

<style lang="scss" scoped>
.column-hint {
  cursor: pointer;
  display: flex;
  max-width: 30rem;
  padding: 0;
  text-decoration: none;

  > span {
    margin-right: 0.5rem;
    user-select: none;
  }
}
</style>
