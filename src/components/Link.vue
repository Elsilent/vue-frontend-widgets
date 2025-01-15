<script lang="ts" setup>
import { toRefs } from 'vue';
import Info from './Info.vue';

export interface Props {
  to: string | URL;
  isExternal?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isExternal: false,
});
const { to } = toRefs(props);
</script>

<template lang="pug">
a.link(
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
