/* eslint-disable @typescript-eslint/no-explicit-any */
export type AnyFunction = (...args: any[]) => any;

type Call = {
  arguments: unknown[];
  result: unknown;
  target: unknown;
  this: unknown;
};

export type MockedFunction<T extends AnyFunction> = T & {
  mock?: { calls: Call[] };
};
