import { DebouncedFunction } from './debounced-function.model';
import { FunctionWithArguments } from './function-with-arguments.model';

export interface DebounceReturn<F extends FunctionWithArguments>
  extends Array<DebouncedFunction<F> | (() => void)> {
  0: (...args: Parameters<F>) => Promise<ReturnType<F>>;
  1: () => void;
}
