<script lang="ts" setup>
import { toRefs } from 'vue';
import Align from '../container/Align.vue';
import Card from '../container/Card.vue';
import Icon from '../image/Icon.vue';
import Info from '../label/Info.vue';
import type { IconBackend } from '../../utils/enum/icon_backend';
import type { Mood } from '../../utils/enum/mood';

const props = defineProps<{
  icon: string;
  iconBackend?: IconBackend;
  message: string;
  mood: Mood;
  title: string;
}>();

const { icon, iconBackend, message, mood, title } = toRefs(props);
</script>

<template lang="pug">
Card.toast(:class="{ [`mood-background-${mood}`]: mood }")
  Align(vertical="center")
    Icon(
      :backend="iconBackend",
      :value="icon",
      mood="white",
      size="large-6",
    )
    Align(column)
      Info(
        important,
        mood="white",
      ) {{ title }}
      Info(mood="white") {{ message }}
</template>

<style lang="scss" scoped>
@import '../../styles/mood.scss';
@import '../../styles/spacing.scss';

@include default-spacing;

.card {
  @include apply-mood;
}
</style>
