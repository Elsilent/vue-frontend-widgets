<script lang="ts" setup>
import { toRefs, ref } from 'vue';
import Tooltip from './Tooltip.vue';
import Icon from './Icon.vue';
import type { IconBackend } from '../utils/enum/icon_backend';
import type { Elevation } from '../utils/enum/elevation';

const props = withDefaults(
  defineProps<{
    description?: string;
    title?: string;
    visible?: boolean;
    iconValue?: string;
    iconBackend?: IconBackend;
    iconElevation?: Elevation;
  }>(),
  {
    visible: undefined,
    iconValue: 'circle-question',
    iconBackend: 'solid',
    iconElevation: 'normal',
  },
);
const { description, title, visible, iconValue, iconBackend } = toRefs(props);

const iconRef = ref<typeof Icon>();
</script>

<template lang="pug">
.column-hint
  Icon(:value="iconValue" :backend="iconBackend" :elevation="iconElevation" ref="iconRef" size="small" )
  Tooltip(
    :title="title"
    :content="description"
    :show-arrow="false"
    :persistent="false"
    :offset="0"
    :virtual-ref="iconRef"
    trigger="hover"
    :visible="visible"
    virtual-triggering= visible === undefined
    width="15rem"
  )
</template>

<style lang="scss" scoped>
@use '../styles/spacing' as spacing;
.column-hint {
  cursor: pointer;
  display: flex;
  max-width: 30rem;
  padding: 0;
  text-decoration: none;
  margin-left: spacing.$padding-size-small-4;
}
</style>
