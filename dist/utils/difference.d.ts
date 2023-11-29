export type Difference = 'equal' | 'less-full' | 'greater-full' | {
    less: number;
} | {
    greater: number;
};
export declare const difference: (leftValue: number, rightValue: number) => Difference;
