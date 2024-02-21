<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import type { Router } from 'vue-router';
import Info from '../../../components/label/Info.vue';
import type { IconBackend } from '../../../utils/enum/icon_backend';
import type { MenuItem as MenuItemType, MenuSection } from '../../../utils/menu';
import MenuItem from './MenuItem.vue';

type SectionLevel = 0 | 1 | 2;

const props = withDefaults(
  defineProps<{
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

const { icon, iconBackend, items, label, level, prefix, router, translator } = toRefs(props);

const activeMenuItemCode = computed(() => router.value.currentRoute.value.meta.menuItem);

const active = computed(() => {
  return Object.entries(items.value).some(([code, item]) => {
    if ('route' in item && `${prefix.value}${code}` === activeMenuItemCode.value) {
      return true;
    }

    return false;
  });
});

const nextItemLevel = computed(() => level.value + 1);
const nextSectionLevel = computed(() => (level.value + 1) as SectionLevel);
</script>

<template lang="pug">
template(v-if='label')
  Info.section(
    v-if="level === 0",
    elevation='elevated',
  ) {{ translator(label).toUpperCase() }}
  MenuItem(
    v-else,
    :active='active',
    :icon='icon',
    :iconBackend='iconBackend',
    :label='label',
    :level='level',
    withSublevel,
  )
template(v-for='(item, code) in items')
  MenuSubsection(
    v-if="'items' in item",
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
    v-else,
    @click.prevent='() => router.push(item.route)',
    :active='`${prefix}${code}` === activeMenuItemCode',
    :icon='item.icon',
    :iconBackend='item.iconBackend',
    :label='translator(item.label)',
    :level='nextItemLevel',
    :link="router.resolve({ name: item.route.name }).href"
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
</style>
