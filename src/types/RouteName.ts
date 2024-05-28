import type { RouteConfig } from "./RouteConfig"
import { Routes } from "./Routes"

export type RouteName<R extends RouteConfig> = Routes<R>["name"]
