import { ReactNode } from "react"

type Route<T, N> = {
  name: N
  path: T
  render: (params: ViewParams<T>) => ReactNode | Promise<ReactNode>
}

type ExtractParams<T, P extends unknown[]> = T extends `/${infer Rest}`
  ? ExtractParams<Rest, P>
  : T extends `${infer Rest}?${string}`
  ? ExtractParams<Rest, P>
  : T extends `:${infer Param}/${infer Rest}`
  ? ExtractParams<Rest, [...P, Param]>
  : T extends `:${infer Param}`
  ? [...P, Param]
  : T extends `${string}/${infer Rest}`
  ? ExtractParams<Rest, P>
  : P

type ExtractQueryParams<
  T,
  P extends unknown[]
> = T extends `${string}?${infer Rest}`
  ? ExtractQueryParams<Rest, P>
  : T extends `:${infer Param}&${infer Rest}`
  ? ExtractParams<Rest, [...P, Param]>
  : T extends `:${infer Param}`
  ? [...P, Param]
  : T extends `${string}&${infer Rest}`
  ? ExtractParams<Rest, P>
  : P

export type Params<T> = {
  [key in ExtractParams<T, []>[number]]: string
} & {
  [key in ExtractQueryParams<T, []>[number]]?: string
}

export type ViewParams<T> = {
  [key in ExtractParams<T, []>[number]]: string
} & {
  [key in ExtractQueryParams<T, []>[number]]: string | undefined
} & {
  [key in `set${Capitalize<ExtractQueryParams<T, []>[number]>}`]: (
    value: string | undefined
  ) => void
}

// export type Params<T> = {} & Record<ExtractParams<T, []>[number], string> &
//   Partial<Record<ExtractQueryParams<T, []>[number], string>>

type p1 = ExtractParams<"/halla/:what/dude/:i", []>
type p2 = ExtractParams<"halla/:what/dude/:i", []>
type p3 = ExtractParams<"/:what/dude/:i", []>
type p4 = ExtractParams<":what/dude/:i", []>
type p5 = Params<"hat?:duude">
type p7 = Params<"/:productId/explore?:search">
type p6 = ExtractQueryParams<":what/dude/:i?:search&:productType", []>

export type RouteConfig = {
  routes: Route<unknown, unknown>[]
}

export const route = <const T, const K>(route: Route<T, K>) => {
  return route
}
