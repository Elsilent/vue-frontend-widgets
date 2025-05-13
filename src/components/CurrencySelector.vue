<script lang="ts" setup>
import { computed, onUnmounted, ref, toRefs } from 'vue';
import Align from './Align.vue';
import Button from './Button.vue';
import PopoverMenu from './PopoverMenu.vue';
import type { LabeledCurrency } from '../utils/interface/currency';
import type { MenuItem } from '../utils/interface/menu';

const props = defineProps<{
  currencies: LabeledCurrency[];
  modelValue: string;
}>();

const { currencies, modelValue } = toRefs(props);

const currencySelector = ref<typeof Align | undefined>();
const menuVisible = ref(false);

const menuItems = computed(
  () =>
    currencies.value.reduce(
      (menuItems, currency) => {
        menuItems[currency.code] = {
          label: currency.label,
        };

        return menuItems;
      },
      {} as Record<string, MenuItem>,
    ) ?? {},
);

const currentCurrency = computed(() =>
  currencies.value.find(({ code }) => modelValue.value === code),
);

const emit = defineEmits<{
  (event: 'update:modelValue', currencyCode: string): void;
}>();

const hideMenu = (event?: MouseEvent) => {
  if (event && currencySelector.value?.$el.contains(event.target as Node)) {
    return;
  }

  currencySelector.value?.$el.querySelector('.button').blur();
  menuVisible.value = false;

  window.removeEventListener('mousedown', hideMenu);
};

const showMenu = () => {
  menuVisible.value = true;

  window.addEventListener('mousedown', hideMenu);
};

const setCurrency = (currency: string) => {
  emit('update:modelValue', currency);

  hideMenu();
};

onUnmounted(() => {
  window.removeEventListener('mousedown', hideMenu);
});
</script>

<template lang="pug">
Align.currency-selector(
  ref='currencySelector',
  horizontal='center',
)
  Button.currency-button(
    @click='showMenu()',
    @focus='showMenu()',
    @keydown.shift.tab='hideMenu()',
    @keydown.tab='hideMenu()',
    :label="currentCurrency?.symbol",
    mood='neutral',
    outline,
    size='large-3',
    shape='normal',
  )
  PopoverMenu.currency-menu.no-spacing(
    @select='(currency: string) => setCurrency(currency)',
    :items='menuItems',
    :visible='menuVisible',
  )
</template>

<style lang="scss" scoped>
@use '../styles/spacing' as spacing;

@include spacing.default-spacing;

button.shape-normal.currency-button {
  border-radius: 15px;
  padding: 0 8px 0 8px;
}
</style>
