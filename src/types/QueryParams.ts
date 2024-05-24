export type QueryParams<
  T,
  P extends unknown[] = []
> = T extends `${string}?${infer Rest}`
  ? QueryParams<Rest, P>
  : T extends `:${infer Param}&${infer Rest}`
  ? QueryParams<Rest, [...P, Param]>
  : T extends `:${infer Param}`
  ? [...P, Param]
  : T extends `${string}&${infer Rest}`
  ? QueryParams<Rest, P>
  : P
