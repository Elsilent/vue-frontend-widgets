<template lang="pug">
select.dropdown(
  ref="select2",
  :id="id",
  :multiple="multiple",
  :name="name",
)
  option.dropdown-item(
    v-for="(item, itemIndex) in items",
    :key="itemIndex",
  )
    slot(name="item", :item="item")
</template>

<script>
export default {
  destroyed() {
    $(this.$refs.select2).off().select2('destroy');
  },
  data() {
    return {
      select2Object: undefined,
    };
  },
  methods: {
    initSelect2() {
      const options = {
        tags: this.tags,
        minimumResultsForSearch: this.minimumResultsForSearch,
      };

      if (this.width) {
        options.width = this.width;
      }

      const $select2 = $(this.$refs.select2).off().select2(options);

      this.select2Object = $select2;

      $select2
        .maximizeSelect2Height({
          cushion: 50,
        });

      $select2.val(this.value);

      $select2
        .on('change', () => {
          this.$emit('input', $(this.$refs.select2).val());
          this.$emit('change', $(this.$refs.select2).val());
        });

      if (!$select2) {
        $select2.on('select2:open', () => {
          $('.select2-container--open .select2-dropdown--below').css(
            'display',
            !this.tags || this.items.length > 0
              ? null
              : 'none',
          );
        });
      }
    }
  },
  mounted() {
    this.initSelect2();
  },
  props: {
    id: {
      type: String,
      default: 'select2',
    },
    items: {
      type: [Array, Object],
      required: true,
    },
    minimumResultsForSearch: {
      type: Number,
      default: 10,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: false,
    },
    width: {
      type: [Number, String],
      required: false,
    },
    tags: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [Number, String, Boolean, Array],
      default: null,
    },
  },
  watch: {
    items() {
      this.select2Object.trigger('change');
    },
    options: {
      deep: true,
      handler() {
        this.initSelect2();
      },
    },
    value() {
      this.select2Object.val(this.value).trigger('change');
    },
  },
};
</script>
