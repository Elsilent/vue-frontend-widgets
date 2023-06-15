<script lang="ts" setup>
import { toRefs } from 'vue';
import Card from '../container/Card.vue';
import Align from '../container/Align.vue';
import Info from '../label/Info.vue';
import Icon from './Icon.vue';
import type { Mood } from '../../utils/enum/mood';

const props = defineProps<{
  formatter: (value: number) => string;
  icon: string;
  label: string;
  mood: Mood;
  value: number;
}>();

const { value } = toRefs(props);
</script>

<template lang="pug">
Card.flex-max
  Align(vertical='center')
    Align.flex-max(column)
      Info(:mood='mood', size='large-3') {{ formatter(value) }}
      Info {{ label }}
    Icon(
      :mood='mood',
      :value='icon',
      size='large-6',
    )
</template>

<style lang="scss" scoped>
@import '../../styles/spacing.scss';

@include default-spacing;
</style>
