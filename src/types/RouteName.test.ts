import type { Route } from "./Route"
import type { RouteName } from "./RouteName"
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
  Equal<"page1" | "page2" | "page3" | "page4", RouteName<routeConfig>>
]
