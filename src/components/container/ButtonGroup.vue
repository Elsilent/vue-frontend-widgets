<script lang="ts" setup>
import { toRefs } from 'vue';
import Align from './Align.vue';

const props = withDefaults(defineProps<{
    column?: boolean,
}>(), {
    column: false,
});

const { column } = toRefs(props);
</script>

<template lang="pug">
Align.button-group(:column="column")
  slot(default)
</template>

<style lang="scss">
.button-group {
  display: flex;

  &.column {
    flex-direction: column;

    > .button {
      &:not(:first-child) {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }

      &:not(:last-child) {
        border-bottom-width: 0;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }

  &:not(.column) {
    > .button {
      &:not(:first-child) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

      &:not(:last-child) {
        border-right-width: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }
}
</style>
