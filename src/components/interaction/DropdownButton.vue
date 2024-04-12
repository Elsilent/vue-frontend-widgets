<script lang="ts" setup>
import { ref, onUnmounted, withDefaults } from 'vue';
import Button from '../interaction/Button.vue';
import Align from '../container/Align.vue';
import Spinner from '../image/Spinner.vue';
import Icon from '../image/Icon.vue';
import Info from '../label/Info.vue';

withDefaults(
  defineProps<{
    list: Record<string, any>;
    label: string;
    loading: boolean;
  }>(),
  {
    loading: false,
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

const itemClickHandler = (itemHandler: Function) => {
  itemHandler();
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
    :label="label",
    mood="accent",
    tabindex="-1",
    outline
  )
    Spinner.loader.no-spacing(v-if="loading")
    Icon.chevron.no-spacing(
      v-else,
      mood="accent",
      size='large-3',
      value='chevron-down',
      :style="dropdownVisibility ? {transform: 'rotate(180deg)'} : ''"
    )
  Align.exportBtn-menu(
    v-if="dropdownVisibility"
    column
    style="margin: 0"
  )
    .exportBtn-menu_item(v-for="item in list")
      Info {{ item.name }}
      Align.exportBtn-subMenu( column, v-if="item.submenu")
        .exportBtn-subMenu_item(
          v-for="subItem in item.submenu"
          @click="itemClickHandler(subItem.handler)"
        )
          Info {{ subItem.name }}
</template>

<style scoped lang="scss">
@import '../../styles/colors.scss';
@import '../../styles/radius.scss';
@import '../../styles/fonts.scss';
@import '../../styles/spacing.scss';
@import '../../styles/transition.scss';

.exportBtn {
  position: relative;

  &:deep(.button) {
    padding-right: $padding-size-small-3;
  }

  .loader,
  .chevron {
    margin-left: $padding-size-small-2;
    transition-duration: $transition-duration-normal;
    transition-property: background-color, border-color, opacity;
  }
  &:hover,
  &:active {
    .chevron {
      @include apply-color(color, white);
    }
  }

  &-menu {
    @include apply-color(background-color, background-elevated-3);
    @include apply-color(border-color, border-inactive);
    border-radius: $border-radius-normal;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    font-family: $font-family-normal;
    font-size: $font-size-normal;
    position: absolute;
    z-index: 5;
    width: 100%;
    margin: 0;

    &_item {
      cursor: pointer;
      padding: $padding-size-small-2 $padding-size-normal;

      & .exportBtn-subMenu {
        @include apply-color(background-color, background-elevated-3);
        @include apply-color(border-color, border-inactive);
        border-radius: $border-radius-normal;
        border-style: solid;
        border-width: 1px;
        display: none;
        position: absolute;
        left: 0;
        top: 0;
        transform: translateX(-100%);
        width: max-content;

        &_item {
          padding: $padding-size-small-2 $padding-size-normal;

          &:hover {
            @include apply-color(background-color, background-normal);
          }
        }
      }

      &:hover {
        @include apply-color(background-color, background-normal);

        .exportBtn-subMenu {
          display: flex;
        }
      }
    }
  }
}
</style>
