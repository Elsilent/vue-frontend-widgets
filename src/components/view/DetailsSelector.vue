<script lang="ts" setup>
import { onUnmounted, ref, toRefs } from 'vue';
import Align from '../container/Align.vue';
import Icon from '../image/Icon.vue';
import Info from '../label/Info.vue';
import BodyPopover from '../container/BodyPopover.vue';

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
const popover = ref<typeof BodyPopover | undefined>();
const root = ref<HTMLElement | undefined>();

const emit = defineEmits<{
  (e: 'hideDetails'): void;
  (e: 'showDetails', kind: string): void;
}>();

const onSelectorBlur = (event: MouseEvent) => {
  if (
    !event.target ||
    root.value?.contains(event.target as HTMLElement) ||
    popover.value?.$el.contains(event.target as HTMLElement)
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
.details-selector-container(
  ref='root',
  @click.stop='() => onSelectorFocus()',
)
  Align.details-selector(vertical='center')
    Info(
      v-if="title",
      mood='important-alt',
      size='small',
    ) {{ title }}
    Icon(
      :value="open ? 'chevron-up' : 'chevron-down'",
      mood='important-alt',
      size='large-2',
    )
  BodyPopover(
    ref='popover',
    :parentNode='root',
    :visible="selectorVisible",
    autoPosition,
    popoverClass="details-selector-popover",
  )
    Info.dropdown-item(
      v-for='(label, kind) in labels',
      @click.stop="() => toggleDetails(kind)",
      contrast,
    ) {{ label }}
</template>

<style lang="scss">
.popover.details-selector-popover {
  min-width: 10rem;
  padding: 0.5rem 0;

  > .dropdown-item {
    cursor: pointer;
    padding: 0.25rem 1.5rem;
  }
}
</style>

<style lang="scss" scoped>
@import '../../styles/colors.scss';

.dropdown-item {
  &:active {
    @include apply-color(background-color, background-accent);
  }

  &:not(:active):hover {
    @include apply-color(background-color, background-lowered);
    @include apply-color(color, white);
  }
}

.details-selector-container {
  > .details-selector {
    @include apply-color(color, text-important-alt);

    cursor: pointer;
    text-decoration: none;

    > .info {
      margin-right: 0.25rem;
      user-select: none;
    }
  }
}
</style>
