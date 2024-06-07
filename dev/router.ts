import {
  createLink,
  type RouteName,
  type RouteParams as _RouteParams,
} from "./lib"
import { routeConfig } from "./routeConfig"

export const Link = createLink(() => routeConfig)

export type RouteParams<N extends RouteName<typeof routeConfig>> = _RouteParams<
  typeof routeConfig,
  N
>
