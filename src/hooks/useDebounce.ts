import { useEffect } from 'react';
import { FunctionWithArguments } from '../models';
import debounce from '../util/debounce';

export const useDebounce = <F extends FunctionWithArguments>(
  fn: F,
  ms: number,
) => {
  const [debouncedFun, clear] = debounce<F>(fn, ms);

  useEffect(() => () => clear(), []);

  return debouncedFun;
};
