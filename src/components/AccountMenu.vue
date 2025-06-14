<script lang="ts" setup>
import { computed, ref, toRefs, onUnmounted } from 'vue';
import Align from './Align.vue';
import Avatar from './Avatar.vue';
import PopoverMenu from './PopoverMenu.vue';
import type { AvatarInfo } from '../utils/type/component/layout/header/account_menu';
import type { MenuItem } from '../utils/interface/component/layout/header/selector';

const props = defineProps<{
  avatar?: AvatarInfo;
  menuItems: Record<string, MenuItem>;
}>();

const { avatar, menuItems } = toRefs(props);

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

const accountMenu = ref<typeof Align | undefined>();
const menuVisible = ref(false);

const hideMenu = (event?: MouseEvent) => {
  if (event && accountMenu.value?.$el.contains(event.target as Node)) {
    return;
  }

  menuVisible.value = false;

  window.removeEventListener('mousedown', hideMenu);
};

const showMenu = () => {
  menuVisible.value = true;

  window.addEventListener('mousedown', hideMenu);
};

const whenMenuItemClicked = (code: string) => {
  menuItems.value[code].handler();

  hideMenu();
};

onUnmounted(() => {
  window.removeEventListener('mousedown', hideMenu);
});
</script>

<template lang="pug">
Align.account-menu(ref='accountMenu')
  Avatar(
    @click='showMenu()',
    @focus='showMenu()',
    @keydown.shift.tab='hideMenu()',
    @keydown.tab='hideMenu()',
    :icon='avatarIcon',
    :iconBackend='avatarIconBackend',
    :label='avatarLabel',
    :source='avatarSource',
  )
  PopoverMenu.account-menu(
    @select='(code) => whenMenuItemClicked(code)',
    :items='menuItems',
    :visible='menuVisible',
  )
</template>

<style lang="scss" scoped>
@use '../styles/spacing' as spacing;

@include spacing.default-spacing;

.account-menu {
  > .avatar {
    cursor: pointer;
  }
}
</style>
