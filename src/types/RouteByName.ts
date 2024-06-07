import type { RouteConfig } from "./RouteConfig"
import { RouteName } from "./RouteName"
import { Routes } from "./Routes"

export type RouteByName<
  R extends RouteConfig,
  N extends RouteName<R>
> = Extract<Routes<R>, { name: N }>
