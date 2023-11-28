<script lang="ts" setup>
import { onUnmounted, ref, toRefs } from 'vue';
import Popover from '../container/Popover.vue';

const props = withDefaults(
  defineProps<{
    labels: Record<string, string>;
    open?: boolean;
    title?: string;
  }>(),
  {
    open: false,
  },
);

const { labels, open, title } = toRefs(props);

const selectorVisible = ref(false);
const root = ref<HTMLElement | undefined>();
const selectorContents = ref<HTMLElement | undefined>();

const emit = defineEmits<{
  (e: 'hideDetails'): void;
  (e: 'showDetails', kind: string): void;
}>();

const onSelectorBlur = (event: MouseEvent) => {
  if (
    !event.target ||
    root.value?.contains(event.target as HTMLElement) ||
    selectorContents.value?.contains(event.target as HTMLElement)
  ) {
    return;
  }

  selectorVisible.value = false;

  window.removeEventListener('mouseup', onSelectorBlur);
};

const onSelectorFocus = () => {
  if (open.value) {
    emit('hideDetails');

    return;
  }

  if (selectorVisible.value) {
    selectorVisible.value = false;

    return;
  }

  selectorVisible.value = true;

  window.addEventListener('mouseup', onSelectorBlur);
};

const toggleDetails = (kind: string) => {
  selectorVisible.value = false;

  if (open.value) {
    emit('hideDetails');

    return;
  }

  emit('showDetails', kind);
};

onUnmounted(() => {
  window.removeEventListener('mouseup', onSelectorBlur);
});
</script>

<template lang="pug">
.details-selector(@click.stop='() => onSelectorFocus()')
  span(v-if="title") {{ title }}
  i.la(:class="open ? 'la-angle-right' : 'la-angle-down'")
  Popover(
    :visible="selectorVisible",
    parentClass="details-selector",
    popoverClass="details-selector-popover",
  )
    div(ref='selectorContents')
      .dropdown-item(
        v-for='(label, kind) in labels',
        @click.stop="() => toggleDetails(kind)",
      ) {{ label }}
</template>

<style lang="scss">
.details-selector-popover {
  min-width: 10rem;
  padding: 0.5rem 0;

  > div {
    > .dropdown-item {
      cursor: pointer;
    }
  }
}
</style>

<style lang="scss" scoped>
@import '../../styles/colors.scss';

.details-selector {
  @include apply-color(color, text-important-alt);

  cursor: pointer;
  position: relative;
  text-decoration: none;

  > span {
    margin-right: 0.5rem;
    user-select: none;
  }

  > i {
    font-size: 0.8rem;
  }
}
</style>
