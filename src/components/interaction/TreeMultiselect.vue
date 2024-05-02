<template lang="pug">
.treeselect-container
  template(v-if="name !== undefined")
    input(v-if="!values || values.length === 0", :name="`${name}[]`", type="hidden")
    input(
      v-for="value in values",
      :name="`${name}[]`",
      :value="value",
      type="hidden",
    )
  div(ref="treeselect")
</template>

<script lang="ts">
import Treeselect from 'treeselectjs';

export default {
  data() {
    return {
      treeselect: undefined,
      values: undefined,
    };
  },
  mounted() {
    this.values = this.modelValue;
    this.treeselect = new Treeselect({
      parentHtmlContainer: this.$refs.treeselect,
      options: this.items,
      value: this.modelValue,
      appendToBody: true,
      isGroupedValue: true,
      inputCallback: (modelValue) => {
        this.$emit('update:modelValue', modelValue);

        this.values = [...modelValue];
      },
    });
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: Array,
      default: () => [],
    },
    name: {
      type: String,
      required: false,
    },
  },
  watch: {
    items() {
      this.treeselect.options = this.items;

      this.treeselect.mount();
    },
    modelValue() {
      this.values = [...this.modelValue];

      this.treeselect.updateValue(this.modelValue);
    },
  },
}
</script>

<style lang="scss">
.treeselect-input {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  min-height: 38px;
  padding: 2px 4px;
  padding-right: 40px;
  position: relative;
  min-height: 40px;
  background-color: #ffffff;
  cursor: text;
}

.treeselect-input--unsearchable {
  cursor: default;
}

.treeselect-input--unsearchable .treeselect-input__edit {
  caret-color: transparent;
  cursor: default;
}

.treeselect-input--unsearchable .treeselect-input__edit:focus {
  position: absolute;
  z-index: -1;
  left: 0;
  min-width: 0;
  width: 0;
}

.treeselect-input--value-not-selected .treeselect-input__edit,
.treeselect-input--value-not-selected.treeselect-input--unsearchable .treeselect-input__edit:focus {
  z-index: auto;
  position: static;
  width: 100%;
  max-width: 100%;
}

.treeselect-input--value-not-selected .treeselect-input__tags {
  gap: 0;
}

/* rtl */
[dir='rtl'] .treeselect-input {
  padding-right: 4px;
  padding-left: 40px;
}

[dir='rtl'] .treeselect-input__operators {
  right: unset;
  left: 2px;
}
/* rtl end */

.treeselect-input__tags {
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
}

.treeselect-input__tags-element {
  color: white;
  display: inline-flex;
  align-items: center;
  background-color: #666ee8;
  border: 1px solid #3a44e1;
  cursor: pointer;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.8;
  max-width: 100%;
  box-sizing: border-box;
}

.treeselect-input__tags-name {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.treeselect-input__tags-cross {
  display: flex;
  margin-left: 2px;
}

.treeselect-input__tags-cross::after {
  color: white;
  content: '×';
  cursor: pointer;
  display: block;
  font-weight: 700;
  margin-left: 5px;
}

.treeselect-input__tags-cross svg {
  display: none;
}

.treeselect-input__tags-count {
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.treeselect-input__edit {
  flex: 1;
  border: none;
  font-size: 14px;
  text-overflow: ellipsis;

  width: 100%;
  max-width: calc(100% - 45px);
  padding: 0;

  /* Hide input for user */
  position: absolute;
  z-index: -1;
  min-width: 0;
}

.treeselect-input__edit:focus {
  outline: none;
  min-width: 30px;
  max-width: 100%;

  /* Show input for user */
  z-index: auto;
  position: static;
}

.treeselect-input__operators {
  display: flex;
  max-width: 40px;
  position: absolute;
  right: 2px;
}

.treeselect-input__clear {
  display: flex;
  cursor: pointer;
}

.treeselect-input__clear svg {
  display: none;
}

.treeselect-input__clear::after {
  content: '×';
  display: block;
  cursor: pointer;
  font-weight: 700;
  margin-right: 10px;
}

.treeselect-input__arrow {
  display: none;
}

.treeselect-input__arrow svg {
  stroke: #c5c7cb;
  width: 20px;
  min-width: 20px;
  height: 20px;
}

.treeselect-input__arrow:hover svg {
  stroke: #838790;
}

.treeselect-list {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #d7dde4;
  overflow-y: auto;
  background-color: #ffffff;
  max-height: 300px;
}

.treeselect-list__group-container {
  box-sizing: border-box;
}

.treeselect-list__item {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  height: 30px;
}

.treeselect-list__item:focus {
  outline: none;
}

.treeselect-list__item--focused {
  background-color: #e0e0e0;
}

.treeselect-list__item--hidden {
  display: none;
}

.treeselect-list__item-icon {
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 20px;
  width: 20px;
  min-width: 20px;
}

.treeselect-list__item-icon svg {
  pointer-events: none;
  width: 100%;
  height: 100%;
  stroke: #c5c7cb;
}

.treeselect-list__item-icon * {
  pointer-events: none;
}

.treeselect-list__item-icon:hover svg {
  stroke: #838790;
}

.treeselect-list__item-checkbox-container {
  width: 20px;
  height: 20px;
  min-width: 20px;
  border: 1px solid #d7dde4;
  border-radius: 3px;
  position: relative;
  background-color: #ffffff;
  pointer-events: none;
  box-sizing: border-box;
}

.treeselect-list__item-checkbox-container svg {
  position: absolute;
  height: 100%;
  width: 100%;
}

.treeselect-list__item-checkbox {
  margin: 0;
  width: 0;
  height: 0;
  pointer-events: none;
  position: absolute;
  z-index: -1;
}

.treeselect-list__item-checkbox-icon {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  text-align: left;
}

.treeselect-list__item-label {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: keep-all;
  white-space: nowrap;
  font-size: 14px;
  padding-left: 5px;
  pointer-events: none;
  text-align: left;
}

.treeselect-list__item-label-counter {
  margin-left: 3px;
  color: #838790;
  font-size: 13px;
}

.treeselect-list__empty {
  display: flex;
  align-items: center;
  height: 30px;
  padding-left: 4px;
}

.treeselect-list__empty--hidden {
  display: none;
}

.treeselect-list__empty-icon {
  display: flex;
  align-items: center;
}

.treeselect-list__empty-text {
  font-size: 14px;
  padding-left: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: keep-all;
  white-space: nowrap;
}

.treeselect-list__slot {
  position: sticky;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  bottom: 0;
  background-color: #ffffff;
}

/* single-select styles */
.treeselect-list.treeselect-list--single-select .treeselect-list__item-checkbox-container {
  display: none;
}

/* disabled-branch-node styles */
.treeselect-list.treeselect-list--disabled-branch-node
  .treeselect-list__item--group
  .treeselect-list__item-checkbox-container {
  display: none;
}

/* checked styles */
.treeselect-list__item--checked {
  background-color: #e9f1f1;
}

.treeselect-list.treeselect-list--single-select .treeselect-list__item--checked {
  background-color: transparent;
}

.treeselect-list.treeselect-list--single-select .treeselect-list__item--single-selected {
  background-color: #e9f1f1;
}

.treeselect-list__item .treeselect-list__item-checkbox-container svg {
  stroke: transparent;
}

.treeselect-list__item--checked .treeselect-list__item-checkbox-container svg,
.treeselect-list__item--partial-checked .treeselect-list__item-checkbox-container svg {
  stroke: #ffffff;
}

.treeselect-list__item--checked .treeselect-list__item-checkbox-container,
.treeselect-list__item--partial-checked .treeselect-list__item-checkbox-container {
  background-color: #52c67e;
}

.treeselect-list__item--disabled .treeselect-list__item-checkbox-container {
  background-color: #e9f1f1;
}

.treeselect-list__item--disabled .treeselect-list__item-label {
  color: #c5c7cb;
}

.treeselect-list__item-label {
  margin: 0 !important;
}

/* rtl */
[dir='rtl'] .treeselect-list__item-checkbox-icon {
  text-align: right;
}

[dir='rtl'] .treeselect-list__item-label {
  text-align: right;
  padding-right: 5px;
  padding-left: unset;
}

[dir='rtl'] .treeselect-list__item--closed .treeselect-list__item-icon {
  transform: rotate(180deg);
}

[dir='rtl'] .treeselect-list__empty {
  padding-right: 4px;
  padding-left: unset;
}

[dir='rtl'] .treeselect-list__empty-text {
  padding-right: 5px;
  padding-left: unset;
}
/* rtl end */

.treeselect {
  width: 100%;
  position: relative;
  box-sizing: border-box;
}

.treeselect--disabled {
  pointer-events: none;
}

.treeselect-list {
  position: absolute;
  left: 0;
  border-radius: 4px;
  box-sizing: border-box;
  z-index: 1000;
}

.treeselect .treeselect-list {
  position: absolute;
}

.treeselect .treeselect-list--static {
  position: static;
}

.treeselect-input--opened.treeselect-input--top {
  border-top-color: transparent;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.treeselect-input--opened.treeselect-input--bottom {
  border-bottom-color: transparent;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.treeselect-list--top,
.treeselect-list--top-to-body {
  border-bottom-color: #d7dde4;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.treeselect-list--bottom,
.treeselect-list--bottom-to-body {
  border-top-color: #d7dde4;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.treeselect-list--top {
  left: 0;
  bottom: 100%;
}

.treeselect-list--bottom {
  left: 0;
  top: 100%;
}
</style>
