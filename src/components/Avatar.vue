<script lang="ts" setup>
import type { IconBackend } from '../utils/enum/icon_backend';
import { toRefs } from 'vue';
import Info from './Info.vue';
import Icon from './Icon.vue';

const props = withDefaults(
  defineProps<{
    icon?: string;
    iconBackend?: IconBackend;
    label?: string;
    source?: string;
  }>(),
  {
    icon: 'circle-user',
    iconBackend: 'regular',
  },
);

const { icon, iconBackend, label, source } = toRefs(props);
</script>

<template lang="pug">
.avatar(
  :style='source ? `background-image: url(${source})` : undefined',
  tabindex="0"
)
  Icon(
    v-if='!label && !source',
    :backend='iconBackend',
    :value='icon',
    size='large',
  )
  Info(
    v-if='label && !source',
    elevation='normal',
    size='large-2',
  ) {{ label }}
</template>

<style lang="scss" scoped>
@use '../styles/colors' as colors;
@use '../styles/fonts/base' as fonts;
@use '../styles/spacing' as spacing;
@use '../styles/transition' as transition;

.avatar {
  @include colors.apply-color(background-color, background-lowered-2);

  background-size: cover;
  border-radius: 100%;
  align-items: center;
  display: flex;
  font-size: fonts.$font-size-normal;
  height: spacing.$padding-size-normal * 2.5;
  justify-content: center;
  transition-duration: transition.$transition-duration-normal;
  transition-property: background-color;
  user-select: none;
  width: spacing.$padding-size-normal * 2.5;

  &:focus {
    outline: none;
  }
}
</style>
