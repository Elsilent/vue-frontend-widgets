<script lang="ts" setup>
import { ref, onUnmounted } from 'vue';
import Button from '../interaction/Button.vue';
import Align from '../container/Align.vue';

defineProps<{
  list: Record<string, any>;
  label: string;
}>();

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
  Align.exportBtn-menu(
    v-if="dropdownVisibility"
    column
    style="margin: 0"
  )
    .exportBtn-menu_item(v-for="item in list")
      | {{ item.name }}
      Align.exportBtn-subMenu( column, v-if="item.submenu")
        .exportBtn-subMenu_item(
          v-for="subItem in item.submenu"
          @click="itemClickHandler(subItem.handler)"
        )
          | {{ subItem.name }}
</template>

<style scoped lang="scss">
@import '../../styles/colors.scss';
@import '../../styles/radius.scss';
@import '../../styles/fonts.scss';
@import '../../styles/spacing.scss';

.exportBtn {
  position: relative;

  &-menu {
    @include apply-color(background-color, white);
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
        @include apply-color(background-color, white);
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
            @include apply-color(background-color, background-lowered);
          }
        }
      }

      &:hover {
        @include apply-color(background-color, background-lowered);

        .exportBtn-subMenu {
          display: flex;
        }
      }
    }
  }
}
</style>
