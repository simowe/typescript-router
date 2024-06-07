import type { Route } from "./types/Route"

export const route = <const Name extends string, const Path extends string>(
  route: Route<Name, Path>
) => {
  return route
}
