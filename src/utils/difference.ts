export type Difference
  = 'equal'
  | 'less-full'
  | 'greater-full'
  | { less: number }
  | { greater: number };

const fullThreshold = 0.01;

export const difference = (leftValue: number, rightValue: number): Difference => {
  if (Math.abs(leftValue) < fullThreshold) {
    if (Math.abs(rightValue) < fullThreshold) {
      return 'equal';
    } else {
      return 'less-full';
    }
  }

  if (Math.abs(rightValue) < fullThreshold) {
    return 'greater-full';
  }

  const difference = (leftValue - rightValue) / rightValue;

  if (leftValue > rightValue) {
    return { greater: difference };
  } else {
    return { less: difference };
  }
};
