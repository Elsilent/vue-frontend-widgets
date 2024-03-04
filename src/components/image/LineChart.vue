<template lang="pug">
.line-chart(
  :class="{ 'min-height': minHeight }",
  :style="lineChartStyle",
)
  Info.y-axis-title(
    v-if="yAxisLabels",
    important,
    size="small",
  ) {{ yAxisLabels[0] }}
  .y-axis-labels(v-if="normalize")
    .axis-label(
      v-for="(label, index) in axisLabels[valueKeys[0]]",
      :key="`y-axis-label-${index}`",
    ) {{ formatValue(label, valueKeys[0]) }}
  .y-axis-labels(v-else)
    .axis-label(
      v-for="(label, index) in maxAxisLabels",
      :key="`y-axis-label-${index}`",
    ) {{ formatValue(label, valueKeys[0]) }}
  .chart-contents(ref="chartContents")
    .chart-grid
      .axis-line(
        v-for="(_, index) in axisLabels[valueKeys[0]].slice(1)"
        :key="`axis-line-${index}`",
      )
    .chart-popovers(:style="linesStyle")
      template(v-for="index in totalValueCount")
        .chart-popover-separator(
          v-if="index > 1",
          :key="`popover-separator-${index}`"
        )
        .chart-popover-container(
          :class="{ visible: hovers.includes(index - 1) }",
          :key="`popover-${index}`"
        )
          .chart-popover-line(:style="{ height: `${100 - valueHeight(index - 1)}%` }")
          .chart-popover(:style="{ bottom: `${100 - valueHeight(index - 1)}%` }")
            slot(
              name="popover"
              :index='index - 1',
              :values='valueKeys.map((key) => Object.values(values[key])[index - 1])',
            )
              .values
                template(v-for="(singleLineLabels, lineIndex) in lineLabels")
                  Info(
                    v-if="!activeLines || activeLines.includes(valueKeys[lineIndex]) && index <= singleLineLabels.length",
                    :key="`popover-value-${lineIndex}`",
                    :class="getMoodClasses(moods[valueKeys[lineIndex]])",
                    important,
                    noMood,
                  ) {{ formatValue(values[valueKeys[lineIndex]][singleLineLabels[index - 1]], valueKeys[lineIndex]) }}
              slot(
                name="popover-after-values",
                :index='index - 1',
                :values='valueKeys.map((key) => Object.values(values[key])[index])',
              )
    .chart-lines(:style="linesStyle")
      svg(
        v-for="(line, lineLabel) in values",
        :class="getMoodClasses(moods[lineLabel], [])",
        :key="lineLabel",
        height="100%",
        preserveAspectRatio="none",
        width="100%",
        viewBox="0 0 100 100",
      )
        path(
          :d="chartPath(line, lineLabel)",
          :stroke-dasharray="getMoodComponents(moods[lineLabel], 2).attributes.includes('dashed') ? '6 4' : undefined",
          fill="none",
          stroke="currentColor",
          stroke-width="2px",
          vector-effect="non-scaling-stroke",
        )
    .chart-points(:style="linesStyle")
      template(v-for="(lineValues, lineLabel) in values")
        template(v-if='!activeLines || activeLines.includes(lineLabel)')
          template(
            v-for="(value, index) in lineValues"
          )
            .chart-point(
              :class="{ ...getMoodClasses(moods[lineLabel]), visible: hovers.includes(index) }",
              :key="`${lineLabel}-${index}`",
              :style="{ left: `${getPointLeftPosition(index)}%`, top: `${getPointTopPosition(value, lineLabel)}%` }"
            )
    .chart-hover-sections
      .chart-hover-section(
        v-for="index in totalValueCount",
        :key="`chart-hover-section-${index}`",
        @mouseover="setHover(index - 1, true)",
        @mouseout="setHover(index - 1, false)",
      )
    .x-axis-labels(
      v-if="!noXAxisLabels",
      :style="xAxisLabelsStyle",
    )
      .x-axis-label-group-container(
        v-if="showInfo"
        v-for="index in totalValueCount",
        :key="`x-axis-label-group-${index}`",
        :class="{ visible: hovers.includes(index - 1) }",
        :style="{ left: `${getPointLeftPosition(index - 1)}%` }",
      )
        //- translateX is calculated by special formula, depending on angle,
            to place whole labels, but only under the x-axis
        .x-axis-label-group(
          ref="xAxisLabelGroup",
          :style="{ transform: `rotate(-${xAxisLabelRotate}deg) translateX(-${ Math.trunc(8.3 * Math.pow(xAxisLabelRotate, 0.4)) }%)` }",
        )
          slot(name="xAxis", :valueKey="index - 1")
            template(v-for="lineIndex in lineCount")
              Info.x-axis-label(
                v-if="!activeLines || activeLines.includes(valueKeys[lineIndex - 1])",
                :class="{ ...getMoodClasses(moods[valueKeys[lineIndex - 1]]), 'has-label': index <= lineLabels[lineIndex - 1].length }",
                :key="`line-${lineIndex}`",
                important,
                noMood,
                size="small",
              )
                slot(name="xAxisLabel", :index="index - 1", :lineIndex="lineIndex - 1")
  .y-axis-labels(v-if="showSecondaryYAxis")
    .axis-label(
      v-for="(label, index) in axisLabels[valueKeys[1]]",
      :key="`y-secondary-axis-label-${index}`",
    ) {{ formatValue(label, valueKeys[1]) }}
  Info.y-axis-title(
    v-if="showSecondaryYAxis && yAxisLabels",
    important,
    size="small",
  ) {{ yAxisLabels[1] }}
</template>

<script>
import Header from '../label/Header.vue';
import Info from '../label/Info.vue';

const supportedMoodAttributes = [
  'dashed',
  'opaque',
];

export default {
  components: {
    Header,
    Info,
  },
  computed: {
    axisLabels() {
      const axisCount = this.yAxisLabels
        ? this.yAxisLabels.length
        : this.valueKeys.length;

      const axisValues = new Array(axisCount).fill(null).map(() => []);

      for (let index = 0; index < this.lineCount; index++) {
        axisValues[index % axisCount].push(...this.values[this.valueKeys[index]]);
      }

      return this.valueKeys.reduce(
        (axisLabels, key, index) => {
          const values = axisValues[index % axisCount];
          const min = Math.min(...values, 0);
          const max = Math.max(...values);
          const scope = max - min;
          const minVisibleScale = Math.pow(10, Math.floor(Math.abs(scope)).toString().length - 1);
          const scale = Math.ceil(scope / minVisibleScale / (this.axis - 1)) * minVisibleScale;

          const labels = [min];

          for (let i = 1; i < this.axis; i++) {
            labels.push(labels[labels.length - 1] + scale);
          }

          axisLabels[key] = labels.reverse();

          return axisLabels;
        },
        {},
      );
    },
    lineCount() {
      return Object.keys(this.values).length;
    },
    lineChartStyle() {
      return {
        'margin-bottom': this.xAxisLabelsHeight === undefined
          ? undefined
          : `${this.xAxisLabelsHeight}px`,
      };
    },
    lineLabels() {
      return Object.values(this.values).map((line) => Object.keys(line));
    },
    linesStyle() {
      const sectionCount = this.totalValueCount;

      const sectionSize = 100 / sectionCount;

      const sectionOffset = `${sectionSize / 2}%`;

      return {
        left: sectionOffset,
        right: sectionOffset,
      };
    },
    maxAxisLabels() {
      let maxKey = this.valueKeys[0];

      for (let i = 1; i < this.valueKeys.length; i++) {
        if (this.axisLabels[this.valueKeys[i]][0] > this.axisLabels[maxKey][0]) {
          maxKey = this.valueKeys[i];
        }
      }

      return this.axisLabels[maxKey];
    },
    totalValueCount() {
      return Math.max(...Object.values(this.values).map((v) => v.length));
    },
    valueKeys() {
      return Object.keys(this.values);
    },
    xAxisLabelsStyle() {
      const sectionCount = this.totalValueCount;
      const sectionSize = 100 / sectionCount;
      const sectionOffset = `${sectionSize / 2}%`;

      return {
        height: this.xAxisLabelsHeight === undefined
          ? undefined
          : `${this.xAxisLabelsHeight}px`,
        'margin-left': sectionOffset,
        'margin-right': sectionOffset,
      };
    },
    yAxisLabels() {
      return this.yAxisTitles
        ? Object.values(this.yAxisTitles)
        : undefined;
    },
  },
  data() {
    return {
      chartLines(values) {
        return values.slice(1).map((value, index) => {
          const previousValue = values[index];

          return [previousValue, value];
        });
      },
      chartPath(values, lineLabel) {
        if (values.length === 0) {
          return '';
        }

        const points = values.map((value, index) => ({
          left: this.getPointLeftPosition(index),
          top: this.getPointTopPosition(value, lineLabel),
        }));

        const path = [`M ${points[0].left} ${points[0].top}`];

        const makeLine = (point1, point2) => ({
          length: Math.hypot(point2.top - point1.top, point2.left - point1.left),
          angle: Math.atan2(point2.top - point1.top, point2.left - point1.left),
        });

        const controlPoint = (currentPoint, previous, next, reversed) => {
          const previousPoint = previous ?? currentPoint;
          const nextPoint = next ?? currentPoint;

          const line = makeLine(previousPoint, nextPoint);

          let angle = line.angle;

          if (reversed) {
            angle += Math.PI;
          }

          const length = line.length * this.smoothing;

          return {
            left: currentPoint.left + Math.cos(angle) * length,
            top: currentPoint.top + Math.sin(angle) * length,
          };
        }

        points.slice(1).forEach((point, index) => {
          const startControlPoint = controlPoint(points[index], points[index - 1], point, false);
          const endControlPoint = controlPoint(point, points[index], points[index + 2], true);

          path.push(`C ${startControlPoint.left},${startControlPoint.top} ${endControlPoint.left},${endControlPoint.top} ${point.left},${point.top}`);
        });

        return path.join(' ');
      },
      hovers: [],
      resizeObserver: new ResizeObserver(() => {
        this.updateXAxisLabelsStyle();
      }),
      xAxisLabelRotate: 0,
      xAxisLabelsHeight: undefined,
      valueHeight: (index) => {
        for (const [lineLabel, labelValues] of Object.entries(this.values)) {
          if (Object.keys(labelValues).length <= index) {
            return this.getPointTopPosition(Object.values(labelValues)[index], lineLabel);
          }
        }

        return Math.min(
          ...Object.entries(this.values)
              .map(([lineLabel, labelValues]) => this.getPointTopPosition(Object.values(labelValues)[index], lineLabel)),
        );
      },
    };
  },
  destroyed() {
    this.resizeObserver.disconnect();
  },
  methods: {
    formatValue(value, lineLabel) {
      if (typeof this.formatter === 'function') {
        return this.formatter(value);
      } else {
        return this.formatter[lineLabel](value);
      }
    },
    getMoodClasses(mood, attributes) {
      if (attributes === undefined) {
        attributes = supportedMoodAttributes;
      }

      const components = this.getMoodComponents(mood);

      return attributes.reduce(
        (classes, attribute) => ({
          ...classes,
          [attribute]: components.attributes.includes(attribute),
        }),
        {
          [`mood-${components.mood}`]: true,
        },
      );
    },
    getMoodComponents(mood, a) {
      let normalMood = mood;
      const attributes = [];

      while (true) {
        let hasAttributes = false;

        for (const attribute of supportedMoodAttributes) {
          if (normalMood.endsWith(`-${attribute}`)) {
            attributes.push(attribute);
            normalMood = normalMood.substring(0, normalMood.length - attribute.length - 1);
            hasAttributes = true;
          }
        }

        if (!hasAttributes) {
          break;
        }
      }

      return {
        attributes,
        mood: normalMood,
      };
    },
    getPointLeftPosition(index) {
      return this.totalValueCount === 1 ? 50 : (index * 100 / (this.totalValueCount - 1))
    },
    getPointTopPosition(value, lineLabel) {
      const [minValue, maxValue] = (() => {
        if (this.normalize) {
          return [
            this.axisLabels[lineLabel][this.axisLabels[lineLabel].length - 1],
            this.axisLabels[lineLabel][0],
          ];
        } else {
          return [
            Math.min(...Object.values(this.axisLabels).map((labels) => labels[labels.length - 1])),
            Math.max(...Object.values(this.axisLabels).map((labels) => labels[0])),
          ];
        }
      })();

      if (maxValue - minValue <= 0.01) {
        return 100;
      }

      return Math.min(100, Math.max(0, (maxValue - value) * 100 / (maxValue - minValue)));
    },
    getValueHeight(index) {
      for (const [lineLabel, lineValues] of Object.entries(this.values)) {
        if (Object.keys(lineValues).length <= index) {
          return this.getPointTopPosition(Object.values(lineValues)[index], lineLabel);
        }
      }

      return Math.min(
        ...Object.entries(this.values)
            .map(([lineLabel, lineValues]) => this.getPointTopPosition(Object.values(lineValues)[index], lineLabel)),
      );
    },
    setHover(index, hover) {
      if (hover) {
        this.hovers.push(index);
      } else {
        const hoverIndex = this.hovers.indexOf(index);

        if (hoverIndex >= 0) {
          this.hovers.splice(hoverIndex, 1);
        }
      }
    },
    updateXAxisLabelsStyle() {
      if (!this.$refs.chartContents || !this.$refs.xAxisLabelGroup) {
        return;
      }

      const maxWidth = Math.max(...this.$refs.xAxisLabelGroup.map((el) => el.clientWidth));
      const maxHeight = Math.max(...this.$refs.xAxisLabelGroup.map((el) => el.clientHeight));

      if (this.$refs.chartContents.clientWidth > this.totalValueCount * maxWidth) {
        this.xAxisLabelRotate = 0;
      } else if (this.$refs.chartContents.clientWidth < this.totalValueCount * maxHeight) {
        this.xAxisLabelRotate = 90;
      } else {
        // Treat full label width as a hypot, chart width as one of the sides
        const hypot = this.totalValueCount * maxWidth;
        this.xAxisLabelRotate = Math.cos(this.$refs.chartContents.clientWidth / hypot) * 180 / Math.PI;
      }

      const rotateRad = this.xAxisLabelRotate * Math.PI / 180;

      this.xAxisLabelsHeight = maxWidth * Math.sin(rotateRad) + maxHeight * Math.cos(rotateRad);
    },
  },
  mounted() {
    this.updateXAxisLabelsStyle();

    this.$watch(
      () => this.$refs.chartContents,
      () => {
        this.resizeObserver.disconnect();

        if (this.$refs.chartContents) {
          this.resizeObserver.observe(this.$refs.chartContents);
        }
      },
    );
  },
  props: {
    activeLines: {
      type: Array,
      required: false,
    },
    axis: {
      type: Number,
      default: 4,
    },
    formatter: {
      type: [Array, Function, Object],
      required: true,
    },
    minHeight: {
      type: Boolean,
      default: false,
    },
    moods: {
      type: [Array, Object],
      required: true,
    },
    noXAxisLabels: {
      type: Boolean,
      default: false,
    },
    normalize: {
      type: Boolean,
      default: false,
    },
    showSecondaryYAxis: {
      type: Boolean,
      default: false,
    },
    smoothing: {
      type: Number,
      default: 0.15,
    },
    values: {
      type: [Array, Object],
      required: true,
    },
    yAxisTitles: {
      type: Array,
      required: false,
    },
    showInfo: {
      type: Boolean,
      default: true,
    }
  },
  watch: {
    values() {
      this.updateXAxisLabelsStyle();
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../styles/colors.scss';

$-mood-colors: (
  important: $color-important,
  important-alt: $color-important-alt,
  negative: $color-negative,
  neutral: $color-neutral,
  positive: $color-positive,
);

.line-chart {
  display: flex;
  margin-bottom: 2rem;

  &.min-height {
    height: calc(100% - 2rem);
    min-height: 300px;
  }

  &:not(.min-height) {
    height: 300px;
  }

  > .y-axis-labels {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    position: relative;

    &:nth-child(2) {
      margin-right: 1rem;

      > .axis-label {
        justify-content: flex-end;
      }
    }

    &:nth-last-child(2) {
      margin-left: 1rem;

      > .axis-label {
        justify-content: flex-end;
      }
    }

    > .axis-label {
        align-items: flex-end;
      display: flex;
      flex: 1;
      font-size: 0.875rem;
      font-weight: 600;
      justify-content: flex-end;
      position: relative;
      top: 0.65rem;
      white-space: nowrap;

      &:first-child {
        position: absolute;
        top: -0.65rem;
      }
    }
  }

  > .y-axis-title {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    writing-mode: vertical-rl;

    &:first-child {
      transform: rotate(180deg);
    }
  }

  > .chart-contents {
    flex: 1;
    margin-bottom: 2rem;
    position: relative;

    &::before {
      background: rgba(black, 0.1);
      content: '';
      display: flex;
      height: 2px;
      position: absolute;
      width: 100%;
      top: -2px;
    }

    > .chart-grid {
      bottom: 0;
      display: flex;
      flex-direction: column;
      height: 100%;
      left: 0;
      right: 0;
      text-align: right;
      top: 0;

      > .axis-line {
        align-items: flex-end;
        display: flex;
        flex: 1;

        &::after {
          background: rgba(black, 0.1);
          content: '';
          display: flex;
          height: 2px;
          width: 100%;
        }
      }
    }

    > .chart-lines {
      bottom: 0;
      padding-left: 1rem;
      pointer-events: none;
      position: absolute;
      top: 0;

      > svg {
        overflow: visible;
        height: 100%;
        left: 0;
        position: absolute;
        top: -1px;
        width: 100%;
      }

      @each $-mood, $-color in $-mood-colors {
        > .mood-#{$-mood} {
          &.opaque {
            color: mix($-color, white, 60%);
          }

          &:not(.opaque) {
            color: $-color;
          }
        }
      }
    }

    > .chart-popovers {
      display: flex;
      height: 100%;
      pointer-events: none;
      position: absolute;
      top: 0;

      > .chart-popover-separator {
        flex: 1;
      }
      
      > .chart-popover-container {
        align-items: center;
        display: flex;
        flex-direction: column;
        height: 100%;
        position: relative;

        &.visible {
          > .chart-popover-line {
            opacity: 1;
          }

          > .chart-popover {
            opacity: 1;
            transform: none;
          }
        }

        > .chart-popover-line {
          position: absolute;
          border-right: 2px dashed rgba(black, 0.2);
          bottom: 0;
          margin-left: -2px;
          opacity: 0;
          transition: opacity 0.2s;
        }

        > .chart-popover {
          align-items: center;
          background: #eaecf0;
          border-radius: 0.5rem;
          box-shadow: 0 1px 15px 1px rgba(#3e396b, 0.07);
          display: flex;
          flex-direction: column;
          margin-bottom: 1.15rem;
          margin-left: -2px;
          opacity: 0;
          padding: 1rem;
          position: absolute;
          transform: translateY(5px);
          transition: transform 0.1s, opacity 0.2s;
          z-index: 1000;

          &::before {
            border: 0.5rem solid transparent;
            border-top-color: #eaecf0;
            content: '';
            position: absolute;
            top: 100%;
          }

          > .values {
            display: flex;
            width: 100%;

            > .info-label {
              align-items: center;
              color: $color-neutral;
              display: flex;
              flex: 1;
              white-space: nowrap;

              &::before {
                border-radius: 10px;
                content: '';
                height: 10px;
                margin-right: 0.5rem;
                width: 10px;
              }

              @each $-mood, $-color in $-mood-colors {
                &.mood-#{$-mood} {
                  &.dashed {
                    &::before {
                      background: white;
                      box-shadow: inset 0 0 0 0.1rem $-color;
                    }
                  }

                  &:not(.dashed) {
                    &::before {
                      background: $-color;
                    }
                  }

                  &.opaque {
                    &::before {
                      background: mix($-color, white, 60%);
                    }
                  }
                }
              }

              &:not(:first-child) {
                margin-left: 1rem;
              }
            }
          }
        }
      }
    }

    > .chart-points {
      height: 100%;
      margin-bottom: 2rem;
      pointer-events: none;
      position: absolute;
      top: 0;

      > .chart-point {
        background: white;
        border: 2px solid;
        border-radius: 16px;
        box-sizing: content-box;
        height: 8px;
        margin-left: -7px;
        margin-top: -7px;
        position: absolute;
        width: 8px;
        transform: scale(60%);
        transition: box-shadow 0.2s, height 0.1s, margin-left 0.1s, margin-top 0.1s, transform 0.1s, width 0.1s;

        @each $-mood, $-color in $-mood-colors {
          &.mood-#{$-mood} {
            border-color: $-color;

            &:not(.dashed) {
              background: $-color;
            }

            &.opaque {
              border-color: mix($-color, white, 60%);
            }
          }
        }

        &.visible {
          transform: scale(100%);

          @each $-mood, $-color in $-mood-colors {
            &.mood-#{$-mood} {
              &.opaque {
                box-shadow: 0 0 2px $-color;
              }

              &:not(.opaque) {
                box-shadow: 0 0 2px mix($-color, white, 60%);
              }
            }
          }
        }
      }
    }

    > .chart-hover-sections {
      bottom: 0;
      display: flex;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;

      > .chart-hover-section {
        flex: 1;

        &:first-child:not(:last-child),
        &:last-child:not(:first-child) {
          flex: 0.5;
        }
      }
    }

    > .x-axis-labels {
      display: flex;
      position: relative;

      > .x-axis-label-group-container {
        flex: 1;
        margin-top: 0.125rem;
        position: absolute;
        z-index: 1000;

        &:first-child(:not(:last-child)),
        &:last-child(:not(:first-child)) {
          flex: 0.5;
        }

        &.active {
          > .xaxis-label-group {
            background: #eaecf0;
            box-shadow: 0 1px 15px 1px rgba(#3e396b, 0.07);
          }
        }

        > .x-axis-label-group {
          align-items: center;
          border-radius: 0.5rem;
          display: flex;
          flex-direction: column;
          left: -50%;
          margin-left: -2px;
          padding: 0.25rem 0.5rem;
          position: relative;
          transition: background-color 0.3s, box-shadow 0.3s;

          > .x-axis-label {
            align-items: center;
            color: $color-neutral;
            display: flex;
            white-space: nowrap;

            &.has-label::before {
              border-radius: 10px;
              content: '';
              display: block;
              height: 10px;
              margin-right: 0.5rem;
              width: 10px;
            }

            @each $-mood, $-color in $-mood-colors {
              &.mood-#{$-mood} {
                &.dashed {
                  &::before {
                    background: white;
                    box-shadow: inset 0 0 0 0.075rem $-color;
                  }
                }

                &:not(.dashed) {
                  &::before {
                    background: $-color;
                  }
                }

                &.opaque {
                  &::before {
                    background: mix($-color, white, 60%);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
