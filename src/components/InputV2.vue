<script setup lang="ts">
import { ElInput } from 'element-plus';
</script>

<template lang="pug">
ElInput(
  size="large"
)
  template(v-if="$slots.prefix", #prefix)
    slot(name="prefix")
  template(v-if="$slots.suffix", #suffix)
    slot(name="suffix")
  template(v-if="$slots.prepend", #prepend)
    slot(name="prepend")
  template(v-if="$slots.append", #append)
    slot(name="append")
</template>

<style lang="scss"></style>
