import { createLink, type RouteName, type RouteParams } from "./lib"
import { routeConfig } from "./routeConfig"

export const PortalLink = createLink(() => routeConfig)

export type PortalRouteParams<N extends RouteName<typeof routeConfig>> =
  RouteParams<typeof routeConfig, N>
