<script lang="ts" setup>
import { computed, ref, toRefs, watch } from 'vue';
import type { Router } from 'vue-router';
import SideMenuSubsection from './SideMenuSubsection.vue';
import type { Menu } from '../utils/menu';
import Scrollable from './Scrollable.vue';

const props = defineProps<{
  fullWidth: boolean;
  menu: Menu;
  router: Router;
  translator: (code: string) => string;
}>();

const expandedPrefix = ref('');

const forceFullWidth = ref(false);

const { fullWidth, router } = toRefs(props);

const isFullWidth = computed(() => fullWidth.value || forceFullWidth.value);

const enabledColumnsScrollPosition = ref<{ left: number; top: number }>({ left: 0, top: 0 });

watch(
  router.value.currentRoute,
  (currentRoute) => {
    const menuItem = (currentRoute.meta.menuItem as string | undefined) ?? '';

    expandedPrefix.value = menuItem.substring(0, menuItem.lastIndexOf('.') + 1);
  },
  { immediate: true },
);
</script>

<template lang="pug">
.side-menu(
  @mouseenter="forceFullWidth = true",
  @mouseleave="forceFullWidth = false",
  :class="{ 'full-width': isFullWidth }",
)
  .brand-container(@click="router.push({ name: 'default' })")
    .brand
      slot(name="header")
  Scrollable.flex-max.no-spacing(
    @update:scrollPosition="(scrollPosition) => enabledColumnsScrollPosition = scrollPosition",
    :scrollPosition="enabledColumnsScrollPosition",
    size="small"
    theme="dark"
  )
    .items
      template(v-for="(section, code) in menu")
        SideMenuSubsection(
          v-model:expandedPrefix='expandedPrefix',
          :fullWidth='isFullWidth',
          :icon='section.icon',
          :iconBackend='section.iconBackend',
          :items='section.items',
          :label="section.label ?? ''",
          :prefix='`${code}.`',
          :router='router',
          :translator='translator',
        )
      .pixel &nbsp;
</template>

<style lang="scss" scoped>
@use '../styles/colors' as colors;
@use '../styles/fonts/base' as fonts;
@use '../styles/shadows' as shadows;
@use '../styles/spacing' as spacing;
@use '../styles/transition' as transition;

.side-menu {
  @include colors.apply-color(background-color, background-menu);
  @include shadows.apply-shadow(large-header);

  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  transition-duration: transition.$transition-duration-normal;
  transition-property: background-color, width;
  width: spacing.$side-menu-width-collapsed;

  &.full-width {
    width: spacing.$side-menu-width;

    > .brand-container {
      > .brand {
        &:deep(> .brand-text) {
          opacity: 1;
        }
      }
    }
  }

  > .brand-container {
    @include shadows.apply-shadow(large-header);

    align-items: center;
    cursor: pointer;
    display: flex;
    height: spacing.$padding-size-large-2 * 2 + fonts.$font-size-normal;
    padding: 0 spacing.$padding-size-large;
    overflow: hidden;
    user-select: none;

    > .brand {
      display: flex;
      flex: 1;
      align-items: flex-end;
      margin-bottom: spacing.$padding-size-small-3 * 2;

      &:deep(> .brand-text) {
        flex: 1;
        opacity: 0;
        transition-duration: transition.$transition-duration-normal;
        transition-property: color, opacity;
        white-space: nowrap;
      }

      &:deep(> .logo + .brand-text) {
        margin-left: 1rem;
      }
    }
  }

  > .items {
    flex: 1;
    overflow-x: hidden;

    > .pixel {
      font-size: fonts.$font-size-large;
    }
  }
}
</style>
