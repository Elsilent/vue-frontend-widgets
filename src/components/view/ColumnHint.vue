<script lang="ts" setup>
import { toRefs, ref } from 'vue';
import Tooltip from '../container/Tooltip.vue';

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
const iconRef = ref<HTMLElement | undefined>();
</script>

<template lang="pug">
.column-hint
  i.la.la-question-circle(ref="iconRef")
  Tooltip(
    :title="title"
    :content="description"
    :show-arrow="false"
    :persistent="false"
    :offset="0"
    :visible="visible"
    :virtual-ref="iconRef?.closest('.cell')"
    virtual-triggering
    width="15rem"
  )
</template>

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
