import type { RouteConfig } from "./RouteConfig"

export type RouteName<R extends RouteConfig> = R["routes"][number]["name"]
