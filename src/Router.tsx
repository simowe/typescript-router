import type { ReactNode } from "react"
import { findRouteWithPath } from "./findRouteWithPath"
import { getRouteParams } from "./getRouteParams"
import type { RouteConfig } from "./types/RouteConfig"

export const Router = ({
  routeConfig,
}: {
  routeConfig: RouteConfig
}): ReactNode => {
  const activePath = window.location.pathname
  const route = findRouteWithPath(routeConfig, activePath)
  if (route) return route.render(getRouteParams(route, activePath))

  return <div>404</div>
}
