<script lang="ts" setup>
import { computed, ref, toRefs, watch } from 'vue';
import type { Router } from 'vue-router';
import BrandTextImage from '../../components/image/BrandText.vue';
import BrandText from '../../components/label/BrandText.vue';
import Logo from '../../components/image/Logo.vue';
import MenuSubsection from './side_menu/MenuSubsection.vue';
import type { Menu } from '../../utils/menu';

const props = defineProps<{
  brandText?: string;
  fullWidth: boolean;
  menu: Menu;
  router: Router;
  translator: (code: string) => string;
}>();

const expandedPrefix = ref('');

const forceFullWidth = ref(false);

const { fullWidth, router } = toRefs(props);

const isFullWidth = computed(() => fullWidth.value || forceFullWidth.value);

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
      Logo(force-dark-mode)
      BrandText(
        v-if="brandText",
        elevation='elevated-3',
        size='large-4',
      ) {{ brandText }}
      BrandTextImage(v-else full force-dark-mode)
  .items
    template(v-for="(section, code) in menu")
      MenuSubsection(
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
@import '../../styles/colors.scss';
@import '../../styles/fonts.scss';
@import '../../styles/shadows.scss';
@import '../../styles/spacing.scss';
@import '../../styles/transition.scss';
@import '../../styles/scrollbar.scss';

.side-menu {
  @include apply-color(background-color, background-menu);
  @include apply-shadow(large-header);

  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  transition-duration: $transition-duration-normal;
  transition-property: background-color, width;
  width: $side-menu-width-collapsed;

  &.full-width {
    width: $side-menu-width;

    > .brand-container {
      > .brand {
        > .brand-text {
          opacity: 1;
        }
      }
    }
  }

  > .brand-container {
    @include apply-shadow(large-header);

    align-items: center;
    cursor: pointer;
    display: flex;
    height: $padding-size-large-2 * 2 + $font-size-normal;
    padding: 0 $padding-size-large;
    overflow: hidden;
    user-select: none;

    > .brand {
      display: flex;
      flex: 1;
      align-items: flex-end;
      margin-bottom: $padding-size-small-3 * 2;

      > .brand-text {
        flex: 1;
        opacity: 0;
        transition-duration: $transition-duration-normal;
        transition-property: color, opacity;
        white-space: nowrap;
      }

      > .logo + .brand-text {
        margin-left: 1rem;
      }
    }
  }

  > .items {
    @include scrollbar;

    flex: 1;
    overflow-x: hidden;

    &:deep(> *) {
      margin-right: -10px;
    }

    > .pixel {
      font-size: $font-size-large;
    }
  }
}
</style>
