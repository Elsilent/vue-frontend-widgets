<script lang="ts" setup>
import { computed, onUnmounted, ref, toRefs } from 'vue';
import Align from '../../container/Align.vue';
import Button from '../../interaction/Button.vue';
import PopoverMenu from '../../interaction/PopoverMenu.vue';
import type { Locale } from '../../../utils/interface/component/layout/header/locale_selector';
import type { MenuItem } from '../../../utils/interface/menu';

const props = defineProps<{
  locales: Locale[];
  modelValue: string;
}>();

const { locales, modelValue } = toRefs(props);

const localeSelector = ref<typeof Align | undefined>();
const menuVisible = ref(false);

const menuItems = computed(() =>
  locales.value.reduce((menuItems, locale) => {
    menuItems[locale.code] = {
      icon: locale.icon,
      iconBackend: 'flag-icons',
    };

    return menuItems;
  }, {} as Record<string, MenuItem>),
);

const localeIcon = computed(
  () => locales.value.find((locale) => locale.code === modelValue.value)!.icon,
);

const emit = defineEmits<{
  (event: 'update:modelValue', localeCode: string): void;
}>();

const hideMenu = (event?: MouseEvent) => {
  if (event && localeSelector.value?.$el.contains(event.target as Node)) {
    return;
  }

  menuVisible.value = false;

  window.removeEventListener('mousedown', hideMenu);
};

const showMenu = () => {
  menuVisible.value = true;

  window.addEventListener('mousedown', hideMenu);
};

const setLocale = (locale: string) => {
  emit('update:modelValue', locale);

  hideMenu();
};

onUnmounted(() => {
  window.removeEventListener('mousedown', hideMenu);
});
</script>

<template lang="pug">
Align.locale-selector(
  ref='localeSelector',
  horizontal='center',
)
  Button.locale-button(
    @click='showMenu()',
    @focus="showMenu()",
    @blur="hideMenu()",
    :icon='localeIcon',
    iconBackend='flag-icons-square',
    mood='neutral',
    outline,
    size='large-3',
    shape='round',
  )
  PopoverMenu.locale-menu.no-spacing(
    @select='(locale: string) => setLocale(locale)',
    :items='menuItems',
    :visible='menuVisible',
  )
</template>

<style lang="scss" scoped>
@import '../../../styles/radius.scss';
@import '../../../styles/spacing.scss';

@include default-spacing;

.locale-button {
  &:deep(.icon) {
    border-radius: $border-radius-round;
  }
}
</style>
