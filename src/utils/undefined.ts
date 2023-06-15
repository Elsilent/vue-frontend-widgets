export class Defined<Value> {
  value: Value;

  constructor(value: Value) {
    this.value = value;
  }

  undefineIf<Args extends any[] = []>(
    constraint: (value: Value, ...args: Args) => boolean,
    ...args: Args
  ) {
    if (constraint(this.value, ...args)) {
      return undefined;
    } else {
      return this.value;
    }
  }
}

export const defined = <Value>(value: Value) => new Defined(value);

export interface PossiblyUndefinedInterface<Value> {
  readonly value?: Value;

  map<NewValue, Args extends any[] = []>(
    callback: (value: Value, ...args: Args) => NewValue,
    ...args: Args
  ): ThisType<NewValue>;

  or(value: Value): Value;

  orElse<Args extends any[] = []>(
    valueMaker: (...args: Args) => Value | undefined,
    ...args: Args
  ): Value | undefined;

  orThrow<Args extends any[] = []>(valueMaker: (...args: Args) => Error, ...args: Args): Value;

  undefinedIf<Args extends any[] = []>(
    contraint: (value: Value, ...args: Args) => boolean,
    ...args: Args
  ): PossiblyUndefinedInterface<Value>;

  undefinedIfOrElse<ConstraintArgs extends any[] = [], MakerArgs extends any[] = []>(
    contraint: (value: Value, ...args: ConstraintArgs) => boolean,
    valueMaker: (value: Value, ...args: MakerArgs) => Value | undefined,
    constraintArgs: ConstraintArgs,
    makerArgs: MakerArgs,
  ): PossiblyUndefinedInterface<Value>;
}

export class DefinitelyUndefined<Value> implements PossiblyUndefinedInterface<Value> {
  readonly value = undefined;

  map<NewValue, Args extends any[] = []>(
    _: (value: Value, ...args: Args) => NewValue,
    ..._args: Args
  ): ThisType<NewValue> {
    return this;
  }

  or(value: Value) {
    return value;
  }

  orElse<Args extends any[] = []>(callback: (...args: Args) => Value | undefined, ...args: Args) {
    return callback(...args);
  }

  orThrow<Args extends any[] = []>(valueMaker: (...args: Args) => Error, ...args: Args): Value {
    throw valueMaker(...args);
  }

  undefinedIf<Args extends any[] = []>(
    _: (value: Value, ...args: Args) => boolean,
    ..._args: Args
  ): PossiblyUndefinedInterface<Value> {
    return this;
  }

  undefinedIfOrElse<ConstraintArgs extends any[] = [], MakerArgs extends any[] = []>(
    _constraint: (value: Value, ...args: ConstraintArgs) => boolean,
    _maker: (value: Value, ...args: MakerArgs) => Value | undefined,
    _constraintArgs: ConstraintArgs,
    _makerArgs: MakerArgs,
  ): PossiblyUndefinedInterface<Value> {
    return this;
  }
}

export class PossiblyUndefined<Value> implements PossiblyUndefinedInterface<Value> {
  value?: Value;

  constructor(value?: Value) {
    this.value = value;
  }

  map<NewValue, Args extends any[] = []>(
    callback: (value: Value, ...args: Args) => NewValue,
    ...args: Args
  ): PossiblyUndefined<NewValue> {
    return this.value === undefined
      ? new PossiblyUndefined()
      : new PossiblyUndefined(callback(this.value, ...args));
  }

  or(value: Value) {
    return this.value === undefined ? value : this.value;
  }

  orElse<Args extends any[] = []>(valueMaker: (...args: Args) => Value, ...args: Args) {
    return this.value === undefined ? valueMaker(...args) : this.value;
  }

  orThrow<Args extends any[] = []>(valueMaker: (...args: Args) => Error, ...args: Args): Value {
    if (this.value === undefined) {
      throw valueMaker(...args);
    }

    return this.value;
  }

  undefinedIf<Args extends any[] = []>(
    constraint: (value: Value, ...args: Args) => boolean,
    ...args: Args
  ): PossiblyUndefinedInterface<Value> {
    return this.value === undefined || constraint(this.value, ...args)
      ? new DefinitelyUndefined()
      : this;
  }

  undefinedIfOrElse<ConstraintArgs extends any[] = [], MakerArgs extends any[] = []>(
    constraint: (value: Value, ...args: ConstraintArgs) => boolean,
    maker: (value: Value, ...args: MakerArgs) => Value | undefined,
    constraintArgs: ConstraintArgs,
    makerArgs: MakerArgs,
  ): PossiblyUndefinedInterface<Value> {
    if (this.value === undefined) {
      return new DefinitelyUndefined();
    }

    if (constraint(this.value, ...constraintArgs)) {
      return new DefinitelyUndefined();
    }

    return new PossiblyUndefined(maker(this.value, ...makerArgs));
  }
}

export const notDefined = <Value>(): PossiblyUndefined<Value> => new PossiblyUndefined();

export const possiblyInstanceOf = <Value, InstanceOf extends Value>(
  value: Value,
  constructor: { new (...args: any[]): InstanceOf },
) =>
  new PossiblyUndefined<InstanceOf>(
    defined(value).undefineIf((value) => !(value instanceof constructor)) as InstanceOf | undefined,
  );

export const possiblyUndefined = <Value>(value: Value | undefined) => new PossiblyUndefined(value);
