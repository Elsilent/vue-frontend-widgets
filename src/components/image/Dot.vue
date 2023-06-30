<script lang="ts" setup>
import type { Mood } from '../../utils/enum/mood';
import { computed, toRefs } from 'vue';

const props = withDefaults(defineProps<{
  mood?: Mood,
}>(), {
  mood: 'accent',
});

const { mood } = toRefs(props);

const classes = computed(() => ({
  [`mood-background-${mood.value}`]: true,
}))
</script>

<template lang="pug">
.dot(:class='classes')
</template>

<style lang="scss">
@import '../../styles/mood.scss';
@import '../../styles/spacing.scss';

.dot {
  @include apply-mood;

  border-radius: $padding-size-small;
  content: '';
  display: inline-block;
  margin-right: $padding-size-small;
  height: $padding-size-small;
  width: $padding-size-small;
}
</style>
