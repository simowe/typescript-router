import type { RouteConfig } from "./RouteConfig"
import type { RouteName } from "./RouteName"
import type { Routes } from "./Routes"

export type RouteByName<
  R extends RouteConfig,
  N extends RouteName<R>
> = Extract<Routes<R>, { name: N }>
