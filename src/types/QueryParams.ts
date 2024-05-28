export type QueryParams<
  Path,
  Params extends unknown[] = []
> = Path extends `${string}?${infer Rest}`
  ? QueryParams<Rest, Params>
  : Path extends `${infer Param}&${infer Rest}`
  ? QueryParams<Rest, AddOptionalParam<Param, Params>>
  : Path extends `${infer Param}`
  ? AddOptionalParam<Param, Params>
  : Params

type AddOptionalParam<
  Param,
  P extends unknown[]
> = Param extends `:${infer NamedParam}`
  ? NamedParam extends `${string}!`
    ? P
    : [...P, NamedParam]
  : P
