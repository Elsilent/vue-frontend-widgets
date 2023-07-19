<template lang="pug">
  .loader-wrapper(:class="wrapperClass")
    .loader-container
      .line-scale-pulse-out
        div
        div
        div
        div
        div
</template>

<script>
export default {
  name: 'LoaderLineScale',
  props: {
    wrapperClass: {
      type: String,
      default: '',
    }
  }
};
</script>

<style lang="scss" scoped>
.line-scale-pulse-out {
  display: flex;
}
</style>
