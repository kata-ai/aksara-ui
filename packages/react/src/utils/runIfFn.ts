/* eslint-disable @typescript-eslint/ban-types */

function isFunction(value: any): value is Function {
  return typeof value === 'function';
}

export default function runIfFn<Result, Args>(valueOrFn: Result | ((...fnArgs: Args[]) => Result), ...args: Args[]) {
  return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}
