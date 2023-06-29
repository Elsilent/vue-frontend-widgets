<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import Card from '../container/Card.vue';
import Align from '../container/Align.vue';
import Info from '../label/Info.vue';
import Icon from './Icon.vue';
import Loader from './Loader.vue';
import type { Mood } from '../../utils/enum/mood';

const props = defineProps<{
  formatter: (value: number) => string;
  icon: string;
  label: string;
  mood: Mood;
  value?: number;
}>();

const { value } = toRefs(props);

const classes = computed(() => ({
  loading: value === undefined || value.value === undefined,
}));
</script>

<template lang="pug">
Card.kpi-card(:class='classes')
  Align(vertical='center')
    Align.flex-max(column)
      Info {{ label }}
      Info(:mood='mood', size='large-3') {{ value === undefined ? '&nbsp;' : formatter(value) }}
    Icon(
      :mood='mood',
      :value='icon',
      size='large-6',
    )
  Align.loader-container.no-spacing(
    v-if='value === undefined',
    horizontal='center',
    vertical='center',
  )
    Loader
</template>

<style lang="scss" scoped>
@import '../../styles/colors.scss';
@import '../../styles/radius.scss';
@import '../../styles/spacing.scss';
@import '../../styles/transition.scss';

@include default-spacing;

.kpi-card {
  position: relative;

  &::after {
    background-color: transparent;
    border-radius: $border-radius-normal;
    bottom: 0;
    content: '';
    left: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    transition-duration: $transition-duration-normal;
    transition-property: background-color;
    z-index: 1;
  }

  &.loading {
    &::after {
      @include apply-color(background-color, background-elevated-3);

      pointer-events: all;
    }
  }

  > .loader-container {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
  }
}
</style>
