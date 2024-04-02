<template lang="pug">
.column-hint
  i.la(
    @mouseover="() => setManualVisible(true)",
    @mouseout="() => setManualVisible(false)",
    :class="`la-${icon}`",
  )
  Popover(
    :visible="manualVisible || visible",
    parentClass="cell",
    popoverClass="column-hint-popover",
  )
    .popover-header(:style='headerStyle') {{ title }}
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
  computed: {
    headerStyle() {
      if (this.headerColor) {
        return { 'background-color': this.headerColor };
      }

      return {};
    },
  },
  data() {
    return {
      manualVisible: false,
    };
  },
  methods: {
    setManualVisible(visible) {
      this.manualVisible = visible;
    },
  },
  props: {
    // todo: refactor to support theming
    headerColor: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      default: 'question-circle',
    },
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
