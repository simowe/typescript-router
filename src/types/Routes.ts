import { RouteConfig } from "./RouteConfig"

export type Routes<R extends RouteConfig> =
  | R["routes"][number]
  | R["modals"][number]
