<script lang="ts" setup>
import { computed, ref, toRefs, watch } from 'vue';
import Align from '../../../components/container/Align.vue';
import Avatar from '../../../components/image/Avatar.vue';
import Button from '../../../components/interaction/Button.vue';
import PopoverMenu from '../../../components/interaction/PopoverMenu.vue';
import type { Mood } from '../../../utils/enum/mood';
import type { Theme } from '../../../utils/enum/theme';
import UndefinedThemeError from '../../../utils/error/undefined_theme';
import type { LabeledCurrency } from '../../../utils/interface/currency';
import match from '../../../utils/match';
import type { AvatarInfo } from '../../../utils/type/component/layout/header/account';
import type { Locale, MenuItem } from '../../../utils/interface/component/layout/header/account';
import type { MenuItem as PopoverMenuItem } from '../../../utils/interface/menu';

const props = withDefaults(
  defineProps<{
    avatar?: AvatarInfo;
    currency: string;
    currencies: LabeledCurrency[];
    locale: string;
    locales: Locale[];
    menuItems: Record<string, MenuItem>;
    theme: Theme;
    topExpanded?: boolean;
  }>(),
  {
    topExpanded: false,
  },
);

const { avatar, currencies, currency, locale, locales, menuItems, theme } = toRefs(props);

const avatarIcon = computed(() =>
  avatar && avatar.value && 'icon' in avatar.value ? avatar.value.icon : undefined,
);
const avatarIconBackend = computed(() =>
  avatar && avatar.value && 'iconBackend' in avatar.value ? avatar.value.iconBackend : undefined,
);
const avatarLabel = computed(() =>
  avatar && avatar.value && 'label' in avatar.value ? avatar.value.label : undefined,
);
const avatarSource = computed(() =>
  avatar && avatar.value && 'source' in avatar.value ? avatar.value.source : undefined,
);

const currencyMenuItems = computed(() =>
  currencies.value.reduce((menuItems, currency) => {
    menuItems[currency.code] = {
      label: currency.label,
    };

    return menuItems;
  }, {} as Record<string, PopoverMenuItem>),
);

const currentCurrency = computed(
  () => currencies.value.find(({ code }) => currency.value === code)!,
);

const localeMenuItems = computed(() =>
  locales.value.reduce((menuItems, locale) => {
    menuItems[locale.code] = {
      icon: locale.icon,
      iconBackend: 'flag-icons',
    };

    return menuItems;
  }, {} as Record<string, PopoverMenuItem>),
);

const localeIcon = computed(
  () =>
    locales.value
      .reduce(
        (matcher, locale) => matcher.when(locale.code, () => locale.icon),
        match<string, string>(locale.value),
      )
      .or(() => locales.value[0].code).done,
);

const themeIcon = computed(
  () =>
    match<Theme, string>(theme.value)
      .when('dark', () => 'moon')
      .when('light', () => 'sun')
      .or((theme) => {
        throw new UndefinedThemeError(theme);
      }).done,
);

const themeMood = computed(
  () =>
    match<Theme, Mood>(theme.value)
      .when('dark', () => 'accent')
      .when('light', () => 'important')
      .or((theme) => {
        throw new UndefinedThemeError(theme);
      }).done,
);

const toggleTheme = () => {
  const newTheme = match<Theme, Theme>(theme.value)
    .when('dark', () => 'light')
    .when('light', () => 'dark')
    .or((theme) => {
      throw new UndefinedThemeError(theme);
    }).done!;

  setTheme(newTheme);
};

const updateLocale = (locale: string) => {
  setLocale(locale);

  whenBlurred();
};

const expanded = ref(false);
const currencyMenuVisible = ref(false);
const localeMenuVisible = ref(false);

const accountContainer = ref<HTMLElement | null>(null);

watch(currencyMenuVisible, (currencyMenuVisible) => {
  if (currencyMenuVisible) {
    accountContainer.value?.focus();
  }
});

watch(localeMenuVisible, (localeMenuVisible) => {
  if (localeMenuVisible) {
    accountContainer.value?.focus();
  }
});

watch(expanded, (expanded) => {
  if (expanded) {
    accountContainer.value?.focus();
  }
});

const emit = defineEmits<{
  (event: 'update:currency', currency: string): void;
  (event: 'update:locale', locale: string): void;
  (event: 'update:theme', theme: Theme): void;
}>();

const setCurrency = (currency: string) => {
  expanded.value = false;
  whenBlurred();

  emit('update:currency', currency);
};

const setLocale = (locale: string) => {
  expanded.value = false;

  emit('update:locale', locale);
};

const setTheme = (theme: Theme) => {
  expanded.value = false;

  emit('update:theme', theme);
};

const whenBlurred = (event?: FocusEvent) => {
  if (!event || !accountContainer.value?.contains(event.relatedTarget as Node)) {
    expanded.value = false;
    currencyMenuVisible.value = false;
    localeMenuVisible.value = false;

    return;
  }

  accountContainer.value?.focus();
};

const whenMenuItemClicked = (code: string) => {
  menuItems.value[code].handler();

  whenBlurred();
};
</script>

<template lang="pug">
.account-container(
  ref='accountContainer'
  @blur='() => whenBlurred()',
  tabindex='-1',
)
  Align.account(:class='{ expanded: expanded || topExpanded }', vertical='center')
    Align.menu-container
      Button.currency-button(
        @click='() => currencyMenuVisible = !currencyMenuVisible',
        @mousedown.stop="() => {}",
        :label="currentCurrency.symbol",
        mood='neutral',
        outline,
        size='large-3',
        shape='round',
      )
      PopoverMenu.currency-menu.no-spacing(
        @select='(currency) => setCurrency(currency)',
        :items='currencyMenuItems',
        :visible='currencyMenuVisible',
      )
    Align.menu-container.spacing-small
      Button.locale-button(
        @click='() => localeMenuVisible = !localeMenuVisible',
        @mousedown.stop="() => {}",
        :icon='localeIcon',
        iconBackend='flag-icons-square',
        mood='neutral',
        outline,
        size='large-3',
        shape='round',
      )
      PopoverMenu.locale-menu.no-spacing(
        @select='() => localeMenuVisible = false',
        @select:en="() => updateLocale('en')",
        @select:ru="() => updateLocale('ru')",
        :items='localeMenuItems',
        :visible='localeMenuVisible',
      )
    Button.theme-button(
      @click='() => toggleTheme()',
      :icon='themeIcon',
      :mood='themeMood',
      outline,
      size='large-2',
      shape='round',
    )
    Avatar(
      @click='() => expanded = !expanded',
      :icon='avatarIcon',
      :iconBackend='avatarIconBackend',
      :label='avatarLabel',
      :source='avatarSource',
    )
  PopoverMenu.account-menu(
    @select='(code) => whenMenuItemClicked(code)',
    :items='menuItems',
    :visible='expanded',
  )
</template>

<style lang="scss" scoped>
@import '../../../styles/colors.scss';
@import '../../../styles/radius.scss';
@import '../../../styles/spacing.scss';
@import '../../../styles/transition.scss';

@include default-spacing;

.account-container {
  height: 100%;
  outline: none;
  position: relative;

  > .account {
    height: 100%;
    padding: 0 $padding-size-large-2;
    transition-duration: $transition-duration-normal;
    transition-property: background-color;

    &.expanded {
      @include apply-color(background-color, background-elevated-2);
    }

    &:not(.expanded) {
      > .menu-container {
        > .currency-button,
        > .locale-button,
        > .theme-button {
          opacity: 0;
          pointer-events: none;
        }
      }
    }

    > .menu-container {
      > .currency-menu,
      > .locale-menu {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        top: 100%;
      }

      > .locale-button {
        &:deep(.icon) {
          border-radius: $border-radius-round;
        }
      }
    }

    > .avatar {
      cursor: pointer;
    }
  }

  > .account-menu {
    border-bottom-right-radius: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    left: 0;
    top: 100%;
    right: 0;
  }
}
</style>
