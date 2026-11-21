export type AnyFunction = (...args: never[]) => unknown;

type Call = {
  arguments: unknown[];
  result: unknown;
  target: unknown;
  this: unknown;
};

export type MockedFunction<T extends AnyFunction> = T & {
  mock?: { calls: Call[] };
};
