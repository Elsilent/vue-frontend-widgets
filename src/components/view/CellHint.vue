<template lang="pug">
.cell-hint(
  @mouseover="() => showData()",
  @mouseout="() => visible = false",
  :class="{ visible }",
)
  span.label(
    @click.stop="() => showData()",
  ) {{ label }}
  Popover(
    :visible="visible",
    parentClass="cell",
    popoverClass="cell-hint-popover",
  )
    .popover-header(v-if="title") {{ title }}
    template(v-if="lines")
      .popover-body
        div(
          v-for='({ label, value }, lineIndex) in lines',
          :key='`line-${lineIndex}`',
        )
          b(
            important,
            size='small',
          ) {{ label }}:&nbsp;
          span(
            size='small',
          ) {{ value }}
    LoaderLineScale(v-else)
</template>

<script>
import axios from 'axios';
import numeral from 'numeral';
import Header from '../label/Header.vue';
import Info from '../label/Info.vue';
import LoaderLineScale from '../image/LoaderLineScale.vue';
import Popover from '../container/Popover.vue';

export default {
  components: {
    Header,
    Info,
    LoaderLineScale,
    Popover,
  },
  data() {
    return {
      left: undefined,
      lines: undefined,
      visible: false,
      top: undefined,
    };
  },
  methods: {
    async fetchLines() {
      window.addEventListener('mouseup', this.onPopoverBlur);

      if (this.lines) {
        return;
      }

      const data = (await axios(this.url)).data;

      this.lines = this.getLinesFromData(data);
    },
    getLinesFromData(data) {
      switch (this.format) {
        case 'distribution':
          return this.getLinesFromDistributionData(data);
        case 'rated_distribution':
          return this.getLinesFromRatedDistributionData(data);
        default:
          throw new Error(`Unsupported format: ${this.format}`);
      }
    },
    getLinesFromDistributionData(data) {
      return data.map(({ name, valueFormatted }) => ({
        label: name,
        value: valueFormatted,
      }));
    },
    getLinesFromRatedDistributionData(data) {
      return data.map(({ name, value, rate }) => ({
        label: name,
        value: `${numeral(value).format('0,0')} (${numeral(rate).format('0,0.00')}%)`,
      }));
    },
    onPopoverBlur(event) {
      if (this.$el.contains(event.target)) {
        return;
      }

      this.visible = false;

      window.removeEventListener('mouseup', this.onPopoverBlur);
    },
    showData() {
      this.visible = true;

      this.fetchLines();
    },
  },
  props: {
    format: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.cell-hint-popover {
  max-width: 15rem;
}
</style>

<style lang="scss" scoped>
@import '../../styles/colors.scss';

.cell-hint {
  display: flex;
  font-size: inherit;
  padding: 0;
  text-decoration: none;

  &:not(.visible) {
    cursor: pointer;

    > .label {
      text-decoration: underline dashed;
    }
  }
}
</style>
