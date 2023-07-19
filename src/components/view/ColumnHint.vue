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

<script>
import Header from '../label/Header.vue';
import Info from '../label/Info.vue';
import Popover from '../container/Popover.vue';

export default {
  components: {
    Header,
    Info,
    Popover,
  },
  props: {
    description: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.column-hint-popover {
  max-width: 15rem;
}
</style>

<style lang="scss" scoped>
@import '../../styles/colors.scss';

.column-hint {
  cursor: pointer;
  display: flex;
  font-size: inherit;
  max-width: 30rem;
  padding: 0;
  text-decoration: none;

  > span {
    margin-right: 0.5rem;
    user-select: none;
  }
}
</style>
