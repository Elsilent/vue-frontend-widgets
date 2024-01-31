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

const { columns, groupNames, modelValue, showModalLabel } = toRefs(props);

const currentGroup = ref<string | undefined>(Object.keys(groupNames.value)[0]);

const currentValue = ref<string[]>([...modelValue.value]);

const filterValue = ref('');

const visible = ref<boolean|undefined>(undefined);

const groupsScrollPosition = ref<{ left: number, top: number }>({ left: 0, top: 0 });

const columnsScrollPosition = ref<{ left: number, top: number }>({ left: 0, top: 0 });

const enabledColumnsScrollPosition = ref<{ left: number, top: number }>({ left: 0, top: 0 });

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

const currentGroupColumns = computed<Record<string, Column>|undefined>(() =>
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

const resetColumns = () => {
    currentValue.value = [...modelValue.value];
};

const hide = (reset: boolean = false, event?: Event) => {
    if (event && event.target !== event.currentTarget) {
        return;
    }

    if (reset) {
        resetColumns();
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

const save = (value: string[]) => {
    const newValue = [...value];

    emit('update:modelValue', newValue);

    modelValue.value = newValue;

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

watch(filterValue, (value) => {
    if (value) {
        if (!currentGroup.value || !(currentGroup.value in filteredGroupNames.value)) {
            currentGroup.value = Object.keys(filteredGroupNames.value)[0];
        }
    } else if (!currentGroup.value) {
        currentGroup.value = Object.keys(filteredGroupNames.value)[0];
    }
})
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
                    Align.flex-max(column)
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
                    Align.flex-max.no-spacing(column)
                        Header(size="large-2") {{ groupNames[currentGroup] }}
                        Scrollable.no-spacing(
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
                    Align.flex-max.no-spacing(column)
                        Align.header(vertical="center")
                            Header.flex-max(
                                size="large-2",
                            ) {{ orderTitle }}
                            Info.reset(
                                @click="() => resetColumns()",
                                mood="important-alt",
                                size="small",
                            ) {{ resetLabel }}
                        Scrollable.no-spacing(
                            @update:scrollPosition="(scrollPosition) => enabledColumnsScrollPosition = scrollPosition",
                            :scrollPosition="enabledColumnsScrollPosition",
                        )
                            .added-item-container.no-spacing(
                                v-for="columnKey in currentValue",
                            )
                                Align.item.no-spacing(
                                    vertical="center",
                                )
                                    template(v-if="columns[columnKey].fixed")
                                        Info.flex-max(
                                            :class="{ fixed: columns[columnKey].fixed }",
                                            size="small",
                                        ) {{ columns[columnKey].label }}
                                    template(v-else)
                                        Icon.move(
                                            value="dots-vertical-rounded",
                                        )
                                        Info.flex-max.no-spacing(
                                            size="small",
                                        ) {{ columns[columnKey].label }}
                                        Icon.no-spacing.remove(
                                            @click="() => removeColumn(columnKey)",
                                            value="trash",
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
@import '../../styles/spacing.scss';
@import '../../styles/transition.scss';

@include default-spacing;

.body > *,
.title > * {
    width: 250px;
}

.body {
    overflow: hidden;

    > .align {
        &:not(:last-child) {
            @include apply-color(border-right-color, background-lowered);

            border-right-style: solid;
            border-right-width: 1px;
        }

        > .header {
            @include apply-color(border-bottom-color, background-lowered);

            border-bottom-style: solid;
            border-bottom-width: 1px;
            margin-bottom: $padding-size-small-2;
            padding-bottom: $padding-size-normal;
            padding-left: $padding-size-normal;
            padding-right: $padding-size-normal;
            padding-top: $padding-size-normal;
        }

        &:deep(.scrollable-content) {
            > .added-item-container {
                @include apply-color(border-bottom-color, background-lowered);

                border-bottom-style: solid;
                border-bottom-width: 1px;
                margin-bottom: math.div($padding-size-small-2, 2);
                padding-bottom: math.div($padding-size-small-2, 2);

                > .item {
                    > .move {
                        cursor: grab;
                    }

                    > .remove {
                        cursor: pointer;
                    }
                }
            }

            > .item {
                cursor: pointer;
                margin-bottom: $padding-size-small-2;
                margin-left: $padding-size-small-2;
                margin-right: $padding-size-small-2;

                &.selected {
                    &::before {
                        @include apply-color(
                            background-color,
                            background-hover-important-alt,
                        );

                        opacity: 0.25;

                        transition-duration: $transition-duration-fast;
                    }
                }

                &:not(.selected) {
                    &:hover {
                        &::before {
                            @include apply-color(
                                background-color,
                                background-hover-important-alt,
                            );

                            opacity: 0.125;

                            transition-duration: $transition-duration-fast;
                        }
                    }
                }
            }

            > .added-item-container > .item, > .item {
                border-radius: $border-radius-normal;
                overflow: hidden;
                margin-left: $padding-size-small-2;
                margin-right: $padding-size-small-2;
                padding: $padding-size-small-2 $padding-size-large;
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

                > .info.fixed {
                    opacity: 0.5;
                }

                > .move {
                    position: absolute;
                    left: 0;
                }

                > .remove {
                    position: absolute;
                    right: $padding-size-small-2;
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

    > .header {
        left: $padding-size-normal;
        position: relative;
    }

    > .close-container {
        left: -$padding-size-normal;
        position: relative;

        > .close {
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

    > .icon {
        padding-right: $padding-size-small-3;
        pointer-events: none;
        right: $padding-size-small-2;
        position: absolute;
    }

    > .search {
        font-size: $font-size-small;
        padding-right: $padding-size-large-3;
    }
}
</style>
