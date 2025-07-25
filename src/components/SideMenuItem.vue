<script lang="ts" setup>
import Icon from './Icon.vue';
import Info from './Info.vue';
import InvalidMenuItemLevelError from '../utils/error/component/menu/invalid_menu_item_level';
import type { IconBackend } from '../utils/enum/icon_backend';
import type { Size } from '../utils/enum/size';
import { computed, toRefs } from 'vue';
import match from '../utils/match';

const props = withDefaults(
  defineProps<{
    active?: boolean;
    fullWidth: boolean;
    icon?: string;
    iconBackend?: IconBackend;
    label?: string;
    level?: number;
    withSublevel?: boolean;
    link?: string;
  }>(),
  {
    active: false,
    level: 1,
    withSublevel: false,
  },
);

const { active, fullWidth, icon, iconBackend, label, level, withSublevel } = toRefs(props);

const itemIconSize = computed(
  () =>
    match<number, Size>(level.value)
      .when(1, () => 'large-3')
      .whenAny([2, 3], () => 'large')
      .or((level) => {
        throw new InvalidMenuItemLevelError(level);
      }).done!,
);

const itemElevation = computed(() => (active.value ? 'elevated-2' : 'elevated'));

const itemLabelSize = computed(
  () =>
    match<number, Size>(level.value)
      .when(1, () => 'large')
      .whenAny([2, 3], () => 'normal')
      .or((level) => {
        throw new InvalidMenuItemLevelError(level);
      }).done!,
);

const classes = computed(() => ({
  active: active.value,
  'full-width': fullWidth.value,
  [`level-${level.value}`]: true,
  'with-sublevel': withSublevel.value,
}));
</script>

<template lang="pug">
component.menu-item(
  :class='classes'
  :is="link? 'a' : 'div'"
  :href="link ? link : undefined"
)
  Icon.item-icon(
    v-if='icon',
    :backend='iconBackend',
    :elevation='itemElevation',
    :size='itemIconSize',
    :value='icon',
  )
  Info(
    v-if='fullWidth && label',
    :elevation='itemElevation',
    :size='itemLabelSize',
  ) {{ label }}
  Icon.chevron(
    v-if='fullWidth && withSublevel',
    :elevation='itemElevation',
    size='small-2',
    value='chevron-right',
  )
</template>

<style lang="scss" scoped>
@use '../styles/colors' as colors;
@use '../styles/spacing' as spacing;

.menu-item {
  align-items: center;
  cursor: pointer;
  display: flex;
  transition: background-color 0.2s;
  text-decoration: none;

  &.active {
    @include colors.apply-color(background-color, background-menu-lowered);

    &.full-width {
      > .item-icon,
      > .info-text {
        transform: translateX(spacing.$padding-size-menu-small-2 * 2);
      }

      > .chevron {
        transform: rotateZ(90deg);
      }
    }
  }

  &.level-1 {
    padding: spacing.$padding-size-menu-large 0 spacing.$padding-size-menu-large spacing.$padding-size-menu-large;
    transition:
      background-color 0.2s,
      box-shadow 0.2s;

    &.active.with-sublevel {
      @include colors.apply-color(
        box-shadow,
        background-important-alt,
        $value-prefix: inset calc(-1 * spacing.$padding-size-menu-small-3) 0 0
      );
    }
  }

  &.level-2 {
    padding: spacing.$padding-size-menu-normal 0 spacing.$padding-size-menu-normal spacing.$padding-size-menu-large * 3.5;
  }

  &.level-3 {
    padding: spacing.$padding-size-menu-normal 0 spacing.$padding-size-menu-normal spacing.$padding-size-menu-large * 4.5;
  }

  &:hover {
    &.full-width {
      > .item-icon,
      > .info-text {
        transform: translateX(spacing.$padding-size-menu-small-2 * 2);
      }
    }
  }

  > .chevron {
    margin-right: spacing.$padding-size-menu-large;
  }

  > .item-icon + .info-text {
    margin-left: spacing.$padding-size-menu-large;
  }

  > .info-text {
    flex: 1;
    margin-right: spacing.$padding-size-menu-large;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  > .icon,
  > .info-text {
    transform: translateX(spacing.$padding-size-menu-small-2);
    transition: transform 0.2s;
  }
}
</style>
