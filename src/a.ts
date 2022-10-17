export type Program<TReturn> = Generator<unknown, TReturn, unknown>;

function partialCall4<TProgramArray extends Array<Program<unknown>>>(
  ...args: [...TProgramArray]
): ExtractProgramArrayReturnTypeTuple<TProgramArray> {
  return args as any;
}

type ExtractProgramArrayReturnTypeTuple<T extends ReadonlyArray<Program<any>>> = {
  [K in keyof T]: T[K] extends Program<infer V> ? V : never;
};
