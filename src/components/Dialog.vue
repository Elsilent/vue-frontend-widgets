<script setup lang="ts">
import { ElDialog } from 'element-plus';
</script>

<template lang="pug">
ElDialog(class="defaultModal" align-center)
  template(#header  v-if="$slots.header")
    slot(name="header")
  template(#footer v-if="$slots.footer")
    slot(name="footer")
  slot
</template>

<style lang="scss">
@use 'sass:map';
@import '../styles/spacing';
@import '../styles/colors';

.defaultModal {
  border: 1px solid map.get(map.get($themes, 'light'), 'border-neutral');
  .el-dialog__header {
    padding: $padding-size-normal;
    border-color: map.get(map.get($themes, 'light'), 'border-neutral');
    border-bottom: 1px solid;
  }
  .el-dialog__body {
    padding: $padding-size-normal;
  }
  .el-dialog__footer {
    padding: $padding-size-normal;
    border-color: map.get(map.get($themes, 'light'), 'border-neutral');
    border-top: 1px solid;
    text-align: center;
  }
}
</style>
