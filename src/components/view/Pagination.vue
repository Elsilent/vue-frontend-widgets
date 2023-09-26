<template lang="pug">
.pagination
  template(v-if="rowCount > currentPageSize")
    .page(
      v-if="pageNumber > 0"
      @click="() => $emit('update:pageNumber', 0)",
    ) 1
    .page-separator(v-if="pageNumber > pageRadius") …
    .page(
      v-for="pageIndex in visiblePageIndexes",
      @click="() => $emit('update:pageNumber', pageIndex)",
      :class="{ current: pageIndex === pageNumber }",
      :key="pageIndex",
    ) {{ pageIndex + 1 }}
    .page-separator(v-if='pageNumber < pageCount - pageRadius - 1') …
    .page(
      v-if="pageNumber < pageCount - 1",
      @click="() => $emit('update:pageNumber', pageCount - 1)",
    ) {{ pageCount }}
    .page-size-label {{ $t('common.label.show') }}
  Dropdown.page-size-selector(
    v-if="rowCount > minPageSize",
    @change="(value) => updatePageSize(value)",
    :id="id",
    :items="pageSizes",
    :value="currentPageSize",
  )
    template(#item="{ item }") {{ item }}
</template>

<script>
import Dropdown from '../interaction/Dropdown.vue';

export default {
  components: {
    Dropdown,
  },
  computed: {
    minPageSize() {
      return Math.min(...this.pageSizes);
    },
    pageCount() {
      return Math.ceil(this.rowCount / this.currentPageSize);
    },
    visiblePageIndexes() {
      const visiblePageIndexes = [];

      for (let i = this.pageRadius - 1; i > 0; i++) {
        if (this.pageNumber > i) {
          visiblePageIndexes.push(this.pageNumber - i);
        }
      }

      visiblePageIndexes.push(this.pageNumber);

      for (let i = 1; i < this.pageRadius; i++) {
        if (this.pageNumber < this.pageCount - i - 1) {
          visiblePageIndexes.push(this.pageNumber + i);
        }
      }

      return visiblePageIndexes;
    },
  },
  methods: {
    updatePageSize(newPageSize) {
      newPageSize = parseInt(newPageSize);

      if (this.currentPageSize !== newPageSize) {
        this.$emit('update:currentPageSize', newPageSize);
      }
    }
  },
  props: {
    currentPageSize: {
      type: Number,
      required: true,
    },
    id: {
      type: String,
      default: 'pagination',
    },
    pageNumber: {
      type: Number,
      required: true,
    },
    /**
     * Max amount of pages on left and right to the current page including current page
     *
     * Example of display for pageRadius = 3 with currentPageSize = 5:
     * 
     * 1 .. 3 4 5 6 7 .. <nth>
     */
    pageRadius: {
      type: Number,
      default: 3,
    },
    pageSizes: {
      type: Array,
      default: () => [20, 50, 100, 500],
    },
    rowCount: {
      type: Number,
      required: true,
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/colors.scss';

.pagination {
  align-items: center;
  display: flex;

  > .page {
    align-items: center;
    border: 1px solid transparent;
    border-radius: 3px;
    color: $color-important-alt;
    cursor: pointer;
    display: flex;
    height: 100%;
    padding: 0.5rem 0.75rem;

    &.current {
      border-color: $color-important-alt;
      cursor: default;
    }
  }

  > .page-separator {
    align-items: center;
    color: $color-label;
    cursor: default;
    display: flex;
    padding: 0.5rem 0.75rem;
  }

  > .page-size-label {
    color: $color-label;
    margin: 0 0.75rem;
  }
}
</style>
