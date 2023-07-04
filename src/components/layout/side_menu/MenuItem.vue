<script lang="ts" setup>
import Icon from '../../../components/image/Icon.vue';
import Info from '../../../components/label/Info.vue';
import InvalidMenuItemLevelError from '../../../utils/error/component/menu/invalid_menu_item_level';
import type { IconBackend } from '../../../utils/enum/icon_backend';
import type { Size } from '../../../utils/enum/size';
import { computed, toRefs } from 'vue';
import match from '../../../utils/match';

const props = withDefaults(
  defineProps<{
    active?: boolean;
    icon?: string;
    iconBackend?: IconBackend;
    label: string;
    level?: number;
    withSublevel?: boolean;
  }>(),
  {
    active: false,
    level: 1,
    withSublevel: false,
  },
);

const { active, icon, iconBackend, label, level, withSublevel } = toRefs(props);

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
  [`level-${level.value}`]: true,
  'with-sublevel': withSublevel.value,
}));
</script>

<template lang="pug">
.menu-item(:class='classes')
  Icon.item-icon(
    v-if='icon',
    :backend='iconBackend',
    :elevation='itemElevation',
    :size='itemIconSize',
    :value='icon',
  )
  Info(
    :elevation='itemElevation',
    :size='itemLabelSize',
  ) {{ label }}
  Icon.chevron(
    v-if='withSublevel',
    :elevation='itemElevation',
    size='large-3',
    value='chevron-right',
  )
</template>

<style lang="scss" scoped>
@import '../../../styles/colors.scss';
@import '../../../styles/spacing.scss';

.menu-item {
  align-items: center;
  cursor: pointer;
  display: flex;
  transition: background-color 0.2s;

  &.active {
    @include apply-color(background-color, background-menu-lowered);

    > .item-icon,
    > .info {
      transform: translateX($padding-size-menu-small-2);
    }

    > .chevron {
      transform: rotateZ(90deg);
    }
  }

  &.level-1 {
    padding: $padding-size-menu-large $padding-size-menu-large $padding-size-menu-large
      $padding-size-menu-large;
    transition: background-color 0.2s, box-shadow 0.2s;

    &.active.with-sublevel {
      @include apply-color(
        box-shadow,
        background-important-alt,
        $value-prefix: inset (-$padding-size-menu-small-3) 0 0
      );
    }
  }

  &.level-2 {
    padding: $padding-size-menu-normal $padding-size-menu-large $padding-size-menu-normal
      $padding-size-menu-large * 3.5;
  }

  &.level-3 {
    padding: $padding-size-menu-normal $padding-size-menu-large $padding-size-menu-normal
      $padding-size-menu-large * 4.5;
  }

  &:hover {
    > .item-icon,
    > .info {
      transform: translateX($padding-size-menu-small-2);
    }
  }

  > .item-icon {
    margin-right: $padding-size-menu-large;
  }

  > .info {
    flex: 1;
  }

  > .icon,
  > .info {
    transition: transform 0.2s;
  }
}
</style>
