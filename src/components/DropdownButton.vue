<script lang="ts" setup>
import { ref, onUnmounted, withDefaults } from 'vue';
import Button from './Button.vue';
import Align from './Align.vue';
import Spinner from './Spinner.vue';
import Icon from './Icon.vue';
import Info from './Info.vue';

withDefaults(
  defineProps<{
    list: Record<string, any>;
    label: string;
    loading: boolean;
    disabled: boolean;
    icon?: typeof Icon;
  }>(),
  {
    loading: false,
    disabled: false,
  },
);

const dropdownVisibility = ref(false);

const toggleVisibility = () => {
  dropdownVisibility.value ? hideDropdown() : showDropdown();
};

const showDropdown = () => {
  dropdownVisibility.value = true;
  window.addEventListener('click', windowClickHandler);
};

const hideDropdown = () => {
  dropdownVisibility.value = false;
  window.removeEventListener('click', windowClickHandler);
};

onUnmounted(() => {
  window.removeEventListener('click', windowClickHandler);
});

/**
 * Handles click on item (e.g. "Excel" label).
 * Unlike subitem, it may not have handler.
 */
const itemClickHandler = (itemHandler: Function | undefined) => {
  if (itemHandler === undefined) {
    return;
  }

  itemHandler();
  hideDropdown();
};

const subItemClickHandler = (subItemHandler: Function) => {
  subItemHandler();
  hideDropdown();
};

const windowClickHandler = (e: Event) => {
  const element = document.getElementsByClassName('exportBtn')[0];

  if (e.target === element || element.contains(e.target as Node)) {
    return;
  }
  hideDropdown();
};
</script>

<template lang="pug">
.exportBtn
  Button(
    @click="toggleVisibility()",
    :disabled="disabled"
    :label="label",
    mood="accent",
    tabindex="-1",
    outline
  )
    Spinner.loader.no-spacing(v-if="loading")
    Icon.chevron.no-spacing(
      v-else,
      mood="accent",
      size="small-2",
      value='chevron-down',
      :style="dropdownVisibility ? {transform: 'rotate(180deg)'} : ''"
    )
  Align.exportBtn-menu(
    v-if="dropdownVisibility"
    column
    style="margin: 0"
  )
    .exportBtn-menu_item(
      v-for="item in list"
      @click="itemClickHandler(item.handler)"
    )
      Icon.chevron.no-spacing(
        size="small-2",
        :value="item.submenu ? 'chevron-left' : ''"
      )
      Icon.itemIcon.no-spacing(
        size="large-4",
        v-if="item.icon"
        :value="item.icon.value"
        :backend="item.icon.backend"
      )
      Info {{ item.name }}
      Align.exportBtn-subMenu( column, v-if="item.submenu")
        .exportBtn-subMenu_item(
          v-for="subItem in item.submenu"
          @click="subItemClickHandler(subItem.handler)"
        )
          Info {{ subItem.name }}
</template>

<style scoped lang="scss">
@use '../styles/colors' as colors;
@use '../styles/radius' as radius;
@use '../styles/fonts/base' as fonts;
@use '../styles/spacing' as spacing;
@use '../styles/transition' as transition;

.exportBtn {
  position: relative;

  &:deep(.button) {
    padding-left: spacing.$padding-size-large;
    padding-right: spacing.$padding-size-menu-normal;
    min-width: 100px;
    display: flex;
    justify-content: space-between;
    .info-text {
      margin-right: spacing.$padding-size-small-2;
    }
  }

  .loader,
  .chevron {
    transition-duration: transition.$transition-duration-normal;
    transition-property: background-color, border-color, opacity;
  }
  .itemIcon {
    margin-right: spacing.$padding-size-small-2;
  }
  &:hover,
  &:active {
    .button .chevron {
      @include colors.apply-color(color, white);
    }
  }

  &-menu {
    @include colors.apply-color(background-color, background-elevated-3);
    @include colors.apply-color(border-color, border-inactive);
    border-radius: radius.$border-radius-normal;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    font-family: fonts.$font-family-normal;
    font-size: fonts.$font-size-normal;
    position: absolute;
    z-index: 5;
    width: 100%;

    &_item {
      cursor: pointer;
      padding: spacing.$padding-size-small-2 spacing.$padding-size-normal spacing.$padding-size-small-2
        spacing.$padding-size-menu-small-2;
      display: flex;
      align-items: center;

      & .chevron {
        visibility: hidden;
        margin-right: spacing.$padding-size-small-2;
        min-width: spacing.$padding-size-menu-small-2;
      }

      & .exportBtn-subMenu {
        @include colors.apply-color(background-color, background-elevated-3);
        @include colors.apply-color(border-color, border-inactive);
        border-radius: radius.$border-radius-normal;
        border-style: solid;
        border-width: 1px;
        display: none;
        position: absolute;
        left: 0;
        top: 0;
        transform: translateX(-100%);
        width: max-content;

        &_item {
          padding: spacing.$padding-size-small-2 spacing.$padding-size-normal;

          &:hover {
            @include colors.apply-color(background-color, background-normal);
          }
        }
      }

      &:hover {
        @include colors.apply-color(background-color, background-normal);

        .exportBtn-subMenu {
          display: flex;
        }

        & .chevron {
          visibility: visible;
        }
      }
    }
  }
}
</style>
