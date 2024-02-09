<script lang="ts" setup>
import {
  computed,
  onMounted,
  onUnmounted,
  ref,
  toRefs,
  watch,
  type ComponentPublicInstance,
} from 'vue';
import type { Mood } from '../../utils/enum/mood';
import type { Style } from '../../utils/type/component/image/line_bar_chart';
import Info from '../label/Info.vue';

interface Point {
  left: number;
  top: number;
}

const supportedMoodAttributes = ['dashed', 'opaque'];

const props = withDefaults(
  defineProps<{
    activeLines?: (number | string | symbol)[];
    axis?: number;
    barSumValues?: Record<number | string | symbol, number>;
    formatters: Record<number | string | symbol, (value: number) => string>;
    minHeight?: boolean;
    moods: Record<number | string | symbol, { chart: number } | { mood: Mood }>;
    noXAxisLabels?: boolean;
    normalize?: boolean;
    showSecondaryYAxis?: boolean;
    smoothing?: number;
    styles: Record<number | string | symbol, Style>;
    values: Record<number | string | symbol, Record<number | string | symbol, number>>;
    yAxisTitles?: string[];
  }>(),
  {
    axis: 4,
    minHeight: false,
    noXAxisLabels: false,
    normalize: false,
    showSecondaryYAxis: false,
    smoothing: 0.15,
  },
);

const {
  activeLines,
  axis,
  barSumValues,
  formatters,
  minHeight,
  moods,
  noXAxisLabels,
  normalize,
  showSecondaryYAxis,
  smoothing,
  styles,
  values,
  yAxisTitles,
} = toRefs(props);

const lineLabels = computed(() => Object.values(values.value).map((line) => Object.keys(line)));

const axisLabels = computed(() => {
  const axisValues: Record<Style, number[]> = {
    bar: [],
    line: [],
  };

  const barAxisValues: Record<number | string | symbol, number> = {};

  for (let index = 0; index < lineCount.value; index++) {
    switch (styles.value[valueKeys.value[index]]) {
      case 'bar':
        for (const lineLabel of lineLabels.value[index]) {
          if (!(lineLabel in barAxisValues)) {
            barAxisValues[lineLabel] = 0;
          }

          barAxisValues[lineLabel] += values.value[valueKeys.value[index]][lineLabel];
        }
        break;
      case 'line':
        axisValues.line.push(...Object.values(values.value[valueKeys.value[index]]));
        break;
    }
  }

  axisValues.bar = Object.values(barAxisValues);

  for (let index = 0; index < lineCount.value; index++) {
    if (styles.value[valueKeys.value[index]] !== 'line') {
      continue;
    }

    axisValues.line.push(...Object.values(values.value[valueKeys.value[index]]));
  }

  const axisLabels: Record<Style, Record<number | string | symbol, number[]>> = {
    bar: {},
    line: {},
  };

  const labelStyles: Style[] = ['bar', 'line'];

  for (const style of labelStyles) {
    axisLabels[style] = valueKeys.value
      .filter((key) => styles.value[key] === style)
      .reduce((axisLabels, key) => {
        const values = axisValues[style];
        const min = Math.min(...values, 0);
        const max = Math.max(...values);
        const scope = max - min;
        const scaleCoef = Math.pow(10, Math.ceil(Math.abs(scope)).toString().length - 2);
        const firstAxisRawValue = scope / (axis.value - 1);
        const scale = Math.ceil(firstAxisRawValue / scaleCoef) * scaleCoef;

        const labels = [min];

        for (let i = 1; i < axis.value; i++) {
          labels.push(labels[labels.length - 1] + scale);
        }

        axisLabels[key] = labels.reverse();

        return axisLabels;
      }, {} as Record<number | string | symbol, number[]>);
  }

  return axisLabels;
});

const barFormatter = computed(() => {
  for (const [key, formatter] of Object.entries(formatters.value)) {
    if (styles.value[key] === 'bar') {
      return formatter;
    }
  }

  return undefined;
});

const barValues = computed(() => {
  const invertedValues: Record<
    number | string | symbol,
    Record<number | string | symbol, number>
  > = {};

  for (const [key, row] of Object.entries(values.value)) {
    if (styles.value[key] === 'bar') {
      for (const [rowKey, value] of Object.entries(row)) {
        if (!(rowKey in invertedValues)) {
          invertedValues[rowKey] = {};
        }

        invertedValues[rowKey][key] = value;
      }
    }
  }

  return invertedValues;
});

const lineCount = computed(() => Object.keys(values.value).length);

const maxAxisLabels = computed(() => {
  const labelStyles: Style[] = ['bar', 'line'];

  const maxAxisLabels: Record<Style, number[]> = {
    bar: [],
    line: [],
  };

  for (const style of labelStyles) {
    let maxKey = valueKeys.value[0];

    for (let i = 1; i < valueKeys.value.length; i++) {
      if (!(valueKeys.value[i] in axisLabels.value[style])) {
        continue;
      }

      if (
        !(maxKey in axisLabels.value[style]) ||
        axisLabels.value[style][valueKeys.value[i]][0] > axisLabels.value[style][maxKey][0]
      ) {
        maxKey = valueKeys.value[i];
      }
    }

    maxAxisLabels[style] = axisLabels.value[style][maxKey];
  }

  return maxAxisLabels;
});

const totalValueCount = computed(() => {
  return Math.max(...Object.values(values.value).map((v) => Object.values(v).length));
});

const valueKeys = computed<(number | symbol | string)[]>(() => Object.keys(values.value));

const yAxisLabels = computed(() =>
  yAxisTitles?.value ? Object.values(yAxisTitles.value) : undefined,
);

const chartPath = (
  values: Record<number | string | symbol, number>,
  lineLabel: number | string | symbol,
) => {
  if (values.length === 0) {
    return '';
  }

  const points = Object.entries(values).map(([key, value]) => ({
    left: getPointLeftPosition(key),
    top: getPointTopPosition(value, lineLabel),
  }));

  const path = [`M ${points[0].left} ${points[0].top}`];

  const makeLine = (point1: Point, point2: Point) => ({
    length: Math.hypot(point2.top - point1.top, point2.left - point1.left),
    angle: Math.atan2(point2.top - point1.top, point2.left - point1.left),
  });

  const controlPoint = (currentPoint: Point, previous: Point, next: Point, reversed: boolean) => {
    const previousPoint = previous ?? currentPoint;
    const nextPoint = next ?? currentPoint;

    const line = makeLine(previousPoint, nextPoint);

    let angle = line.angle;

    if (reversed) {
      angle += Math.PI;
    }

    const length = line.length * smoothing.value;

    return {
      left: currentPoint.left + Math.cos(angle) * length,
      top: currentPoint.top + Math.sin(angle) * length,
    };
  };

  points.slice(1).forEach((point, index) => {
    const startControlPoint = controlPoint(points[index], points[index - 1], point, false);
    const endControlPoint = controlPoint(point, points[index], points[index + 2], true);

    path.push(
      `C ${startControlPoint.left},${startControlPoint.top} ${endControlPoint.left},${endControlPoint.top} ${point.left},${point.top}`,
    );
  });

  return path.join(' ');
};

const linesStyle = computed(() => {
  const barCount = Object.keys(barValues.value).length;

  const barSize = 100 / barCount;

  const barOffset = `${barSize / 2}%`;

  return {
    left: barOffset,
    right: barOffset,
  };
});

const xAxisLabelsHeight = ref<number | undefined>();

const xAxisLabelGroup = ref<HTMLElement[]>([]);

const setXAxisLabelGroup = (index: number, element: Element | ComponentPublicInstance | null) => {
  if (element) {
    xAxisLabelGroup.value[index] = element as HTMLElement;
  }
};

const chartContents = ref<HTMLElement | undefined>();

const xAxisLabelRotate = ref<number>(0);

const updateXAxisLabelsStyle = () => {
  if (!chartContents.value) {
    return;
  }

  const maxWidth = Math.max(...xAxisLabelGroup.value.map((el) => el.clientWidth));
  const maxHeight = Math.max(...xAxisLabelGroup.value.map((el) => el.clientHeight));

  if (chartContents.value.clientWidth > totalValueCount.value * maxWidth) {
    xAxisLabelRotate.value = 0;
  } else if (chartContents.value.clientWidth < totalValueCount.value * maxHeight) {
    xAxisLabelRotate.value = 90;
  } else {
    // Treat full label width as a hypot, chart width as one of the sides
    const hypot = totalValueCount.value * maxWidth;
    xAxisLabelRotate.value = (Math.cos(chartContents.value.clientWidth / hypot) * 180) / Math.PI;
  }

  const rotateRad = (xAxisLabelRotate.value * Math.PI) / 180;

  xAxisLabelsHeight.value = maxWidth * Math.sin(rotateRad) + maxHeight * Math.cos(rotateRad);
};

const lineChartStyle = computed(() => ({
  'margin-bottom':
    xAxisLabelsHeight.value === undefined ? undefined : `${xAxisLabelsHeight.value}px`,
}));

const xAxisLabelsStyle = computed(() => {
  const barCount = Object.keys(barValues.value).length;

  const barSize = 100 / barCount;

  const barOffset = `${barSize / 2}%`;

  return {
    height: xAxisLabelsHeight.value === undefined ? undefined : `${xAxisLabelsHeight.value}px`,
    'margin-left': barOffset,
    'margin-right': barOffset,
  };
});

const hovers = ref<(number | string | symbol)[]>([]);

const valueHeight = (index: number) => {
  for (const [lineLabel, labelValues] of Object.entries(values.value)) {
    if (styles.value[lineLabel] === 'bar') {
      continue;
    }

    if (Object.keys(labelValues).length <= index) {
      return getPointTopPosition(Object.values(labelValues)[index], lineLabel);
    }
  }

  return Math.min(
    ...Object.entries(values.value)
      .filter(([lineLabel]) => styles.value[lineLabel] !== 'bar')
      .map(([lineLabel, labelValues]) =>
        getPointTopPosition(Object.values(labelValues)[index], lineLabel),
      ),
  );
};

const getMoodClasses = (key: number | string | symbol, attributes?: string[]) => {
  const mood = moods.value[key];

  const moodAttributes = attributes ?? supportedMoodAttributes;

  const components = getMoodComponents(mood);

  return moodAttributes.reduce(
    (classes, attribute) => ({
      ...classes,
      [attribute]: components.attributes.includes(attribute),
    }),
    {
      [`chart-${components.chart}`]: !!components.chart,
      [`mood-${components.mood}`]: !!components.mood,
    } as Record<string, boolean>,
  );
};

const getMoodComponents = (mood: { mood: Mood } | { chart: number }) => {
  let hasAttributes = false;
  let normalMood = 'mood' in mood ? mood.mood : undefined;
  let normalChart = 'chart' in mood ? mood.chart.toString() : undefined;
  const attributes: string[] = [];

  do {
    for (const attribute of supportedMoodAttributes) {
      if ((normalMood ?? normalChart)!.endsWith(`-${attribute}`)) {
        attributes.push(attribute);

        if (normalMood) {
          normalMood = normalMood.substring(0, normalMood.length - attribute.length - 1) as Mood;
        } else if (normalChart) {
          normalChart = normalChart.substring(0, normalChart.length - attribute.length - 1);
        }
        hasAttributes = true;
      }
    }
  } while (hasAttributes);

  return {
    attributes,
    chart: normalChart,
    mood: normalMood,
  };
};

const getPointLeftPosition = (key: number | symbol | string) => {
  const index = Object.keys(Object.values(values.value)[0]).indexOf(key as string);

  return totalValueCount.value === 1 ? 50 : (index * 100) / (totalValueCount.value - 1);
};

const getPointTopPosition = (
  value: number,
  lineLabel: number | string | symbol,
  style?: 'bar' | 'line',
) => {
  if (!style) {
    style = styles.value[lineLabel];
  }

  const [minValue, maxValue] = (() => {
    if (normalize.value) {
      return [
        axisLabels.value[style][lineLabel][axisLabels.value[style][lineLabel].length - 1],
        axisLabels.value[style][lineLabel][0],
      ];
    } else {
      return [
        Math.min(
          ...Object.values(axisLabels.value[style]).map((labels) => labels[labels.length - 1]),
        ),
        Math.max(...Object.values(axisLabels.value[style]).map((labels) => labels[0])),
      ];
    }
  })();

  const position =
    maxValue - minValue <= 0.01
      ? 100
      : Math.min(100, Math.max(0, ((maxValue - value) * 100) / (maxValue - minValue)));

  switch (style) {
    case 'bar':
      return 100 - position;
    case 'line':
    default:
      return position;
  }
};

const setHover = (key: number | string | symbol, hover: boolean) => {
  if (hover) {
    hovers.value.push(key);
  } else {
    const hoverIndex = hovers.value.indexOf(key);

    if (hoverIndex >= 0) {
      hovers.value.splice(hoverIndex, 1);
    }
  }
};

watch(values, () => updateXAxisLabelsStyle());

const resizeObserver = new ResizeObserver(() => {
  updateXAxisLabelsStyle();
});

watch(chartContents, () => {
  resizeObserver.disconnect();

  if (chartContents.value) {
    resizeObserver.observe(chartContents.value);
  }
});

onMounted(() => {
  updateXAxisLabelsStyle();
});

onUnmounted(() => {
  resizeObserver.disconnect();
});
</script>

<template lang="pug">
.line-chart.no-spacing(
  :class="{ 'min-height': minHeight }",
  :style="lineChartStyle",
)
  .y-axis-title-container(v-if="yAxisLabels")
    Info.y-axis-title.no-spacing(
      important,
      size="small",
    ) {{ yAxisLabels[0] }}
  .y-axis-labels.no-spacing(v-if="normalize")
    Info.axis-label(
      v-for="label in axisLabels[styles[valueKeys[0]]][valueKeys[0]]",
    ) {{ formatters[valueKeys[0]](label) }}
  .y-axis-labels.no-spacing(v-else)
    Info.axis-label(
      v-for="label in maxAxisLabels[styles[valueKeys[0]]]",
    ) {{ formatters[valueKeys[0]](label) }}
  .chart-contents.no-spacing(ref="chartContents")
    .chart-grid.no-spacing
      .axis-line.no-spacing(
        v-for="_ in axisLabels[styles[valueKeys[0]]][valueKeys[0]].slice(1)"
      )
    .chart-bars.no-spacing
      .chart-bar-container.no-spacing(
        v-for="(values, index) in barValues",
        :style="{ left: `${getPointLeftPosition(index)}%`}",
      )
        .separator
        template(v-for="(value, lineLabel) in values")
          .chart-bar.no-spacing(
            v-if='getPointTopPosition(value, lineLabel) > 0',
            :class="{ ...getMoodClasses(lineLabel) }",
            :style="{ height: `${getPointTopPosition(value, lineLabel)}%` }",
          )
    .chart-bar-sums.no-spacing(
      v-if="barSumValues && barFormatter",
      :style="linesStyle",
    )
      .chart-bar-sum.no-spacing(
        v-for="(value, lineLabel) in barSumValues",
        :style="{ left: `${getPointLeftPosition(lineLabel)}%`, bottom: `${getPointTopPosition(value, lineLabel, 'bar')}%` }",
      )
        Info {{ barFormatter(value) }}
    .chart-popovers.no-spacing(:style='linesStyle')
      template(v-for="(key, index) in lineLabels[0]")
        .chart-popover-separator.no-spacing(
          v-if="index > 0",
        )
        .chart-popover-container.no-spacing(
          :class="{ visible: hovers.includes(key) }",
        )
          .chart-popover-line.no-spacing(:style="{ height: `${100 - valueHeight(index)}%` }")
          .chart-popover.no-spacing(:style="{ bottom: `${100 - valueHeight(index)}%` }")
            slot(
              name="popover"
              :index='index',
              :values='valueKeys.map((key) => Object.values(values[key])[index])',
            )
              .values
                template(v-for="(singleLineLabels, lineIndex) in lineLabels")
                  Info.no-spacing(
                    v-if="!activeLines || activeLines.includes(valueKeys[lineIndex]) && index <= singleLineLabels.length",
                    :class="getMoodClasses(valueKeys[lineIndex])",
                    important,
                  ) {{ formatters[valueKeys[lineIndex]](values[valueKeys[lineIndex]][singleLineLabels[index]]) }}
              slot(
                name="popoverAfterValues",
                :index='index',
                :values='valueKeys.map((key) => Object.values(values[key])[index])',
              )
    .chart-lines.no-spacing(:style='linesStyle')
      template(v-for="(line, lineLabel) in values")
        svg(
          v-if="styles[lineLabel] === 'line'",
          :class="getMoodClasses(lineLabel, [])",
          height="100%",
          preserveAspectRatio="none",
          width="100%",
          viewBox="0 0 100 100",
        )
          path(
            :d="chartPath(line, lineLabel)",
            :stroke-dasharray="getMoodComponents(moods[lineLabel]).attributes.includes('dashed') ? '6 4' : undefined",
            fill="none",
            stroke="currentColor",
            stroke-width="2px",
            vector-effect="non-scaling-stroke",
          )
    .chart-points.no-spacing(:style='linesStyle')
      template(v-for="(lineValues, lineLabel) in values")
        template(v-if="styles[lineLabel] === 'line' && (!activeLines || activeLines.includes(lineLabel))")
          template(
            v-for="(value, index) in lineValues"
          )
            .chart-point(
              :class="{ ...getMoodClasses(lineLabel), visible: hovers.includes(index) }",
              :style="{ left: `${getPointLeftPosition(index)}%`, top: `${getPointTopPosition(value, lineLabel)}%` }",
            )
    .chart-hover-sections.no-spacing
      .chart-hover-section.no-spacing(
        v-for="key in lineLabels[0]",
        @mouseover="setHover(key, true)",
        @mouseout="setHover(key, false)",
      )
    .x-axis-labels.no-spacing(
      v-if="!noXAxisLabels",
      :style='xAxisLabelsStyle',
    )
      .x-axis-label-group-container.no-spacing(
        v-for="(key, index) in lineLabels[0]",
        :class="{ active: hovers.includes(key) }",
        :style="{ left: `${getPointLeftPosition(key)}%` }",
      )
        .x-axis-label-group.no-spacing(
          :ref='(element) => setXAxisLabelGroup(index, element)',
          :style="{ transform: `rotate(-${xAxisLabelRotate}deg) translateX(-${xAxisLabelRotate * 50 / 90}%)` }",
        )
          slot(name="xAxis", :valueKey="key")
            template(v-for="lineIndex in lineCount")
              Info.x-axis-label.no-spacing(
                v-if="!activeLines || activeLines.includes(valueKeys[lineIndex - 1])",
                :class="{ ...getMoodClasses(valueKeys[lineIndex - 1]), 'has-label': index <= lineLabels[lineIndex - 1].length }",
                important,
                size="small",
              )
                slot(
                  name="xAxisLabel",
                  :index="index",
                  :lineIndex="lineIndex - 1",
                  :valueKey="key",
                )
  template(v-if="showSecondaryYAxis")
    .y-axis-labels.no-spacing(v-if="normalize")
      Info.axis-label(
        v-for="label in axisLabels[styles[valueKeys[valueKeys.length - 1]]][valueKeys[valueKeys.length - 1]]",
      ) {{ formatters[valueKeys[valueKeys.length - 1]](label) }}
    .y-axis-labels.no-spacing(v-else)
      Info.axis-label(
        v-for="label in maxAxisLabels[styles[valueKeys[valueKeys.length - 1]]]",
      ) {{ formatters[valueKeys[valueKeys.length - 1]](label) }}
  .y-axis-title-container(v-if="showSecondaryYAxis && yAxisLabels")
    Info.y-axis-title.no-spacing(
      important,
      size="small",
    ) {{ yAxisLabels[1] }}
</template>

<style lang="scss" scoped>
@import '../../styles/colors.scss';
@import '../../styles/shadows.scss';
@import '../../styles/transition.scss';

$-mood-colors: (accent, important, important-alt, negative, neutral, neutral-alt, positive);

$-chart-colors: (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21);

.line-chart {
  display: flex;

  &.min-height {
    height: calc(100% - 2rem);
    min-height: 300px;
  }

  &.no-spacing {
    margin-top: 2rem;
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

  > .y-axis-title-container {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 0 2rem;
    pointer-events: none;
    position: relative;
    margin-bottom: 2rem;

    > .y-axis-title {
      position: absolute;
      transform: rotate(-90.1deg);
      white-space: nowrap;
    }
  }

  > .chart-contents {
    flex: 1;
    margin-bottom: 2rem;
    position: relative;

    &::before {
      @include apply-color(background-color, background-neutral);

      content: '';
      display: flex;
      height: 2px;
      opacity: 0.25;
      position: absolute;
      transition-duration: $transition-duration-normal;
      transition-property: background-color;
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
          @include apply-color(background-color, background-neutral);

          content: '';
          display: flex;
          height: 2px;
          opacity: 0.25;
          transition-duration: $transition-duration-normal;
          transition-property: background-color;
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

      @each $-chart in $-chart-colors {
        > .chart-#{$-chart} {
          @include apply-color(color, chart-#{$-chart});
        }
      }

      @each $-mood in $-mood-colors {
        > .mood-#{$-mood} {
          &.opaque {
            @include apply-color(color, background-hover-#{$-mood});
          }

          &:not(.opaque) {
            @include apply-color(color, background-#{$-mood});
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
            opacity: 0.25;
          }

          > .chart-popover {
            opacity: 1;
            transform: none;
          }
        }

        > .chart-popover-line {
          @include apply-color(border-right-color, background-neutral);

          position: absolute;
          border-right-style: dashed;
          border-right-width: 2px;
          bottom: 0;
          margin-left: -2px;
          opacity: 0;
          transition-duration: $transition-duration-normal;
          transition-property: border-right-color, opacity;
        }

        > .chart-popover {
          @include apply-color(background-color, background-normal);
          @include apply-shadow(card);

          align-items: center;
          border-radius: 0.5rem;
          display: flex;
          flex-direction: column;
          margin-bottom: 1.15rem;
          margin-left: -2px;
          opacity: 0;
          padding: 1rem;
          position: absolute;
          transform: translateY(5px);
          transition-duration: $transition-duration-fast;
          transition-property: opacity, transform;
          z-index: 1000;

          &::before {
            @include apply-color(border-top-color, background-normal);

            border: 0.5rem solid transparent;
            content: '';
            position: absolute;
            transition-duration: $transition-duration-normal;
            transition-property: border-top-color;
            top: 100%;
          }

          > .values {
            display: flex;
            width: 100%;

            > .info {
              align-items: center;
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

              @each $-chart in $-chart-colors {
                &.chart-#{$-chart} {
                  @include apply-color(background-color, chart-#{$-chart});
                }
              }

              @each $-mood in $-mood-colors {
                &.mood-#{$-mood} {
                  &.dashed {
                    &::before {
                      @include apply-color(background-color, background-elevated-3);
                      @include apply-color(
                        box-shadow,
                        border-#{$-mood},
                        $value-prefix: inset 0 0 0 0.075rem
                      );

                      transition-duration: $transition-duration-normal;
                      transition-property: background-color, box-shadow;
                    }
                  }

                  &:not(.dashed) {
                    &::before {
                      @include apply-color(background-color, background-#{$-mood});

                      transition-duration: $transition-duration-normal;
                      transition-property: background-color;
                    }
                  }

                  &.opaque {
                    &::before {
                      @include apply-color(background-color, background-hover-#{$-mood});

                      transition-duration: $transition-duration-normal;
                      transition-property: background-color;
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

    > .chart-bars {
      display: flex;
      height: 100%;
      left: 0;
      margin-bottom: 2rem;
      pointer-events: none;
      position: absolute;
      top: 0;
      width: 100%;

      > .chart-bar-container {
        align-items: flex-end;
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 100%;
        padding: 0 1%;

        > .separator {
          flex-grow: 1;
        }

        > .chart-bar {
          transition-duration: $transition-duration-normal;
          transition-property: background-color;
          width: 100%;

          &:nth-child(2) {
            border-top-left-radius: 0.25rem;
            border-top-right-radius: 0.25rem;
          }

          @each $-chart in $-chart-colors {
            &.chart-#{$-chart} {
              @include apply-color(background-color, chart-#{$-chart});
            }
          }

          @each $-mood in $-mood-colors {
            &.mood-#{$-mood} {
              @include apply-color(background-color, background-#{$-mood});
            }
          }
        }
      }
    }

    > .chart-bar-sums {
      display: flex;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;

      > .chart-bar-sum {
        flex: 1;
        position: absolute;
        transform: translateX(-50%);

        &:first-child(:not(:last-child)),
        &:last-child(:not(:first-child)) {
          flex: 0.5;
        }

        > .info {
          font-size: 0.875rem;
          white-space: nowrap;
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
        @include apply-color(background-color, white);

        border: 2px solid;
        border-radius: 16px;
        height: 8px;
        margin-left: -7px;
        margin-top: -7px;
        position: absolute;
        width: 8px;
        transform: scale(60%);
        transition-duration: $transition-duration-normal;
        transition-property: background-color, border-color, box-shadow, height, margin-left,
          margin-top, transform, width;

        @each $-chart in $-chart-colors {
          &.chart-#{$-chart} {
            @include apply-color(background-color, chart-#{$-chart});
            @include apply-color(border-color, chart-#{$-chart});
          }
        }

        @each $-mood in $-mood-colors {
          &.mood-#{$-mood} {
            @include apply-color(border-color, background-#{$-mood});

            &:not(.dashed) {
              @include apply-color(background-color, background-#{$-mood});
            }

            &.opaque {
              @include apply-color(border-color, background-hover-#{$-mood});
            }
          }
        }

        &.visible {
          transform: scale(100%);

          @each $-chart in $-chart-colors {
            &.chart-#{$-chart} {
              @include apply-color(box-shadow-color, chart-#{$-chart}, $value-prefix: 0 0 2px);
            }
          }

          @each $-mood in $-mood-colors {
            &.mood-#{$-mood} {
              &.opaque {
                @include apply-color(box-shadow, background-#{$-mood}, $value-prefix: 0 0 2px);
              }

              &:not(.opaque) {
                @include apply-color(
                  box-shadow,
                  background-hover-#{$-mood},
                  $value-prefix: 0 0 2px
                );
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
      }
    }

    > .x-axis-labels {
      display: flex;
      position: relative;

      > .x-axis-label-group-container {
        flex: 1;
        margin-top: 0.125rem;
        position: absolute;
        transition-duration: $transition-duration-fast;
        z-index: 1000;

        &:first-child(:not(:last-child)),
        &:last-child(:not(:first-child)) {
          flex: 0.5;
        }

        &.active {
          > .x-axis-label-group {
            @include apply-color(background-color, background-lowered);
            @include apply-shadow(card);
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
          transition-duration: $transition-duration-normal;
          transition-property: background-color, box-shadow;

          > .x-axis-label {
            @include apply-color(color, background-neutral);

            align-items: center;
            display: flex;
            font-size: 0.875rem;
            white-space: nowrap;

            &.has-label::before {
              border-radius: 10px;
              content: '';
              display: block;
              height: 10px;
              margin-right: 0.5rem;
              width: 10px;
            }

            @each $-chart in $-chart-colors {
              &.chart-#{$-chart} {
                @include apply-color(background-color, chart-#{$-chart});
              }
            }

            @each $-mood in $-mood-colors {
              &.mood-#{$-mood} {
                &.dashed {
                  &::before {
                    @include apply-color(background-color, background-elevated-3);
                    @include apply-color(
                      box-shadow,
                      border-#{$-mood},
                      $value-prefix: inset 0 0 0 0.075rem
                    );
                  }
                }

                &:not(.dashed) {
                  &::before {
                    @include apply-color(background-color, background-#{$-mood});
                  }
                }

                &.opaque {
                  &::before {
                    @include apply-color(background-color, background-hover-#{$-mood});
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
