<script lang="ts" setup>
import { toRefs } from 'vue';
import Popover from '../container/Popover.vue';

const props = withDefaults(
  defineProps<{
    description?: string;
    title?: string;
    visible?: boolean;
  }>(),
  {
    visible: false,
  },
);

const { description, title, visible } = toRefs(props);
</script>

<template lang="pug">
.column-hint
  i.la.la-question-circle
  Popover(
    :visible="visible",
    parentClass="cell",
    popoverClass="column-hint-popover",
  )
    .popover-header {{ title }}
    .popover-body {{ description }}
</template>

<style lang="scss">
.column-hint-popover {
  max-width: 15rem;
}
</style>

<style lang="scss" scoped>
.column-hint {
  cursor: pointer;
  display: flex;
  max-width: 30rem;
  padding: 0;
  text-decoration: none;

  > span {
    margin-right: 0.5rem;
    user-select: none;
  }
}
</style>
