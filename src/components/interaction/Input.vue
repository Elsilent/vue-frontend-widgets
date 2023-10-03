<script>
export default {
    props: {
        modelValue: {
            type: [Number, String],
            required: false,
        },
        type: {
            type: String,
            required: false,
        },
    },
}
</script>

<template lang="pug">
input.form-control(
  @blur="(event) => $emit('blur', event)",
  @input="(event) => $emit('update:modelValue', event.target.value)",
  @focus="(event) => $emit('focus', event)",
  @keydown="(event) => $emit('keydown', event)",
  @keyup="(event) => $emit('keyup', event)",
  @mouseup="(event) => $emit('mouseup', event)",
  :type="type",
  :value="modelValue",
)
</template>
