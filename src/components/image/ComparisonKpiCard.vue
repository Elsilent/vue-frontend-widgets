<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import Card from '../container/Card.vue';
import Align from '../container/Align.vue';
import Info from '../label/Info.vue';
import Icon from './Icon.vue';
import format from '../../utils/format';
import type { Mood } from '../../utils/enum/mood';
import { difference as getDifference } from '../../utils/difference';
import Separator from '../marker/Separator.vue';

const props = withDefaults(
  defineProps<{
    comparisonValue: number;
    formatter: (value: number) => string;
    inversed?: boolean;
    label: string;
    value: number;
  }>(),
  {
    inversed: false,
  },
);

const { comparisonValue, inversed, value } = toRefs(props);

const difference = computed(() => getDifference(value.value, comparisonValue.value));

const icon = computed(() => {
  const equalIcon = 'minus';
  const greaterIcon = 'down-arrow-alt';
  const lessIcon = 'up-arrow-alt';

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
</script>

<template lang="pug">
Card.flex-max
  Align(column)
    Align(vertical='center')
      Info.flex-max(size='large-2') {{ label }}
      Info(size='large-3') {{ formatter(value) }}
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
      Info {{ formatter(comparisonValue) }}
</template>

<style lang="scss" scoped>
@import '../../styles/spacing.scss';

@include default-spacing;
</style>
