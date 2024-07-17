export const sortInsensitive = <T extends { toString(): string }>(
  leftValue: T,
  rightValue: T,
): number => {
  const insensitiveLeftValue = leftValue.toString().toLowerCase();
  const insensitiveRightValue = rightValue.toString().toLowerCase();

  if (insensitiveLeftValue > insensitiveRightValue) {
    return 1;
  }

  if (insensitiveLeftValue < insensitiveRightValue) {
    return -1;
  }

  return 0;
};

export const sort = <T>(leftValue: T, rightValue: T): number => {
  if (leftValue > rightValue) {
    return 1;
  }

  if (leftValue < rightValue) {
    return -1;
  }

  return 0;
};

export const sortCallback =
  <T, S>(callback: (value: T) => S) =>
  (leftValue: T, rightValue: T): number => {
    const left = callback(leftValue);
    const right = callback(rightValue);

    if (left > right) {
      return 1;
    }

    if (left < right) {
      return -1;
    }

    return 0;
  };

export const sortMultiple =
  (...callbacks: ((leftValue: any, rightValue: any) => number)[]) =>
  (leftValue: any, rightValue: any) => {
    for (const callback of callbacks) {
      const result = callback(leftValue, rightValue);

      if (result !== 0) {
        return result;
      }
    }

    return 0;
  };
