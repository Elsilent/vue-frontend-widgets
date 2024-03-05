<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import type { Router } from 'vue-router';
import Collapse from '../../../components/container/Collapse.vue';
import Info from '../../../components/label/Info.vue';
import Icon from '../../../components/image/Icon.vue';
import type { IconBackend } from '../../../utils/enum/icon_backend';
import type { MenuItem as MenuItemType, MenuSection } from '../../../utils/menu';
import MenuItem from './MenuItem.vue';

type SectionLevel = 0 | 1 | 2;

const props = withDefaults(
  defineProps<{
    fullWidth: boolean;
    expandedPrefix: string;
    icon?: string;
    iconBackend?: IconBackend;
    items: Record<string, MenuItemType | MenuSection>;
    label: string;
    level?: SectionLevel;
    prefix: string;
    router: Router;
    translator: (code: string) => string;
  }>(),
  {
    level: 0,
  },
);

const { expandedPrefix, icon, iconBackend, items, label, level, prefix, router, translator } =
  toRefs(props);

const emit = defineEmits<{
  (e: 'update:expandedPrefix', expandedPrefix: string): void;
}>();

const activeMenuItemCode = computed(() => router.value.currentRoute.value.meta.menuItem);

const nextItemLevel = computed(() => level.value + 1);
const nextSectionLevel = computed(() => (level.value + 1) as SectionLevel);

const whenItemClicked = (code: string) => {
  emit('update:expandedPrefix', prefix.value);

  const item = items.value[code];

  if ('items' in item) {
    return;
  }

  router.value.push(item.route);
};
</script>

<template lang="pug">
template(v-if='label')
  template(
    v-if="level === 0",
  )
    Info.section(
      v-if="fullWidth",
      elevation='elevated',
    ) {{ translator(label).toUpperCase() }}
    Icon.section-collapsed(
      v-else,
      elevation='elevated',
      size='large-3',
      value='dots-horizontal-rounded',
    )
  MenuItem(
    v-else,
    @click="() => emit('update:expandedPrefix', prefix)",
    :active='expandedPrefix.startsWith(prefix)',
    :fullWidth='fullWidth',
    :icon='icon',
    :iconBackend='iconBackend',
    :label='fullWidth ? label : undefined',
    :level='level',
    withSublevel,
  )
Collapse(:expanded='level === 0 || expandedPrefix.startsWith(prefix)')
  template(v-for='(item, code) in items')
    MenuSubsection(
      v-if="'items' in item",
      @update:expandedPrefix="(prefix) => emit('update:expandedPrefix', prefix)",
      :expandedPrefix='expandedPrefix',
      :fullWidth='fullWidth',
      :icon='item.icon',
      :iconBackend='item.iconBackend',
      :items='item.items',
      :level='nextSectionLevel',
      :label="item.label ? translator(item.label) : ''",
      :prefix='`${prefix}${code}.`',
      :router='router',
      :translator='translator',
    )
    MenuItem(
      v-else-if='fullWidth || level === 0',
      @click.prevent='() => whenItemClicked(code)',
      :active='`${prefix}${code}` === activeMenuItemCode',
      :fullWidth='fullWidth',
      :icon='item.icon',
      :iconBackend='item.iconBackend',
      :label='fullWidth ? translator(item.label) : undefined',
      :level='nextItemLevel',
      :link="router.resolve(item.route).href"
    )
</template>

<style lang="scss" scoped>
@import '../../../styles/spacing.scss';

.info {
  &.section {
    padding: $padding-size-menu-large-2 $padding-size-menu-large-2 $padding-size-menu-small
      $padding-size-menu-large;
  }
}

.icon {
  &.section-collapsed {
    padding: $padding-size-menu-large 0 0 $padding-size-menu-large;
    transform: translateX($padding-size-menu-small-2);
  }
}
</style>
