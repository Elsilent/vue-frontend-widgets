export declare class Match<Value, Result> {
    private matched;
    result?: Result;
    value: Value;
    constructor(value: Value);
    get done(): Result;
    or(callback: (value: Value) => Result): this;
    when(value: Value, callback: (value: Value) => Result): this;
    whenAny(values: Value[], callback: (value: Value) => Result): this;
}
export default function match<Value, ReturnType>(value: Value): Match<Value, ReturnType>;
