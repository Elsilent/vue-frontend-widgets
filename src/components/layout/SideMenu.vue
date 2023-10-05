<script lang="ts" setup>
import { toRefs } from 'vue';
import type { Router } from 'vue-router';
import BrandText from '../../components/label/BrandText.vue';
import Logo from '../../components/image/Logo.vue';
import MenuSubsection from './side_menu/MenuSubsection.vue';
import type { Menu } from '../../utils/menu';

const props = defineProps<{
  brandText: string;
  menu: Menu;
  router: Router;
  translator: (code: string) => string;
}>();

const { router } = toRefs(props);
</script>

<template lang="pug">
.side-menu
  .brand(@click="router.push({ name: 'default' })")
    Logo
    BrandText(elevation='elevated-3', size='large-4') {{ brandText }}
  .items
    template(v-for="(section, code) in menu")
      MenuSubsection(
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

.side-menu {
  @include apply-color(background-color, background-menu);
  @include apply-shadow(large-header);

  display: flex;
  flex-direction: column;
  min-width: $side-menu-width;

  > .brand {
    @include apply-shadow(large-header);

    align-items: center;
    cursor: pointer;
    display: flex;
    height: $padding-size-large-2 * 2 + $font-size-normal;
    padding: 0 $padding-size-small;
    user-select: none;

    > .logo {
      margin-right: 0.5rem;
    }
  }

  > .items {
    flex: 1;
    overflow-y: auto;

    > .pixel {
      font-size: $font-size-large;
    }

    &::-webkit-scrollbar {
      width: 0;
    }
  }
}
</style>
