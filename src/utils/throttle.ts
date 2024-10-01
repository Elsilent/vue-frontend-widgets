export const throttle = (mainFunction: Function, delay: number) => {
  let timer: number | null = null;

  return (...args: any[]) => {
    if (timer === null) {
      mainFunction(...args);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  };
};
