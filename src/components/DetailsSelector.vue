<script lang="ts" setup>
import { ref, toRefs } from 'vue';
import Align from './Align.vue';
import Icon from './Icon.vue';
import Info from './Info.vue';
import { ElPopover, ClickOutside as vClickOutside } from 'element-plus';

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
const popover = ref<typeof ElPopover | undefined>();

const emit = defineEmits<{
  (e: 'hideDetails'): void;
  (e: 'showDetails', kind: string): void;
}>();

const onSelectorFocus = () => {
  if (open.value) {
    emit('hideDetails');
    return;
  }

  selectorVisible.value = !selectorVisible.value;
};

const toggleDetails = (kind: string) => {
  selectorVisible.value = false;

  if (open.value) {
    emit('hideDetails');
    return;
  }
  emit('showDetails', kind);
};

const onClickOutside = () => {
  selectorVisible.value = false;
};
</script>

<template lang="pug">
.details-selector-container(
  @click='onSelectorFocus'
)
  ElPopover(
    :show-arrow="false"
    popper-class="details-selector-popover"
    :persistent="false"
    :visible="selectorVisible"
    :hide-after="0"
    :offset="0"
    ref="popover"
  )
    template(#reference)
      Align.details-selector(vertical='center' v-click-outside="onClickOutside")
        Info(
          v-if="title",
          mood='important-alt',
          size='small',
        ) {{ title }}
        Icon(
          :value="open ? 'chevron-up' : 'chevron-down'",
          mood='important-alt',
          size="small-2",
        )
    Info.dropdown-item(
      v-for='(label, kind) in labels',
      @click.stop="() => toggleDetails(kind)",
      contrast,
    ) {{ label }}

</template>

<style lang="scss">
@use 'sass:map';
@import '../styles/colors';
@import '../styles/spacing';

.details-selector-popover {
  --el-popover-padding: 0.5rem 0;
  min-width: 10rem;

  .dropdown-item {
    transition: background-color 0.3s;
    cursor: pointer;
    padding: 0.25rem 1.5rem;
    text-align: left;

    &:active {
      background-color: map.get(map.get($themes, 'light'), 'background-accent');
    }

    &:not(:active):hover {
      background-color: map.get(map.get($themes, 'light'), 'background-lowered');
    }
  }
}

.details-selector {
  color: map.get(map.get($themes, 'light'), 'text-important-alt');
  cursor: pointer;
  text-decoration: none;

  > .info-text {
    margin-right: 0.25rem;
    user-select: none;
  }
}
</style>
