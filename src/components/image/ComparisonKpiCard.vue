<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import Card from '../container/Card.vue';
import Align from '../container/Align.vue';
import Info from '../label/Info.vue';
import Icon from './Icon.vue';
import Loader from './Loader.vue';
import Separator from '../marker/Separator.vue';
import format from '../../utils/format';
import type { Mood } from '../../utils/enum/mood';
import { difference as getDifference } from '../../utils/difference';
import type { Difference } from '../../utils/difference';

const props = withDefaults(
  defineProps<{
    comparisonValue?: number;
    formatter: (value: number) => string;
    inversed?: boolean;
    label: string;
    value?: number;
  }>(),
  {
    inversed: false,
  },
);

const { comparisonValue, inversed, value } = toRefs(props);

const loading = computed(() =>
  value === undefined ||
  value.value === undefined ||
  comparisonValue === undefined ||
  comparisonValue.value === undefined);

const difference = computed<Difference>(() => {
  if (loading.value) {
    return 'equal';
  }

  return getDifference(value!.value!, comparisonValue!.value!);
});

const icon = computed(() => {
  const equalIcon = 'minus';
  const greaterIcon = 'up-arrow-alt';
  const lessIcon = 'down-arrow-alt';

  switch (difference.value) {
    case 'equal':
      return equalIcon;
    case 'greater-full':
      return greaterIcon;
    case 'less-full':
      return lessIcon;
  }
  if ('less' in difference.value) {
    return lessIcon;
  } else {
    return greaterIcon;
  }
});

const differenceLabel = computed<number>(() => {
  switch (difference.value) {
    case 'equal':
      return 0;
    case 'greater-full':
      return 1;
    case 'less-full':
      return -1;
  }
  if ('less' in difference.value) {
    return difference.value.less;
  } else {
    return difference.value.greater;
  }
});

const mood = computed((): Mood => {
  const equalMood: Mood = 'neutral';
  const greaterMood: Mood = inversed.value ? 'negative' : 'positive';
  const lessMood: Mood = inversed.value ? 'positive' : 'negative';

  switch (difference.value) {
    case 'equal':
      return equalMood;
    case 'greater-full':
      return greaterMood;
    case 'less-full':
      return lessMood;
  }
  if ('less' in difference.value) {
    return lessMood;
  } else {
    return greaterMood;
  }
});

const classes = computed(() => ({
  loading: loading.value,
}));
</script>

<template lang="pug">
Card.kpi-card(:class='classes')
  Align(column)
    Align(vertical='center')
      Info.flex-max(size='large-2') {{ label }}
      Info(size='large-3') {{ value === undefined ? '&nbsp;' : formatter(value) }}
    Align.spacing-small(vertical='center')
      Icon(
        :mood='mood',
        :value='icon',
        size='large-5',
      )
      Info(
        :mood='mood',
        size='large-2'
      ) {{ format.proportion(differenceLabel) }}
      Separator
      Info {{ comparisonValue === undefined ? '&nbsp;' : formatter(comparisonValue) }}
  Align.loader-container.no-spacing(
    v-if='value === undefined || comparisonValue === undefined',
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
