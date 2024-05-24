import type { Route } from "./Route"
import { type RouteConfig } from "./RouteConfig"
import type { RouteName } from "./RouteName"
import type { ViewParams } from "./ViewParams"

type Routes<R extends RouteConfig> = R["routes"][number]

export type RouteParams<
  Config extends RouteConfig,
  Name extends RouteName<Config>,
  R extends Route = Extract<Routes<Config>, { name: Name }>
> = ViewParams<R["path"]>
