<script lang="ts" setup>
import type { IconBackend } from '../../utils/enum/icon_backend';
import { toRefs } from 'vue';
import Info from '../../components/label/Info.vue';
import Icon from './Icon.vue';

const props = withDefaults(
  defineProps<{
    icon?: string;
    iconBackend?: IconBackend;
    label?: string;
    source?: string;
  }>(),
  {
    icon: 'user-circle',
    iconBackend: 'boxicons',
  },
);

const { icon, iconBackend, label, source } = toRefs(props);
</script>

<template lang="pug">
.avatar(
  :style='source ? `background-image: url(${source})` : undefined',
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
@import '../../styles/colors.scss';
@import '../../styles/fonts.scss';
@import '../../styles/spacing.scss';
@import '../../styles/transition.scss';

.avatar {
  @include apply-color(background-color, background-lowered-2);

  background-size: cover;
  border-radius: 100%;
  align-items: center;
  display: flex;
  font-size: $font-size-normal;
  height: $padding-size-normal * 2.5;
  justify-content: center;
  transition-duration: $transition-duration-normal;
  transition-property: background-color;
  user-select: none;
  width: $padding-size-normal * 2.5;
}
</style>
