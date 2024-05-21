<script setup lang="ts">
import { ElPopover } from 'element-plus';
import 'element-plus/es/components/popover/style/index';
</script>

<template lang="pug">
ElPopover
  template(#reference)
    slot(name="reference")
  slot
</template>
