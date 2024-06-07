import type { RouteConfig } from "./RouteConfig"
import type { Routes } from "./Routes"

export type RouteName<R extends RouteConfig> = Routes<R>["name"]
