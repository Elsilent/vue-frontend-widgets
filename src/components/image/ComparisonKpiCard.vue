<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import Card from '../container/Card.vue';
import Align from '../container/Align.vue';
import Info from '../label/Info.vue';
import Icon from './Icon.vue';
import format from '../../utils/format';
import type { Mood } from '../../utils/enum/mood';

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

const difference = computed(() => (value.value - comparisonValue.value) / comparisonValue.value);

const icon = computed(() => {
  if (difference.value >= 0.01) {
    return 'up-arrow-alt';
  } else if (difference.value <= -0.01) {
    return 'down-arrow-alt';
  } else {
    return 'minus';
  }
});

const mood = computed((): Mood => {
  if (difference.value >= 0.01 !== inversed.value) {
    return 'positive';
  } else if (difference.value <= -0.01 !== inversed.value) {
    return 'important';
  } else {
    return 'neutral';
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
      Info.flex-max(:mood='mood', size='large-2') {{ format.proportion(difference) }}
      Info {{ formatter(comparisonValue) }}
</template>

<style lang="scss" scoped>
@import '../../styles/spacing.scss';

@include default-spacing;
</style>
