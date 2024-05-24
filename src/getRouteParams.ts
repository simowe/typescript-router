import { zip } from "lodash-es"
import { removeQueryParams } from "./removeQueryParams"
import type { Route } from "./types/Route"
import type { ViewParams } from "./types/ViewParams"
import { exists } from "./utils/exists"

export const getRouteParams = (
  route: Route,
  activePath: string
): ViewParams<string> => {
  const locationSplit = activePath.split("/")
  const routeSplit = removeQueryParams(route.path).split("/")

  const segments = zip(locationSplit, routeSplit)

  const entries = segments.map(([locationSegment, routeSegment]) => {
    if (routeSegment === undefined) return undefined
    if (locationSegment === undefined) return undefined
    if (locationSegment.length === 0) return undefined
    if (routeSegment.startsWith(":"))
      return [removeParamPrefix(routeSegment), locationSegment]
    return undefined
  })

  return Object.fromEntries(entries.filter(exists))
}

const removeParamPrefix = (param: string) => {
  return param.replace(/^:/, "")
}
