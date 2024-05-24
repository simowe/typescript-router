import { removeQueryParams } from "./removeQueryParams"
import { Route } from "./types/Route"

export const replacePathWithParams = (
  route: Route,
  params: Record<string, string>
) => {
  return removeQueryParams(route.path)
    .split("/")
    .map((segment) => decodeSegment(segment, params))
    .join("/")
}

const decodeSegment = (segment: string, params: Record<string, string>) => {
  if (!segment.startsWith(":")) return segment

  const key = segment.replace(/^:/, "")
  const value = params[key]
  if (value === undefined) throw new Error("Param isn't provided ")

  return value
}
