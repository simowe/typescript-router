import { zip } from "lodash-es"
import { keepQueryParams } from "./keepQueryParams"
import { removeQueryParams } from "./removeQueryParams"
import type { Route } from "./types/Route"
import type { ViewParams } from "./types/ViewParams"
import { exists } from "./utils/exists"

export const getRouteParams = ({
  route,
  activePath,
  queryString,
}: {
  route: Route
  activePath: string
  queryString: string
}): ViewParams<string> => {
  const pathParams = getPathParams(route, activePath)
  const queryParams = getQueryParams(route, queryString)

  return { ...queryParams, ...pathParams }
}

const getPathParams = (route: Route, activePath: string) => {
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

const getQueryParams = (route: Route, queryString: string) => {
  const routeQuerySplit = keepQueryParams(queryString).split("&")
  const querySplit = new Set(
    keepQueryParams(route.path)
      .split("&")
      .map((key) => {
        if (key.startsWith(":")) return removeParamPrefix(key)
      })
      .filter(exists)
  )

  return Object.fromEntries(
    routeQuerySplit
      .map((segment) => {
        const [key, value] = segment.split("=")
        return [key, value]
      })
      .filter(([key]) => querySplit.has(key))
  )
}

const removeParamPrefix = (param: string) => {
  return param.replace(/^:/, "")
}
