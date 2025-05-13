<script lang="ts" setup>
import { computed, ref, toRefs, watch } from 'vue';
import Toast from './Toast.vue';
import type { Toast as IToast } from '../utils/interface/toast';

const props = defineProps<{
  toasts: IToast[];
}>();

const emit = defineEmits<{
  (e: 'removeToast', id: number): void;
}>();

const { toasts } = toRefs(props);

const reversedToasts = computed<[number, IToast][]>(() =>
  Object.entries(toasts.value)
    .reverse()
    .map(([i, t]) => [Number(i), t]),
);

const removedToastIds = ref<number[]>([]);

const toastTimeouts = ref<Record<number, number>>([]);

const removeToast = (id: number) => {
  if (removedToastIds.value.includes(id)) {
    return;
  }

  removedToastIds.value.push(id);
  clearTimeout(toastTimeouts.value[id]);

  delete toastTimeouts.value[id];

  window.setTimeout(() => {
    emit('removeToast', id);

    removedToastIds.value = removedToastIds.value.filter((toastId) => toastId !== id);
  }, 500);
};

watch(
  toasts,
  () => {
    for (const toast of toasts.value) {
      if (!(toast.id in toastTimeouts.value)) {
        toastTimeouts.value[toast.id] = window.setTimeout(() => {
          removeToast(toast.id);
        }, 5000);
      }
    }
  },
  { deep: true, immediate: true },
);
</script>

<template lang="pug">
.toasts
  Toast(
    v-for="[index, toast] in reversedToasts",
    @click="() => removeToast(index)",
    :class="{ 'fade-out': removedToastIds.includes(toast.id) }",
    :icon="toast.icon",
    :iconBackend="toast.iconBackend",
    :key="`toast-${toast.id}`",
    :mood="toast.mood",
    :message="toast.message",
    :title="toast.title",
  )
</template>

<style lang="scss" scoped>
@use '../styles/spacing' as spacing;

@include spacing.default-spacing;

.toasts {
  pointer-events: none;

  > .toast {
    max-width: 400px;
    opacity: 0.9;
    pointer-events: all;
    transition-property: background-color, opacity;

    &.fade-out {
      @keyframes fade-out {
        from {
          opacity: 0.9;
        }

        to {
          opacity: 0;
        }
      }

      animation: fade-out 0.5s;
      animation-iteration-count: 1;
    }

    &:not(.fade-out) {
      @keyframes fade-in {
        from {
          opacity: 0;
        }

        to {
          opacity: 0.9;
        }
      }

      animation: fade-in 0.5s;
      animation-iteration-count: 1;
    }
  }
}
</style>
