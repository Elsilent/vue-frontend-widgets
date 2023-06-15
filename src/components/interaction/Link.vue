<script lang="ts" setup>
import { toRefs } from 'vue';
import { RouterLink, type RouteLocationRaw } from 'vue-router';
import Info from '../label/Info.vue';

const props = defineProps<{
  to: RouteLocationRaw | URL;
}>();

const { to } = toRefs(props);
</script>

<template lang="pug">
RouterLink.link(
  v-if="typeof to === 'string' || 'name' in to",
  :to='to',
)
  Info(mood='important-alt')
    slot(default)
a.link(
  v-else,
  :href='to.toString()',
)
  Info(mood='important-alt')
    slot(default)
</template>

<style lang="scss" scoped>
.link {
  text-decoration: none;
}
</style>
