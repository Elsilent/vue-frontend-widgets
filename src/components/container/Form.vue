<script lang="ts" setup>
import Align from './Align.vue';
import type { Field } from '../../utils/type/form';

defineProps<{
  fields: Record<string, Field>;
  values: Record<string, any>;
}>();
</script>

<template lang="pug">
Align(column)
  template(v-for="(field, code) in fields")
    slot(
      :name="`field(${field.type})`",
      :code="code",
      :label="field.label",
      :options="field.options",
      :value="values[code]",
    )
</template>

<style lang="scss" scoped>
@import '../../styles/spacing.scss';

@include default-spacing;
</style>
