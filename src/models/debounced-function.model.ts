import { FunctionWithArguments } from './function-with-arguments.model';

export interface DebouncedFunction<F extends FunctionWithArguments> {
  (...args: Parameters<F>): Promise<ReturnType<F>>;
}
