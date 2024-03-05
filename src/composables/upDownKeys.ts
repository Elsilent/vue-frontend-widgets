import type { Ref } from 'vue';
import { ref, toValue } from 'vue';

export function useUpDownKeys({ length }: { length: number | Ref<number> }) {
  const selectedItem = ref(0);

  const clearSelectedItem = () => (selectedItem.value = 0);

  const onKeypressDown = () => {
    if (selectedItem.value < toValue(length)) {
      selectedItem.value++;
    }
  };

  const onKeypressUp = () => {
    if (selectedItem.value > 0) {
      selectedItem.value--;
    }
  };

  return { selectedItem, onKeypressDown, onKeypressUp, clearSelectedItem };
}
