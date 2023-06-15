<script lang="ts" setup>
import { toRefs } from 'vue';
import Dropdown from '../interaction/Dropdown.vue';
import GenericForm from '../container/Form.vue';
import Info from '../label/Info.vue';
import Input from '../interaction/Input.vue';
import type { Field } from '../../utils/type/form';

const props = defineProps<{
  fields: Record<string, Field>;
  values: Record<string, any>;
}>();

const { fields } = toRefs(props);
</script>

<template lang="pug">
GenericForm(
  :fields="fields",
  :values="values",
)
  template(#field(dropdown)="{ code, label, options, value }")
    Info.label(v-if="label") {{ label }}
    Dropdown(
      @update:modelValue="(value) => $emit(`update:${code}`, value)",
      :items="options.items",
      :modelValue="value",
    )
  template(#field(info)="{ label }")
    Info {{ label }}
  template(#field(input)="{ code, label, value }")
    Info.label(v-if="label") {{ label }}
    Input(
      @update:modelValue="(value) => $emit(`update:${code}`, value)",
      :modelValue="value",
    )
</template>

<style lang="scss" scoped>
@import '../../styles/spacing.scss';

@include default-spacing;
</style>
