<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import UndefinedIconBackendError from '../../utils/error/component/icon/undefined_icon_backend';
import type { IconBackend } from '../../utils/enum/icon_backend';
import type { Elevation } from '../../utils/enum/elevation';
import type { Size } from '../../utils/enum/size';
import match from '../../utils/match';
import type { Mood } from '../../utils/enum/mood';

const props = withDefaults(
  defineProps<{
    backend?: IconBackend;
    elevation?: Elevation;
    mood?: Mood | 'white';
    size?: Size;
    value: String;
  }>(),
  {
    backend: 'boxicons',
    elevation: 'normal',
    size: 'normal',
  },
);

const { backend, elevation, mood, size, value } = toRefs(props);

const iconClasses = computed(
  () =>
    match<IconBackend, Record<string, boolean>>(backend.value)
      .when('boxicons', () => ({ bx: true, [`bx-${value.value}`]: true }))
      .when('boxicons-logo', () => ({ bx: true, [`bxl-${value.value}`]: true }))
      .when('boxicons-solid', () => ({ bx: true, [`bxs-${value.value}`]: true }))
      .when('flag-icons', () => ({ fi: true, [`fi-${value.value}`]: true }))
      .when('flag-icons-square', () => ({ fi: true, fis: true, [`fi-${value.value}`]: true }))
      .or((backend) => {
        throw new UndefinedIconBackendError(backend);
      }).done!,
);

const classes = computed(() => ({
  ...iconClasses.value,
  [`elevation-${elevation.value}`]: !mood?.value,
  [`mood-text-${mood?.value}`]: mood?.value,
  [`size-${size.value}`]: true,
}));
</script>

<template lang="pug">
i.icon(:class='classes')
</template>

<style lang="scss" scoped>
@import 'boxicons/css/boxicons.css';
@import 'flag-icons/css/flag-icons.css';
@import '../../styles/mood.scss';

.icon {
  @import '../../styles/elevation.scss';
  @import '../../styles/size.scss';

  @include apply-mood;

  &.mood-text-white {
    @include apply-color(color, white);
  }
}
</style>
