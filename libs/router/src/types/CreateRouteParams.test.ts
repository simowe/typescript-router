import type { CreateRouteParams } from "./CreateRouteParams"
import type { Route } from "./Route"
import type { Equal } from "./testUtils"

type routeConfig = {
  routes: [
    Route<"page1", "/">,
    Route<"page2", "/:param">,
    Route<"page3", "/page/:param/:param2/subpath/:param3">,
    Route<"page4", "/page/:param/:param2/subpath/:param3">
  ]
}

type cases = [
  Equal<CreateRouteParams<routeConfig, "page1">, {}>,
  Equal<CreateRouteParams<routeConfig, "page2">, { param: string }>,

  Equal<
    CreateRouteParams<routeConfig, "page3">,
    { param: string; param2: string; param3: string }
  >,

  // @ts-expect-error
  Equal<CreateRouteParams<routeConfig, "does-not-exist">, {}>
]
