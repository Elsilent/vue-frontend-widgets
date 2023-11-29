export declare const sortInsensitive: <T extends {
    toString(): string;
}>(leftValue: T, rightValue: T) => number;
export declare const sort: <T>(leftValue: T, rightValue: T) => number;
export declare const sortCallback: <T, S>(callback: (value: T) => S) => (leftValue: T, rightValue: T) => number;
export declare const sortMultiple: (...callbacks: ((leftValue: any, rightValue: any) => number)[]) => (leftValue: any, rightValue: any) => number;
