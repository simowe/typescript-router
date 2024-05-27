import { keepQueryParams } from "./keepQueryParams"
import { removeParamPrefix } from "./removeParamPrefix"
import { removeQueryParams } from "./removeQueryParams"
import { Route } from "./types/Route"
import { exists } from "./utils/exists"

export const replacePathWithParams = (
  route: Route,
  params: Record<string, string>
) => {
  const path = removeQueryParams(route.path)
    .split("/")
    .map((segment) => decodeSegment(segment, params))
    .join("/")

  const querySplit = Object.fromEntries(
    keepQueryParams(route.path)
      .split("&")
      .map((key) => {
        if (key.startsWith(":")) return removeParamPrefix(key)
      })
      .filter(exists)
      .map((key) => [key, params[key]])
  )

  const searchString = new URLSearchParams(querySplit).toString()
  if (searchString) return path + "?" + searchString

  return path
}

const decodeSegment = (segment: string, params: Record<string, string>) => {
  if (!segment.startsWith(":")) return segment

  const key = segment.replace(/^:/, "")
  const value = params[key]
  if (value === undefined) throw new Error("Param isn't provided ")

  return value
}
