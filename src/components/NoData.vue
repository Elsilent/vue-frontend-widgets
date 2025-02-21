<script setup>
import Align from './Align.vue';
import Header from './Header.vue';

const props = defineProps(['title', 'subTitle']);
</script>

<template lang="pug">
Align(horizontal="center" column)
  Header(size="large-6") {{ title }}
  Header(v-if="subTitle") {{ subTitle }}
</template>

<style></style>
