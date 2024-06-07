import { createLink, type CreateRouteParams, type RouteName } from "router"
import { routeConfig } from "./routeConfig"

export const Link = createLink(() => routeConfig)

export type RouteParams<N extends RouteName<typeof routeConfig>> =
  CreateRouteParams<typeof routeConfig, N>
