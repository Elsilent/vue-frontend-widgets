<script lang="ts" setup>
import { toRefs } from 'vue';
import { RouterLink, type RouteLocationRaw } from 'vue-router';
import Info from '../label/Info.vue';

export interface Props {
  to: RouteLocationRaw | URL;
  isExternal?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isExternal: false,
});
const { to } = toRefs(props);
</script>

<template lang="pug">
RouterLink.link(
  v-if="!props.isExternal && (typeof to === 'string' || 'name' in to)",
  :to='to',
  @click="$emit('click')"
)
  Info(mood='important-alt' v-bind="$attrs")
    slot(default)
a.link(
  v-else,
  :href='to.toString()',
  :target="props.isExternal ? '_blank' : '_self'",
  @click="$emit('click')"
)
  Info(mood='important-alt' v-bind="$attrs")
    slot(default)
</template>

<style lang="scss" scoped>
.link {
  text-decoration: none;
}
</style>
