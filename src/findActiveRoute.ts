import { zip } from "lodash-es"
import type { Route } from "./types/Route"
import type { RouteConfig } from "./types/RouteConfig"

export const findActiveRoute = (
  routeConfig: RouteConfig,
  activePath: string
) => {
  return routeConfig.routes.find((route) => isRouteMatch(route, activePath))
}

const isRouteMatch = (route: Route, activePath: string) => {
  const locationSplit = activePath.split("/")
  const routeSplit = route.path.split("/")

  const segments = zip(locationSplit, routeSplit)

  return segments.every(([locationSegment, routeSegment]) => {
    if (routeSegment === undefined) return false
    if (locationSegment === undefined) return false
    if (routeSegment === locationSegment) return true
    if (routeSegment.startsWith(":") && locationSegment.length > 0) return true
    return false
  })
}
