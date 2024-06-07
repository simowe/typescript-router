export type RequiredQueryParams<
  Path,
  Params extends unknown[] = []
> = Path extends `${string}?${infer Rest}`
  ? RequiredQueryParams<Rest, Params>
  : Path extends `${infer Param}&${infer Rest}`
  ? RequiredQueryParams<Rest, AddRequiredParam<Param, Params>>
  : Path extends `${infer Param}`
  ? AddRequiredParam<Param, Params>
  : Params

type AddRequiredParam<
  Param,
  P extends unknown[]
> = Param extends `:${infer NamedParam}`
  ? NamedParam extends `${infer RequiredParam}!`
    ? [...P, RequiredParam]
    : P
  : P
