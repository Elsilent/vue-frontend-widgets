<script setup lang="ts">
import { ref, computed } from 'vue';
import { ElInput } from 'element-plus';
import Select from './Select.vue';
import Option from './SelectOption.vue';

const props = defineProps(['value', 'select', 'items', 'width']);
defineEmits(['update:value', 'update:select']);

const inputValue = ref(props.value);
const selectValue = ref(props.select);

const minSelectWidth = computed(() => {
  return props.width === 'small' ? 50 : 100;
});
</script>

<template>
  <el-input
    v-model="inputValue"
    @change="(value) => $emit('update:value', { value, operator: selectValue })"
    placeholder=""
    class="input-with-select"
    size="default"
    min="0"
    :style="{ minWidth: `${80 + minSelectWidth}px` }"
  >
    <template #prepend>
      <Select
        v-model="selectValue"
        @change="(value) => $emit('update:select', { operator: value, value: inputValue })"
        :style="`width: ${minSelectWidth}px`"
        size="default"
      >
        <Option
          v-for="(item, key) in items"
          :key="key"
          :value="key"
          :label="item"
          size="default"
          :style="{ textAlign: width === 'small' ? 'center' : 'left' }"
        />
      </Select>
    </template>
  </el-input>
</template>

<style lang="scss" scoped>
.input-with-select {
  :deep(.el-input-group__prepend .el-select__wrapper) {
    background-color: var(--el-fill-color-blank);
  }
  :deep(.el-input-group__prepend .el-select__selected-item) {
    font-weight: bold;
  }
  :deep(.el-select) {
    margin-right: -21px;
  }
}
</style>
