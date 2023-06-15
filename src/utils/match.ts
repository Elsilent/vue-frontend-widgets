export class Match<Value, Result> {
  private matched = false;
  result?: Result;
  value: Value;

  constructor(value: Value) {
    this.value = value;
  }

  get done() {
    return this.result;
  }

  or(callback: (value: Value) => Result) {
    if (!this.matched) {
      this.result = callback(this.value);
    }

    return this;
  }

  when(value: Value, callback: (value: Value) => Result) {
    if (this.value === value) {
      this.matched = true;
      this.result = callback(this.value);
    }

    return this;
  }

  whenAny(values: Value[], callback: (value: Value) => Result) {
    if (values.includes(this.value)) {
      this.matched = true;
      this.result = callback(this.value);
    }

    return this;
  }
}

export default function match<Value, ReturnType>(value: Value): Match<Value, ReturnType> {
  return new Match(value);
}
