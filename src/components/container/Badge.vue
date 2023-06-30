<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import type { Mood } from '../../utils/enum/mood';
import type { Size } from '../../utils/enum/size';
import Info from '../label/Info.vue';

const props = withDefaults(
  defineProps<{
    mood?: Mood;
    outline?: boolean;
    size?: Size;
  }>(),
  {
    mood: 'accent',
    outline: false,
    size: 'normal',
  },
);

const { mood, outline, size } = toRefs(props);

const classes = computed(() => ({
  [`mood-background-${mood.value}`]: !outline.value,
  [`mood-border-${mood.value}`]: true,
  [`size-${size.value}`]: true,
}));
</script>

<template lang="pug">
.badge(:class='classes')
  Info(:mood="outline ? mood : 'white'")
    slot(default)
</template>

<style lang="scss" scoped>
@import '../../styles/mood.scss';
@import '../../styles/radius.scss';
@import '../../styles/spacing.scss';
@import '../../styles/transition.scss';

.badge {
  @import '../../styles/size.scss';

  @include apply-mood;

  border-radius: $border-radius-round;
  border-style: solid;
  border-width: 1px;
  display: inline-block;
  padding: $padding-size-small-3 $padding-size-normal;
  transition-duration: $transition-duration-normal;
  transition-property: background-color, border-color;
}
</style>
