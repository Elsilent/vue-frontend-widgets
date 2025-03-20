<script lang="ts" setup>
import {
  computed,
  onUpdated,
  onMounted,
  onUnmounted,
  ref,
  toRefs,
  watch,
  type ComponentPublicInstance,
  type Ref,
} from 'vue';
import type { Mood } from '../utils/enum/mood';
import type { Style } from '../utils/type/component/image/line_bar_chart';
import Info from './Info.vue';

interface Point {
  left: number;
  top: number;
}

const supportedMoodAttributes = ['dashed', 'opaque'];

const props = withDefaults(
  defineProps<{
    activeLines?: (number | string)[];
    axis?: number;
    barSumValues?: Record<number | string, number>;
    columnsWithIntegers?: string[];
    formatters: Record<number | string, (value: number) => string>;
    groups?: Record<number | string, number | string>;
    leftAxisGroup?: number | string;
    leftAxisStyle?: Style;
    leftAxisFormatter?: (value: number) => string;
    minHeight?: boolean;
    moods: Record<number | string, { chart: number } | { mood: Mood }>;
    noXAxisLabels?: boolean;
    rightAxisGroup?: number | string;
    rightAxisStyle?: Style;
    rightAxisFormatter?: (value: number) => string;
    smoothing?: number;
    styles: Record<number | string, Style>;
    values: Record<number | string, Record<number | string, number>>;
    yAxisTitles?: string[];
  }>(),
  {
    axis: 4,
    columnsWithIntegers: () => [],
    minHeight: false,
    noXAxisLabels: false,
    smoothing: 0.15,
  },
);

const {
  activeLines,
  axis,
  barSumValues,
  groups,
  formatters,
  leftAxisGroup,
  leftAxisStyle,
  leftAxisFormatter,
  minHeight,
  moods,
  noXAxisLabels,
  rightAxisGroup,
  rightAxisStyle,
  rightAxisFormatter,
  smoothing,
  styles,
  values,
  yAxisTitles,
  columnsWithIntegers,
} = toRefs(props);

const barsPadding = computed(() => {
  const barsCount = Object.keys(barValues.value).length;
  // 12 is just a coefficient here for nice padding with width bars
  return barsCount === 0 ? 0 : (12 / barsCount).toFixed(2);
});

const groupsByStyleAndKey = computed(() => {
  const groupsByStyleAndKey: Record<Style, Record<string, number | string>> = {
    bar: {},
    line: {},
  };
  const defaultGroup = {
    line: '__line__',
    bar: '__bar__',
  };

  for (const key of valueKeys.value) {
    const group = groups?.value?.[key];

    switch (styles.value[key]) {
      case 'bar':
        groupsByStyleAndKey.bar[key] = group ?? defaultGroup.bar;
        break;
      case 'line':
      default:
        groupsByStyleAndKey.line[key] = group ?? defaultGroup.line;
        break;
    }
  }

  return groupsByStyleAndKey;
});

const lineLabels = computed(() => Object.values(values.value).map((line) => Object.keys(line)));

const maxLineLabels = computed(() => {
  return lineLabels.value.reduce(
    (maxArray, currentArray) => (currentArray.length > maxArray.length ? currentArray : maxArray),
    [],
  );
});

const leftAxisStyleValue = computed(() => {
  if (leftAxisStyle?.value !== undefined) {
    return leftAxisStyle.value;
  }

  // If there are any bars in values, display bar values by default
  if (Object.values(styles.value).some((style) => style === 'bar')) {
    return 'bar';
  }

  return 'line';
});

const rightAxisStyleValue = computed(() => {
  if (rightAxisStyle?.value !== undefined) {
    return rightAxisStyle.value;
  }

  // If there are any lines in values, display line values by default
  if (Object.values(styles.value).some((style) => style === 'line')) {
    return 'line';
  }

  return 'bar';
});

const leftAxisGroupValue = computed(() => {
  if (leftAxisGroup?.value !== undefined) {
    return leftAxisGroup.value;
  }

  // If group is not defined by default use the first group of the style
  return Object.values(groupsByStyleAndKey.value[leftAxisStyleValue.value])[0];
});

const rightAxisGroupValue = computed(() => {
  if (rightAxisGroup?.value !== undefined) {
    return rightAxisGroup.value;
  }

  // If left axis shows bar data and right axis shows line data use the first line group
  if (leftAxisStyleValue.value === 'bar' && rightAxisStyleValue.value === 'line') {
    return Object.values(groupsByStyleAndKey.value[rightAxisStyleValue.value])[0];
  }

  return undefined;
});

const leftAxisGroupFormatter = computed(() => {
  if (leftAxisFormatter?.value) {
    return leftAxisFormatter.value;
  }

  let valueKey: string | number | undefined = undefined;

  for (const [groupValueKey, group] of Object.entries(
    groupsByStyleAndKey.value[leftAxisStyleValue.value],
  )) {
    if (group === leftAxisGroupValue.value) {
      valueKey = groupValueKey;

      break;
    }
  }

  if (!valueKey) {
    return undefined;
  }

  return formatters.value[valueKey];
});

const rightAxisGroupFormatter = computed(() => {
  if (rightAxisFormatter?.value) {
    return rightAxisFormatter.value;
  }

  if (rightAxisGroupValue.value === undefined) {
    return undefined;
  }

  let valueKey: string | number | undefined = undefined;

  for (const [groupValueKey, group] of Object.entries(
    groupsByStyleAndKey.value[rightAxisStyleValue.value],
  )) {
    if (group === rightAxisGroupValue.value) {
      valueKey = groupValueKey;

      break;
    }
  }

  if (!valueKey) {
    return undefined;
  }

  return formatters.value[valueKey];
});

const axisLabels = computed(() => {
  const axisValues: Record<Style, Record<number | string, number[]>> = {
    line: Object.fromEntries(
      Object.values(groupsByStyleAndKey.value.line).map((groupKey) => [groupKey, []]),
    ),
    bar: Object.fromEntries(
      Object.values(groupsByStyleAndKey.value.bar).map((groupKey) => [
        groupKey,
        Array.from({ length: Object.values(Object.values(values.value)[0]).length }, () => 0),
      ]),
    ),
  };

  for (const [key, lineValues] of Object.entries(values.value)) {
    const style = styles.value[key];
    const group = groupsByStyleAndKey.value[style][key];

    switch (style) {
      case 'bar': {
        let valueIndex = 0;

        for (const value of Object.values(lineValues)) {
          axisValues[style][group][valueIndex] += value;

          valueIndex++;
        }
        break;
      }
      case 'line':
      default:
        axisValues[style][group].push(...Object.values(values.value[key]));
    }
  }

  const axisLabels: Record<Style, Record<number | string, number[]>> = {
    bar: {},
    line: {},
  };

  const fillAxisLabels = (
    axisLabels: Record<Style, Record<number | string, number[]>>,
    style: Style,
    values: Record<number | string, number[]>,
  ) => {
    axisLabels[style] = Object.fromEntries(
      Object.values(groupsByStyleAndKey.value[style]).map((groupKey) => {
        const groupValues = values[groupKey];

        const min = Math.min(...groupValues, 0);
        const max = Math.max(...groupValues);

        let scope = max - min;

        // for small integer values set yAxis to min integer value.
        const minScope = axis.value * 2;

        if (
          axis.value > 2 &&
          scope < minScope &&
          columnsWithIntegers.value.includes(groupKey.toString())
        ) {
          scope = minScope;
        }

        const scaleCoef = Math.pow(10, Math.ceil(Math.abs(scope)).toString().length - 2);
        const firstAxisRawValue = scope / (axis.value - 1);
        const scale = Math.ceil(firstAxisRawValue / scaleCoef) * scaleCoef;

        const labels = [min];

        for (let i = 1; i < axis.value; i++) {
          labels.push(labels[labels.length - 1] + scale);
        }

        return [groupKey, labels.reverse()];
      }),
    );
  };

  fillAxisLabels(axisLabels, 'bar', axisValues.bar);
  fillAxisLabels(axisLabels, 'line', axisValues.line);

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
  const invertedValues: Record<number | string, Record<number | string, number>> = {};

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

const totalValueCount = computed(() => {
  return Math.max(...Object.values(values.value).map((v) => Object.values(v).length));
});

const valueKeys = computed<(number | string)[]>(() => Object.keys(values.value));

const yAxisLabels = computed(() =>
  yAxisTitles?.value ? Object.values(yAxisTitles.value) : undefined,
);

const chartPath = (values: Record<number | string, number>, lineLabel: number | string) => {
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

    // limited max top for control point by 100 for cutting line under x-axis
    return {
      left: currentPoint.left + Math.cos(angle) * length,
      top: Math.min(currentPoint.top + Math.sin(angle) * length, 100),
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
  const count = barCount || totalValueCount.value;
  const offset = `${100 / count / 2}%`;
  return {
    left: offset,
    right: offset,
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

  const chartContentsWidth = chartContents.value.clientWidth;
  const maxWidth = Math.max(...xAxisLabelGroup.value.map((el) => el.clientWidth));
  const maxHeight = Math.max(...xAxisLabelGroup.value.map((el) => el.clientHeight));

  if (chartContentsWidth > totalValueCount.value * maxWidth) {
    xAxisLabelRotate.value = 0;
  } else if (chartContentsWidth < totalValueCount.value * maxHeight) {
    xAxisLabelRotate.value = 90;
  } else {
    // Treat full label width as a hypot, chart width as one of the sides
    const hypot = totalValueCount.value * maxWidth;
    xAxisLabelRotate.value = Math.min(Math.acos(chartContentsWidth / hypot) * 100, 90);
  }
  if (xAxisLabelRotate.value === 90) {
    setXAxisClasses(chartContentsWidth, totalValueCount.value * maxHeight);
  }
  xAxisLabelsHeight.value = maxWidth * Math.cos((90 - xAxisLabelRotate.value) / 100);
};

// Calculate classes for hiding some of x axis labels, if it's not possible to show all of them
const xAxisClasses = ref<string>('');

const setXAxisClasses = (containerWidth: number, labelsWidth: number) => {
  xAxisClasses.value = '';

  if (labelsWidth > containerWidth && labelsWidth * 0.5 <= containerWidth) {
    xAxisClasses.value += 'partialHidden halfHidden';
  } else if (labelsWidth * 0.5 > containerWidth && labelsWidth * 0.3 <= containerWidth) {
    xAxisClasses.value += 'partialHidden thirdHidden';
  } else if (labelsWidth * 0.3 > containerWidth && labelsWidth * 0.25 <= containerWidth) {
    xAxisClasses.value += 'partialHidden quarterHidden';
  } else if (labelsWidth * 0.25 > containerWidth) {
    xAxisClasses.value += 'partialHidden fifthHidden';
  }
};

const lineChartStyle = computed(() => ({
  'margin-bottom':
    xAxisLabelsHeight.value === undefined ? undefined : `${xAxisLabelsHeight.value}px`,
}));

const xAxisLabelsStyle = computed(() => {
  const barCount = Object.keys(barValues.value).length;
  const count = barCount || totalValueCount.value;
  const offset = `${100 / count / 2}%`;
  return {
    height: xAxisLabelsHeight.value === undefined ? undefined : `${xAxisLabelsHeight.value}px`,
    'margin-left': offset,
    'margin-right': offset,
  };
});

const hovers = ref<(number | string)[]>([]);

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

const getMoodClasses = (key: number | string, attributes?: string[]) => {
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
  let normalMood = 'mood' in mood ? mood.mood : undefined;
  let normalChart = 'chart' in mood ? mood.chart.toString() : undefined;
  const attributes: string[] = [];

  for (const attribute of supportedMoodAttributes) {
    if ((normalMood ?? normalChart)!.endsWith(`-${attribute}`)) {
      attributes.push(attribute);

      if (normalMood) {
        normalMood = normalMood.substring(0, normalMood.length - attribute.length - 1) as Mood;
      } else if (normalChart) {
        normalChart = normalChart.substring(0, normalChart.length - attribute.length - 1);
      }
    }
  }

  return {
    attributes,
    chart: normalChart,
    mood: normalMood,
  };
};

const getPointLeftPosition = (key: number | string) => {
  let index;
  if (typeof key !== 'symbol' && !isNaN(+key)) {
    index = +key;
  } else {
    index = Object.keys(Object.values(values.value)[0]).indexOf(key.toString());
  }
  return totalValueCount.value === 1 ? 50 : (index * 100) / (totalValueCount.value - 1);
};

const getTopPositionByStyleAndGroup = (value: number, style: Style, group: number | string) => {
  const valueAxisLabels = axisLabels.value[style][group];

  const minValue = valueAxisLabels[valueAxisLabels.length - 1];
  const maxValue = valueAxisLabels[0];

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

const getPointTopPosition = (value: number, valueKey: number | string) => {
  const style = styles.value[valueKey];
  const group = groupsByStyleAndKey.value[style][valueKey];

  return getTopPositionByStyleAndGroup(value, style, group);
};

const getBarSumTopPosition = (value: number) => {
  // No support for multiple bar groups
  const group = Object.values(groupsByStyleAndKey.value.bar)[0];

  return getTopPositionByStyleAndGroup(value, 'bar', group);
};

const setHover = (key: number | string, hover: boolean) => {
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

const popovers = ref([]);
const popoversContainers = ref([]);
const parentContainer = ref<Ref<HTMLElement> | null>(null);

const recalcPopoversPosition = () => {
  if (!parentContainer.value) {
    return;
  }
  const maxRight = document.body.clientWidth;
  const maxLeft = parentContainer.value.getBoundingClientRect().left;

  popovers.value.forEach((popover: HTMLElement, index) => {
    popover.style.right = 'auto';
    popover.style.left = 'auto';
    const popoversContainer: HTMLElement = popoversContainers.value?.[index];
    if (popover.getBoundingClientRect().right > maxRight) {
      popover.style.right = `-${maxRight - popoversContainer.getBoundingClientRect().right}px`;
    }
    if (popover.getBoundingClientRect().left < maxLeft) {
      popover.style.left = `-${popoversContainer.getBoundingClientRect().left - maxLeft}px`;
    }
  });
};

onMounted(() => {
  recalcPopoversPosition();
  updateXAxisLabelsStyle();
});

onUpdated(() => {
  recalcPopoversPosition();
});

onUnmounted(() => {
  resizeObserver.disconnect();
});
</script>

<template lang="pug">
.line-chart.no-spacing(
  :class="{ 'min-height': minHeight, 'noXAxis': noXAxisLabels}",
  :style="lineChartStyle",
  ref="parentContainer"
)
  .y-axis-title-container(v-if="yAxisLabels")
    Info.y-axis-title.no-spacing(
      size="small",
    ) {{ yAxisLabels[0] }}
  .y-axis-labels(v-if="leftAxisGroupValue && leftAxisGroupFormatter")
    Info.axis-label(
      v-for="label in axisLabels[leftAxisStyleValue][leftAxisGroupValue]",
    ) {{ leftAxisGroupFormatter(label) }}
  .chart-contents.no-spacing(ref="chartContents")
    .chart-grid.no-spacing
      template(v-if="axisLabels[leftAxisStyleValue][leftAxisGroupValue]?.length > 1")
        .axis-line.no-spacing(
          v-for="_ in axisLabels[leftAxisStyleValue][leftAxisGroupValue].slice(1)"
        )
      .axis-line.no-spacing(v-else)
    .chart-bars.no-spacing
      .chart-bar-container.no-spacing(
        v-for="(values, index) in barValues",
        :style="{ left: `${getPointLeftPosition(index)}%`, padding: `0 ${barsPadding}%`}",
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
        :style="{ left: `${getPointLeftPosition(lineLabel)}%`, bottom: `${getBarSumTopPosition(value)}%` }",
      )
        Info {{ barFormatter(value) }}
    .chart-popovers.no-spacing(:style='linesStyle')
      template(v-for="(key, index) in maxLineLabels")
        .chart-popover-separator.no-spacing(
          v-if="index > 0",
        )
        .chart-popover-container.no-spacing(
          ref="popoversContainers"
          :class="{ visible: hovers.includes(key) }",
        )
          .chart-popover.no-spacing( ref="popovers" :style="{ bottom: `${100 - valueHeight(index)}%` }")
            slot(
              name="popover"
              :index='index',
              :key='key',
              :values='valueKeys.map((key) => Object.values(values[key])[index])',
            )
              .values
                template(v-for="(singleLineLabels, lineIndex) in lineLabels")
                  Info.no-spacing(
                    v-if="!activeLines || activeLines.includes(valueKeys[lineIndex]) && index <= singleLineLabels.length",
                    :class="getMoodClasses(valueKeys[lineIndex])",
                  ) {{ formatters[valueKeys[lineIndex]](values[valueKeys[lineIndex]][singleLineLabels[index]]) }}
              slot(
                name="popoverAfterValues",
                :index='index',
                :values='valueKeys.map((key) => Object.values(values[key])[index])',
              )
          .chart-popover-line.no-spacing(:style="{ height: `${100 - valueHeight(index)}%` }")
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
          template(v-for="(value, index) in lineValues")
            .chart-point(
              :class="{ ...getMoodClasses(lineLabel), visible: hovers.includes(index) }",
              :style="{ left: `${getPointLeftPosition(index)}%`, top: `${getPointTopPosition(value, lineLabel)}%` }",
            )
    .chart-hover-sections.no-spacing
      .chart-hover-section.no-spacing(
        v-for="key in maxLineLabels",
        @mouseover="setHover(key, true)",
        @mouseout="setHover(key, false)",
      )
    .x-axis-labels.no-spacing(
      v-if="!noXAxisLabels",
      :style='xAxisLabelsStyle',
    )
      .x-axis-label-group-container.no-spacing(
        v-for="(key, index) in maxLineLabels",
        :class="[{ active: hovers.includes(key)}, xAxisClasses]",
        :style="{ left: `${getPointLeftPosition(key)}%` }",
      )
        //- translateX is calculated by special formula, depending on angle, to place whole labels, but only under the x-axis
        .x-axis-label-group.no-spacing(
          :ref='(element) => setXAxisLabelGroup(index, element)',
          :style="{ transform: `rotate(-${xAxisLabelRotate}deg) translateX(-${ Math.trunc(9 * Math.pow(xAxisLabelRotate, 0.4)) }%) translateY(-${xAxisLabelRotate > 70 ? 50 : 0}%)` }",
        )
          slot(name="xAxis", :valueKey="key")
            template(v-for="lineIndex in lineCount")
              Info.x-axis-label.no-spacing(
                v-if="!activeLines || activeLines.includes(valueKeys[lineIndex - 1])",
                :class="{ ...getMoodClasses(valueKeys[lineIndex - 1]), 'has-label': index < lineLabels[lineIndex - 1].length }",
                size="small",
              )
                slot(
                  name="xAxisLabel",
                  :index="index",
                  :lineIndex="lineIndex - 1",
                  :valueKey="key",
                )
  .y-axis-labels(v-if="rightAxisGroupValue && rightAxisGroupFormatter")
    Info.axis-label(
      v-for="label in axisLabels[rightAxisStyleValue][rightAxisGroupValue]",
    ) {{ rightAxisGroupFormatter(label) }}
  .y-axis-title-container(v-if="yAxisLabels")
    Info.y-axis-title.no-spacing(
      size="small",
    ) {{ yAxisLabels[1] }}
</template>

<style lang="scss" scoped>
@import '../styles/colors';
@import '../styles/shadows';
@import '../styles/transition';

$-mood-colors: (accent, important, important-alt, negative, neutral, neutral-alt, positive);

$-chart-colors: (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21);

.line-chart {
  display: flex;
  width: 100%;

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

  &.noXAxis > .y-axis-labels {
    margin-bottom: 2rem;
  }

  > .y-axis-labels {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: start;

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
    align-items: start;
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
    &:last-child > .y-axis-title {
      transform: rotate(90deg);
    }
  }

  &.noXAxis > .chart-contents {
    margin-bottom: 2rem;
  }

  > .chart-contents {
    flex: 1;
    position: relative;
    box-sizing: content-box;

    &::before {
      @include apply-color(background-color, background-neutral);

      content: '';
      display: flex;
      height: 1px;
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
          height: 1px;
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
            @include apply-color(color, line-chart-#{$-mood});
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
            max-height: 135%;
            overflow: hidden;
          }
        }

        > .chart-popover-line {
          @include apply-color(border-right-color, background-neutral, null, null, '', 0.25);

          position: absolute;
          border-right-style: dashed;
          border-right-width: 2px;
          bottom: 0;
          margin-left: -2px;
          opacity: 0;
          transition-duration: $transition-duration-normal;
          transition-property: border-right-color, opacity;

          &::after {
            @include apply-color(border-top-color, background-normal);

            border: 0.5rem solid transparent;
            content: '';
            position: absolute;
            width: 14px;
            height: 14px;
            top: -17px;
            left: -7px;
            z-index: 1001;
            box-sizing: border-box;
          }
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

          > .values {
            display: flex;
            width: 100%;

            > .info-text {
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
                      @include apply-color(background-color, line-chart-#{$-mood});

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
              @include apply-color(background-color, line-chart-#{$-mood});
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

        > .info-text {
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

        box-sizing: content-box;
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
            @include apply-color(border-color, line-chart-#{$-mood});

            &:not(.dashed) {
              @include apply-color(background-color, line-chart-#{$-mood});
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
                @include apply-color(box-shadow, line-chart-#{$-mood}, $value-prefix: 0 0 2px);
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

        &.partialHidden {
          visibility: hidden;
          &.halfHidden:nth-child(2n + 1),
          &.thirdHidden:nth-child(3n + 1),
          &.quarterHidden:nth-child(4n + 1),
          &.fifthHidden:nth-child(5n + 1) {
            visibility: visible;
          }
        }

        &:first-child(:not(:last-child)),
        &:last-child(:not(:first-child)) {
          flex: 0.5;
        }

        &.active {
          z-index: 1001;
          visibility: visible;
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
          transform-origin: center top;

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
                    @include apply-color(background-color, line-chart-#{$-mood});
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
