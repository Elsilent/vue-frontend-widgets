<script lang="ts" setup>
import { computed, toRefs } from 'vue';

const props = withDefaults(
  defineProps<{
    column?: boolean;
    horizontal?: 'left' | 'center' | 'right';
    inline?: boolean;
    vertical?: 'bottom' | 'center' | 'top';
    wrap?: boolean;
  }>(),
  {
    column: false,
    inline: false,
    wrap: false,
  },
);

const { column, horizontal, inline, vertical, wrap } = toRefs(props);

const classes = computed(() => ({
  column: column.value,
  [`horizontal-${horizontal?.value}`]: horizontal?.value,
  inline: inline.value,
  [`vertical-${vertical?.value}`]: vertical?.value,
  wrap: wrap.value,
}));
</script>

<template lang="pug">
.align(
  :class='classes',
)
  slot(default)
</template>

<style lang="scss" scoped>
.align {
  &.inline {
    display: inline-flex;
  }

  &.column {
    flex-direction: column;

    &.horizontal-left {
      align-items: flex-start;
    }

    &.horizontal-center {
      align-items: center;
    }

    &.horizontal-right {
      align-items: flex-end;
    }

    &.vertical-top {
      justify-content: flex-start;
    }

    &.vertical-center {
      justify-content: center;
    }

    &.vertical-bottom {
      justify-content: flex-end;
    }
  }

  &:not(.inline) {
    display: flex;
  }

  &:not(.column) {
    &.horizontal-left {
      justify-content: flex-start;
    }

    &.horizontal-center {
      justify-content: center;
    }

    &.horizontal-right {
      justify-content: flex-end;
    }

    &.vertical-top {
      align-items: flex-start;
    }

    &.vertical-center {
      align-items: center;
    }

    &.vertical-bottom {
      align-items: flex-end;
    }
  }

  &.wrap {
    flex-wrap: wrap;
  }
}
</style>
