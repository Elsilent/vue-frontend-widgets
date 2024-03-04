<template lang="pug">
.trend-chart-container(@click.stop='() => onSelectorFocus()')
  i.la.la-eye.secondary
  Popover(
    :visible="visible",
    parentClass="cell",
    popoverClass="trend-chart-popover",
  )
    Header(size='extra-small') {{ $t('pages.campaignList.popover.title') }}
    LineChart(
      v-if='values',
      :activeLines="['values']",
      :formatter='formatter',
      :moods="{ trend: trendMood, values: 'important'}",
      :values='{ trend: trendValues, values }',
      :show-info="false",
    )
      template(#x-axis-label='{ index }') {{ valueKeys[index] }}
    LoaderLineScale(v-else)
</template>

<script>
import axios from 'axios';
import Header from '../label/Header.vue';
import LineChart from '../image/LineChart.vue';
import LoaderLineScale from '../image/LoaderLineScale.vue';
import Popover from '../container/Popover.vue';

export default {
  components: {
    Header,
    LineChart,
    LoaderLineScale,
    Popover,
  },
  computed: {
    endValue() {
      if (this.values.length === 0) {
        return 0;
      }
      if (this.values.length === 1) {
        return this.values[0];
      }
      return this.values.slice(this.values.length / 2)
        .reduce((sum, value) => sum + value, 0)
          / Math.ceil(this.values.length / 2);
    },
    items() {
      return this.kinds.map((kind) => ({
        kind,
        label: `common.label.${kind}`,
      }));
    },
    startValue() {
      if (this.values.length === 0) {
        return 0;
      }
      if (this.values.length === 1) {
        return this.values[0];
      }
      return this.values.slice(0, this.values.length / 2)
        .reduce((sum, value) => sum + value, 0)
          / Math.floor(this.values.length / 2);
    },
    trendMood() {
      if (this.startValue > this.endValue) {
        return 'negative-opaque';
      } else if (this.startValue < this.endValue) {
        return 'positive-opaque';
      } else {
        return 'neutral-opaque';
      }
    },
    trendValues() {
      return new Array(this.values.length)
        .fill(0)
        .map((_, index) => this.startValue + (this.endValue - this.startValue) * index / (this.values.length - 1));
    },
  },
  data() {
    return {
      blurred: true,
      visible: false,
      valueKeys: undefined,
      values: undefined,
    };
  },
  methods: {
    async fetchValues() {
      if (this.values) {
        return;
      }

      const values = (await axios({
        url: this.url,
      })).data;

      this.valueKeys = Object.keys(values);
      this.values = Object.values(values);
    },
    onSelectorBlur() {
      this.visible = false;

      window.removeEventListener('mouseup', this.onSelectorBlur);
    },
    onSelectorFocus() {
      this.visible = true;

      window.addEventListener('mouseup', this.onSelectorBlur);

      this.fetchValues();
    },
  },
  props: {
    formatter: {
      type: Function,
      required: true,
    },
    url: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="scss">
.popover-container.trend-chart-popover {
  flex-direction: column;
  padding: 1rem 3rem;
  width: 500px;

  > .header {
    margin-top: 0.5rem;
    margin-bottom: 3rem;
  }

  > .line-chart {
    margin: 0 -1rem;
  }

  > .loader-wrapper {
    height: 300px;
    margin-bottom: 2rem;
  }
}
</style>

<style lang="scss" scoped>
@import '../../styles/colors.scss';

.trend-chart-container {
  align-items: center;
  color: $color-active;
  display: flex;
  font-size: inherit;
  justify-content: center;
  padding: 0;
  text-decoration: none;

  > i {
    cursor: pointer;
    position: absolute;
  }
}
</style>
