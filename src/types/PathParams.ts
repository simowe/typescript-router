export type PathParams<
  Path,
  Params extends unknown[] = []
> = Path extends `/${infer Rest}`
  ? PathParams<Rest, Params>
  : Path extends `${infer Rest}?${string}`
  ? PathParams<Rest, Params>
  : Path extends `${infer Param}/${infer Rest}`
  ? PathParams<Rest, AddPathParam<Param, Params>>
  : Path extends `${infer Param}`
  ? AddPathParam<Param, Params>
  : Params

type AddPathParam<
  Param,
  Params extends unknown[]
> = Param extends `:${infer NamedParam}` ? [...Params, NamedParam] : Params
