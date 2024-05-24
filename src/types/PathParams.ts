export type PathParams<T, P extends unknown[] = []> = T extends `/${infer Rest}`
  ? PathParams<Rest, P>
  : T extends `:${infer Param}/${infer Rest}`
  ? PathParams<Rest, [...P, Param]>
  : T extends `:${infer Param}`
  ? [...P, Param]
  : T extends `${string}/${infer Rest}`
  ? PathParams<Rest, P>
  : P
