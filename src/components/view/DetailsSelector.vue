<template lang="pug">
.details-selector(@click.stop='() => onSelectorFocus()')
  span {{ $t('common.label.detailing') }}
  i.la(:class="open ? 'la-angle-right' : 'la-angle-down'")
  Popover(
    :visible="selectorVisible",
    parentClass="details-selector",
    popoverClass="details-selector-popover",
  )
    div(ref='selectorContents')
      .dropdown-item(
        v-for='{ kind, label } in items',
        @click.stop="() => toggleDetails(kind)",
        :key='kind',
      ) {{ $t(label) }}
</template>

<script>
import Popover from '../container/Popover.vue';

export default {
  components: {
    Popover,
  },
  computed: {
    items() {
      return this.kinds.map((kind) => ({
        kind,
        label: `common.label.${kind}`,
      }));
    },
  },
  data() {
    return {
      selectorVisible: false,
    };
  },
  methods: {
    onSelectorBlur(event) {
      if (this.$el.contains(event.target) || this.$refs.selectorContents.contains(event.target)) {
        return;
      }

      this.selectorVisible = false;

      window.removeEventListener('mouseup', this.onSelectorBlur);
    },
    onSelectorFocus() {
      if (this.open) {
        this.$emit('hideDetails');

        return;
      }

      if (this.selectorVisible) {
        this.selectorVisible = false;

        return;
      }

      this.selectorVisible = true;

      window.addEventListener('mouseup', this.onSelectorBlur);
    },
    toggleDetails(kind) {
      this.selectorVisible = false;

      if (this.open) {
        this.$emit('hideDetails');

        return;
      }

      this.$emit('showDetails', kind);
    },
  },
  props: {
    kinds: {
      type: Array,
      required: true,
    },
    open: {
      type: Boolean,
      default: false,
    },
  }
}
</script>

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
  color: $color-active;
  cursor: pointer;
  font-size: inherit;
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
