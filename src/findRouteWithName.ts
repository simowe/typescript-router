import type { RouteConfig } from "./types/RouteConfig"

export const findRouteWithName = (routeConfig: RouteConfig, name: string) => {
  return routeConfig.routes.find((route) => route.name === name)
}
