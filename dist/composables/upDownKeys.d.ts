import type { Ref } from 'vue';
export declare function useUpDownKeys({ length }: {
    length: number | Ref<number>;
}): {
    selectedItem: any;
    onKeypressDown: () => void;
    onKeypressUp: () => void;
    clearSelectedItem: () => number;
};
