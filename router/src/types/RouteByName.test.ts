import type { Route } from "./Route"
import type { RouteByName } from "./RouteByName"
import type { Equal } from "./testUtils"

type routeConfig = {
  routes: [
    Route<"page1", "/">,
    Route<"page2", "/">,
    Route<"page3", "/">,
    Route<"page4", "/">
  ]
}

type cases = [
  Equal<Route<"page1", "/">, RouteByName<routeConfig, "page1">>,
  Equal<Route<"page2", "/">, RouteByName<routeConfig, "page2">>,
  Equal<Route<"page3", "/">, RouteByName<routeConfig, "page3">>,

  // @ts-expect-error
  RouteByName<routeConfig, "non-existing">
]
