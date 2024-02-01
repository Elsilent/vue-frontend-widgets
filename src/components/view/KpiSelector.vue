<script lang="ts" setup>
import { computed, ref, toRefs, watch } from 'vue';
import type { Column } from '../../utils/type/component/container/table';
import Align from '../container/Align.vue';
import Button from '../interaction/Button.vue';
import Card from '../container/Card.vue';
import Header from '../label/Header.vue';
import Icon from '../image/Icon.vue';
import Info from '../label/Info.vue';
import Input from '../interaction/Input.vue';
import Scrollable from '../container/Scrollable.vue';

const props = defineProps<{
    applyLabel: string;
    columns: Record<string, Column>;
    defaultValue: string[];
    filterLabel: string;
    groupNames: Record<string, string>;
    groupsTitle: string;
    modelValue: string[];
    noColumnsFoundLabel: string;
    orderTitle: string;
    resetLabel: string;
    showModalLabel: string;
    title: string;
}>();

const emit = defineEmits<{
    (e: 'update:modelValue', value: string[]): void;
}>();

const { columns, defaultValue, groupNames, modelValue, showModalLabel } = toRefs(props);

const currentGroup = ref<string | undefined>(Object.keys(groupNames.value)[0]);

const currentValue = ref<string[]>([...modelValue.value]);

const enabledColumnElements = ref<typeof Align[]>([]);

const enabledColumnContainers = ref<HTMLElement[]>([]);

const filterValue = ref('');

const visible = ref<boolean | undefined>(undefined);

const groupsScrollPosition = ref<{ left: number, top: number }>({ left: 0, top: 0 });

const columnsScrollPosition = ref<{ left: number, top: number }>({ left: 0, top: 0 });

const enabledColumnsScrollPosition = ref<{ left: number, top: number }>({ left: 0, top: 0 });

const draggedColumnKey = ref<string | undefined>(undefined);

const dragColumnStart = ref<number | undefined>(undefined);

const dragPointerStart = ref<number | undefined>(undefined);

const dragPointerCurrent = ref<number | undefined>(undefined);

const filteredColumns = computed<Record<string, Column>>(() => {
    return Object.fromEntries(
        Object.entries(columns.value)
            .filter(([_, column]) =>
                column.fixed !== true
                && (
                    filterValue.value.trim() === ''
                    || column.label.toLowerCase().includes(filterValue.value.trim().toLowerCase())
                ))
    );
});

const columnsByGroups = computed<Record<string, Record<string, Column>>>(() => {
    return Object.keys(groupNames.value)
        .reduce((columnsByGroups, groupKey) => {
            columnsByGroups[groupKey] = Object.fromEntries(
                Object.entries(filteredColumns.value)
                    .filter(([_, column]) => column.group === groupKey)
            );

            return columnsByGroups;
        }, {} as Record<string, Record<string, Column>>);
});

const currentGroupColumns = computed<Record<string, Column> | undefined>(() =>
    currentGroup.value === undefined
        ? undefined
        : columnsByGroups.value[currentGroup.value]);

const filteredGroupNames = computed<Record<string, string>>(() => {
    return Object.fromEntries(
        Object.entries(groupNames.value)
            .filter(([groupKey, _]) => Object.values(filteredColumns.value)
                .some((column) => column.group === groupKey))
    );
});

const dragRawPosition = computed(() => {
    if (dragColumnStart.value === undefined || dragPointerStart.value === undefined || dragPointerCurrent.value === undefined) {
        return undefined;
    }

    return dragColumnStart.value + dragPointerCurrent.value - dragPointerStart.value - enabledColumnsScrollPosition.value.top;
});

const dragPosition = computed(() => {
    if (dragRawPosition.value === undefined) {
        return undefined;
    }

    return `${dragRawPosition.value}px`;
});

const dragPlaceAfterIndex = computed(() => {
    if (draggedColumnKey.value === undefined || dragRawPosition.value === undefined) {
        return undefined;
    }

    const currentValueIndex = currentValue.value.indexOf(draggedColumnKey.value);

    const fixedColumnKeyBeforeIndex = currentValueIndex - 1 - currentValue.value
        .slice(0, currentValueIndex)
        .reverse()
        .findIndex((columnKey) => columns.value[columnKey].fixed === true);

    let fixedColumnKeyAfterIndex = currentValue.value
        .slice(currentValueIndex + 1)
        .findIndex((columnKey) => columns.value[columnKey].fixed === true);

    if (fixedColumnKeyAfterIndex >= 0) {
        fixedColumnKeyAfterIndex += currentValueIndex + 1;
    } else {
        fixedColumnKeyAfterIndex = currentValue.value.length;
    }

    const fixedContainer = getEnabledColumnContainers(currentValue.value[fixedColumnKeyBeforeIndex]);

    const itemSize = fixedContainer.offsetHeight;

    const index = Math.min(
        Math.round((dragRawPosition.value - fixedContainer.offsetTop) / itemSize - 1),
        fixedColumnKeyAfterIndex - fixedColumnKeyBeforeIndex - 1,
    );

    return fixedColumnKeyBeforeIndex + index + 1;
});

const getEnabledColumnContainers = (columnKey: string) => {
    return enabledColumnContainers.value[currentValue.value.indexOf(columnKey)];
}

const getEnabledColumnElement = (columnKey: string) => {
    return enabledColumnElements.value[currentValue.value.indexOf(columnKey)];
}

const hide = (reset: boolean = false, event?: Event) => {
    if (event && event.target !== event.currentTarget) {
        return;
    }

    if (reset) {
        currentValue.value = [...modelValue.value];
    }

    visible.value = false;

    currentGroup.value = Object.keys(groupNames.value)[0];
};

const removeColumn = (columnKey: string) => {
    const index = currentValue.value.indexOf(columnKey);

    if (index >= 0) {
        currentValue.value.splice(index, 1);
    }
};

const resetColumns = () => {
    currentValue.value = [...defaultValue.value];
};

const save = (value: string[]) => {
    const newValue = [...value];

    emit('update:modelValue', newValue);

    hide(false);
};

const setCurrentGroup = (group: number | string | symbol) => {
    currentGroup.value = group.toString();
}

const show = () => {
    visible.value = true;
};

const toggleColumn = (columnKey: string) => {
    const index = currentValue.value.indexOf(columnKey);

    if (index >= 0) {
        currentValue.value.splice(index, 1);
    } else {
        currentValue.value.push(columnKey);
    }
};

const whenDragMoved = (event: MouseEvent) => {
    dragPointerCurrent.value = event.clientY;
};

const whenDragStopped = () => {
    const placeAfterIndex = dragPlaceAfterIndex.value;

    if (draggedColumnKey.value !== undefined && placeAfterIndex !== undefined) {
        const removeIndex = currentValue.value.indexOf(draggedColumnKey.value);

        currentValue.value.splice(removeIndex, 1);

        currentValue.value.splice(placeAfterIndex, 0, draggedColumnKey.value);
    }

    draggedColumnKey.value = undefined;
    dragColumnStart.value = undefined;
    dragPointerStart.value = undefined;
    dragPointerCurrent.value = undefined;

    window.removeEventListener('mousemove', whenDragMoved);
    window.removeEventListener('mouseup', whenDragStopped);
};

const whenDragStarted = (event: MouseEvent, columnKey: string) => {
    draggedColumnKey.value = columnKey;
    dragColumnStart.value = getEnabledColumnElement(columnKey).$el.offsetTop;
    dragPointerStart.value = event.clientY;
    dragPointerCurrent.value = event.clientY;

    window.addEventListener('mousemove', whenDragMoved);
    window.addEventListener('mouseup', whenDragStopped);
};

watch(filterValue, (value) => {
    if (value) {
        if (!currentGroup.value || !(currentGroup.value in filteredGroupNames.value)) {
            currentGroup.value = Object.keys(filteredGroupNames.value)[0];
        }
    } else if (!currentGroup.value) {
        currentGroup.value = Object.keys(filteredGroupNames.value)[0];
    }
});
</script>

<template lang="pug">
Button(
    @click="() => show()",
    :label="showModalLabel",
    mood="neutral",
)
Teleport(to="#app > .app-container")
    Align.kpi-selector-container.no-spacing(
        @click.stop="(e) => hide(true, e)",
        :class="{ visible, hidden: visible === false }",
        column,
        horizontal="center",
        vertical="center",
    )
        Card.kpi-selector
            Align.title(vertical="center")
                Header.flex-max(size="large-2") {{ title }}
                Align.flex-max.no-spacing.search-container(vertical="center")
                    Input.flex-max.search(
                        v-model="filterValue",
                        :placeholder="filterLabel",
                    )
                    Icon.no-spacing(
                        value="search-alt-2",
                    )
                Align.close-container.flex-max.no-spacing(horizontal="right")
                    Icon.close(
                        @click="() => hide(true)",
                        size="large-3",
                        value="x",
                    )
            Align.body.flex-max.no-spacing
                template(v-if="currentGroup !== undefined && currentGroupColumns !== undefined")
                    Align.groups.flex-max(column)
                        Header(size="large-2") {{ groupsTitle }}
                        Scrollable.flex-max.no-spacing(
                            @update:scrollPosition="(scrollPosition) => groupsScrollPosition = scrollPosition",
                            :scrollPosition="groupsScrollPosition",
                        )
                            .item.no-spacing(
                                v-for="[groupKey, groupName] in Object.entries(filteredGroupNames)",
                                @click="() => setCurrentGroup(groupKey)",
                                :class="{ selected: currentGroup === groupKey }",
                            )
                                Info(size="small") {{ groupName }}
                    Align.group-columns.flex-max.no-spacing(column)
                        Header(size="large-2") {{ groupNames[currentGroup] }}
                        Scrollable.flex-max.no-spacing(
                            @update:scrollPosition="(scrollPosition) => columnsScrollPosition = scrollPosition",
                            :scrollPosition="columnsScrollPosition",
                        )
                            .item.no-spacing(
                                v-for="[columnKey, column] in Object.entries(currentGroupColumns)",
                                @click="() => toggleColumn(columnKey)",
                                :class="{ selected: currentValue.includes(columnKey) }",
                                :key="columnKey",
                            )
                                Info(size="small") {{ column.label }}
                    Align.enabled-columns.flex-max.no-spacing(column)
                        Align.header(vertical="center")
                            Header.flex-max(
                                size="large-2",
                            ) {{ orderTitle }}
                            Info.reset(
                                @click="() => resetColumns()",
                                mood="important-alt",
                                size="small",
                            ) {{ resetLabel }}
                        Scrollable.flex-max.no-spacing(
                            @update:scrollPosition="(scrollPosition) => enabledColumnsScrollPosition = scrollPosition",
                            :contentClass="draggedColumnKey === undefined ? undefined : 'dragged'",
                            :scrollPosition="enabledColumnsScrollPosition",
                        )
                            .items
                                .item-container.no-spacing(
                                    v-for="columnKey in currentValue",
                                    ref="enabledColumnContainers",
                                )
                                    .separator-top.no-spacing(
                                        :class="{ 'place-after': dragPlaceAfterIndex !== undefined && draggedColumnKey !== undefined && columnKey === currentValue[dragPlaceAfterIndex] && dragPlaceAfterIndex < currentValue.indexOf(draggedColumnKey) }",
                                    )
                                    Align.item.no-spacing(
                                        ref="enabledColumnElements",
                                        :class="{ dragged: columnKey === draggedColumnKey }",
                                        :style="columnKey === draggedColumnKey ? { top: dragPosition } : undefined",
                                        vertical="center",
                                    )
                                        template(v-if="columns[columnKey].fixed")
                                            Info.flex-max(
                                                :class="{ fixed: columns[columnKey].fixed }",
                                                size="small",
                                            ) {{ columns[columnKey].label }}
                                        template(v-else)
                                            Icon.move(
                                                @mousedown="(e) => whenDragStarted(e, columnKey)",
                                                value="dots-vertical-rounded",
                                            )
                                            Info.flex-max.no-spacing(
                                                size="small",
                                            ) {{ columns[columnKey].label }}
                                            Icon.no-spacing.remove(
                                                @click="() => removeColumn(columnKey)",
                                                value="trash",
                                            )
                                    .separator-bottom.no-spacing(
                                        :class="{ 'place-after': dragPlaceAfterIndex !== undefined && draggedColumnKey !== undefined && columnKey === currentValue[dragPlaceAfterIndex] && dragPlaceAfterIndex >= currentValue.indexOf(draggedColumnKey) }",
                                    )
                template(v-else)
                    Align.flex-max(
                        horizontal="center",
                        vertical="center",
                    )
                        Info(
                            size="small",
                        ) {{ noColumnsFoundLabel }}
            Align.controls.no-spacing(horizontal="right")
                Button(
                    @click="() => save(currentValue)",
                    :label="applyLabel",
                    mood="positive",
                )
</template>

<style lang="scss" scoped>
@use 'sass:math';

@import '../../styles/colors.scss';
@import '../../styles/fonts.scss';
@import '../../styles/radius.scss';
@import '../../styles/shadows.scss';
@import '../../styles/spacing.scss';
@import '../../styles/transition.scss';

@include default-spacing;

.body>*,
.title>* {
    width: 250px;
}

.body {
    overflow: hidden;

    >.align {
        &:not(:last-child) {
            @include apply-color(border-right-color, background-lowered);

            border-right-style: solid;
            border-right-width: 1px;
        }

        &.groups,
        &.group-columns {
            >.header {
                margin-bottom: $padding-size-small-2;
            }
        }

        >.header {
            @include apply-color(border-bottom-color, background-lowered);

            border-bottom-style: solid;
            border-bottom-width: 1px;
            padding-bottom: $padding-size-normal;
            padding-left: $padding-size-normal;
            padding-right: $padding-size-normal;
            padding-top: $padding-size-normal;
        }

        &:deep(.scrollable-content) {
            padding-bottom: math.div($padding-size-small-2, 2);
            transition-duration: $transition-duration-normal;
            transition-property: background-color;

            &.dragged {
                @include apply-color(background-color, background-normal);

                transition-duration: $transition-duration-fast;
            }

            >.items {
                position: relative;

                >.item-container {
                    >.item {
                        padding-bottom: $padding-size-small-2;
                        padding-left: $padding-size-large + $padding-size-small-2;
                        padding-right: $padding-size-large + $padding-size-small-2;
                        padding-top: $padding-size-small-2;
                        position: relative;
                        transition-duration: $transition-duration-normal;
                        transition-property: background-color, box-shadow;
                        z-index: 1;

                        &.dragged {
                            @include apply-color(background-color, background-elevated-3);
                            @include apply-shadow(dragged);

                            position: absolute;
                            transition-duration: $transition-duration-fast;
                            width: 100%;
                            z-index: 2;
                        }

                        >.info.fixed {
                            opacity: 0.5;
                        }

                        >.move {
                            cursor: grab;
                            position: absolute;
                            left: $padding-size-small-2;
                        }

                        >.remove {
                            cursor: pointer;
                            position: absolute;
                            right: $padding-size-small-2 * 2;
                        }
                    }

                    >.separator-bottom {
                        height: 1px;
                        padding-top: math.div($padding-size-small-2, 2);

                        &.place-after {
                            margin-bottom: $padding-size-small-2 * 2 + $font-size-small + 5px;
                        }

                        &::before {
                            @include apply-color(border-bottom-color, background-lowered);

                            border-bottom-style: solid;
                            border-bottom-width: 1px;
                            content: '';
                            display: block;
                        }
                    }

                    >.separator-top {
                        padding-bottom: math.div($padding-size-small-2, 2);

                        &.place-after {
                            margin-top: $padding-size-small-2 * 2 + $font-size-small + 5px;
                        }
                    }
                }
            }

            >.item {
                border-radius: $border-radius-normal;
                cursor: pointer;
                margin-bottom: $padding-size-small-2;
                margin-left: $padding-size-small-2;
                margin-right: $padding-size-small-2;
                padding: $padding-size-small-2 $padding-size-large;
                overflow: hidden;
                position: relative;

                &::before {
                    bottom: 0;
                    content: '';
                    display: block;
                    left: 0;
                    opacity: 0;
                    pointer-events: none;
                    position: absolute;
                    right: 0;
                    top: 0;
                    transition-duration: $transition-duration-normal;
                    transition-property: opacity;
                }

                &.selected {
                    &::before {
                        @include apply-color(background-color,
                            background-hover-important-alt,
                        );

                        opacity: 0.25;

                        transition-duration: $transition-duration-fast;
                    }
                }

                &:not(.selected) {
                    &:hover {
                        &::before {
                            @include apply-color(background-color,
                                background-hover-important-alt,
                            );

                            opacity: 0.125;

                            transition-duration: $transition-duration-fast;
                        }
                    }
                }
            }
        }
    }
}

.controls {
    @include apply-color(border-top-color, background-lowered);

    border-top-style: solid;
    border-top-width: 1px;
    padding: $padding-size-small $padding-size-normal;
}

.title {
    @include apply-color(border-bottom-color, background-lowered);

    border-bottom-style: solid;
    border-bottom-width: 1px;
    padding: $padding-size-small 0;

    >.header {
        left: $padding-size-normal;
        position: relative;
    }

    >.close-container {
        left: -$padding-size-normal;
        position: relative;

        >.close {
            cursor: pointer;
        }
    }
}

.kpi-selector {
    display: flex;
    flex-direction: column;
    height: 500px;
    overflow: hidden;
    padding: 0;
}

.kpi-selector-container {
    background: rgba(0, 0, 0, 0.5);
    bottom: 0;
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 100;

    &.visible {
        @keyframes visible {
            0% {
                opacity: 0;
            }

            100% {
                opacity: 1;
            }
        }

        animation: visible $transition-duration-normal forwards;
        pointer-events: all;
    }

    &.hidden {
        @keyframes hidden {
            0% {
                opacity: 1;
            }

            100% {
                opacity: 0;
            }
        }

        animation: hidden $transition-duration-normal forwards;
    }
}

.reset {
    cursor: pointer;
}

.search-container {
    position: relative;

    >.icon {
        padding-right: $padding-size-small-3;
        pointer-events: none;
        right: $padding-size-small-2;
        position: absolute;
    }

    >.search {
        font-size: $font-size-small;
        padding-right: $padding-size-large-3;
    }
}
</style>
