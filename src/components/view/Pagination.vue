<template lang="pug">
.pagination
  .page(
    v-if="pageNumber > 0"
    @click="() => $emit('update:pageNumber', 0)",
  ) 1
  .page-separator(v-if="pageNumber > 3") …
  .page(
    v-for="pageIndex in visiblePageIndexes",
    @click="() => $emit('update:pageNumber', pageIndex)",
    :class="{ current: pageIndex === pageNumber }",
    :key="pageIndex",
  ) {{ pageIndex + 1 }}
  .page-separator(v-if='pageNumber < pageCount - 4') …
  .page(
    v-if="pageNumber < pageCount - 1",
    @click="() => $emit('update:pageNumber', pageCount - 1)",
  ) {{ pageCount }}
  .page-size-label {{ $t('common.label.show') }}
  Dropdown.page-size-selector(
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
    pageCount() {
      return Math.ceil(this.rowCount / this.currentPageSize);
    },
    visiblePageIndexes() {
      const visiblePageIndexes = [];

      if (this.pageNumber > 2) {
        visiblePageIndexes.push(this.pageNumber - 2);
      }

      if (this.pageNumber > 1) {
        visiblePageIndexes.push(this.pageNumber - 1);
      }

      visiblePageIndexes.push(this.pageNumber);

      if (this.pageNumber < this.pageCount - 2) {
        visiblePageIndexes.push(this.pageNumber + 1);
      }

      if (this.pageNumber < this.pageCount - 3) {
        visiblePageIndexes.push(this.pageNumber + 2);
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
