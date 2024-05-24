import { routeConfig } from "./routeConfig"
import { ViewParams } from "./routeUtils"

type Routes = (typeof routeConfig)["routes"][number]
type Name = (typeof routeConfig)["routes"][number]["name"]

export type RouteParams<N extends Name> = ViewParams<
  Extract<Routes, { name: N }>["path"]
>
