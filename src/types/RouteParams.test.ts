import type { Route } from "./Route"
import type { RouteParams } from "./RouteParams"
import type { Equal } from "./testUtils"

type routeConfig = {
  routes: [
    Route<"page1", "/">,
    Route<"page2", "/:param">,
    Route<"page3", "/page/:param/:param2/subpath/:param3">,
    Route<"page4", "/page/:param/:param2/subpath/:param3">
  ]
  modals: []
}

type cases = [
  Equal<RouteParams<routeConfig, "page1">, {}>,
  Equal<RouteParams<routeConfig, "page2">, { param: string }>,

  Equal<
    RouteParams<routeConfig, "page3">,
    { param: string; param2: string; param3: string }
  >,

  // @ts-expect-error
  Equal<RouteParams<routeConfig, "does-not-exist">, {}>
]
