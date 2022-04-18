import { DebouncedFunction, FunctionWithArguments } from '../models';

const debounce = <F extends FunctionWithArguments>(
  callback: F,
  delay = 666,
): [DebouncedFunction<F>, () => void] => {
  let timeout: ReturnType<typeof setTimeout>;

  const debouncedFunc: DebouncedFunction<F> = (...args) =>
    new Promise(resolve => {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => {
        resolve(callback(...(args as unknown[])));
      }, delay);
    });

  const clear = () => clearTimeout(timeout);

  return [debouncedFunc, clear];
};
export default debounce;
