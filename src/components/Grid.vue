<script lang="ts" setup>
import { computed, toRefs } from 'vue';

const props = defineProps<{
  mobileColumns?: number;
  tabletColumns?: number;
  columns: number;
}>();

const { mobileColumns, tabletColumns, columns } = toRefs(props);

const classes = computed(() => ({
  mobile: mobileColumns !== undefined && mobileColumns.value !== undefined,
  tablet: tabletColumns !== undefined && tabletColumns.value !== undefined,
}));

const style = computed(() => ({
  '--mobile-columns': mobileColumns?.value ?? tabletColumns?.value ?? columns.value,
  '--tablet-columns': tabletColumns?.value ?? mobileColumns?.value ?? columns.value,
  '--columns': columns.value,
}));
</script>

<template lang="pug">
.grid(
  :class='classes',
  :style='style',
)
  slot(default)
</template>

<style lang="scss" scoped>
@use '../styles/screen' as screen;
@use '../styles/spacing' as spacing;

.grid {
  display: grid;
  gap: spacing.$padding-size-large spacing.$padding-size-large-2;
  grid-template-columns: repeat(var(--columns), 1fr);

  @media screen and (max-width: screen.$screen-tablet-max-width) {
    grid-template-columns: repeat(var(--tablet-columns), 1fr);
  }

  @media screen and (max-width: screen.$screen-mobile-max-width) {
    grid-template-columns: repeat(var(--mobile-columns), 1fr);
  }
}
</style>
