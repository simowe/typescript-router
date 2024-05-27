import { upperFirst, zip } from "lodash-es"
import { keepQueryParams } from "./keepQueryParams"
import { removeParamPrefix } from "./removeParamPrefix"
import { removeQueryParams } from "./removeQueryParams"
import type { Route } from "./types/Route"
import type { ViewParams } from "./types/ViewParams"
import { exists } from "./utils/exists"

export const getRouteParams = ({
  route,
  activePath,
  queryString,
  refresh,
}: {
  route: Route
  activePath: string
  queryString: string
  refresh: () => void
}): ViewParams<string> => {
  const pathParams = getPathParams(route, activePath)
  const queryParams = getQueryParams(route, queryString)
  const queryParamSetters = getQueryParamSetters(route, refresh)

  return { ...queryParams, ...pathParams, ...queryParamSetters }
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
  const searchParams = new URLSearchParams(queryString)

  const querySplit = keepQueryParams(route.path)
    .split("&")
    .map((key) => {
      if (key.startsWith(":")) return removeParamPrefix(key)
    })
    .filter(exists)

  return Object.fromEntries(
    querySplit.map((key) => [key, searchParams.get(key) ?? undefined])
  )
}

const getQueryParamSetters = (route: Route, refresh: () => void) => {
  const querySplit = keepQueryParams(route.path)
    .split("&")
    .map((key) => {
      if (key.startsWith(":")) return removeParamPrefix(key)
    })
    .filter(exists)

  return Object.fromEntries(
    querySplit.map((key) => {
      const setValue = (value: string | undefined) => {
        const url = new URL(window.location.href)
        if (value === undefined) {
          url.searchParams.delete(key)
        } else {
          url.searchParams.set(key, value)
        }

        window.history.replaceState(null, "", url.toString())

        refresh()
      }

      return [`set${upperFirst(key)}`, setValue]
    })
  )
}
