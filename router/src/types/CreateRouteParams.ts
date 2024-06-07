import type { Route } from "./Route"
import { type RouteConfig } from "./RouteConfig"
import type { RouteName } from "./RouteName"
import type { Routes } from "./Routes"
import type { ViewParams } from "./ViewParams"

export type CreateRouteParams<
  Config extends RouteConfig,
  Name extends RouteName<Config>,
  R extends Route = Extract<Routes<Config>, { name: Name }>
> = ViewParams<R["path"]>
