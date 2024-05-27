import type { ReactNode } from "react"
import { useRouterContext } from "./RouterContext"
import { findRouteWithName } from "./findRouteWithName"
import { replacePathWithParams } from "./replacePathWithParams"
import type { LinkParams } from "./types/LinkParams"
import type { RouteConfig } from "./types/RouteConfig"

type Name<R extends RouteConfig> =
  | R["routes"][number]["name"]
  | R["modals"][number]["name"]

type Routes<R extends RouteConfig> = R["routes"][number] | R["modals"][number]

type LinkRouteParams<R extends RouteConfig, N extends Name<R>> = LinkParams<
  Extract<Routes<R>, { name: N }>["path"]
>

type Props<R extends RouteConfig, N extends Name<R>> = {
  to: N
  children: ReactNode
} & LinkRouteParams<R, N>

export const createLink =
  <R extends RouteConfig>(getRouteConfig: () => R) =>
  <N extends Name<R>>({ to, children, ...params }: Props<R, N>) => {
    const route = findRouteWithName(getRouteConfig(), to)
    if (!route) throw new Error("Route doesn't exist")

    const path = replacePathWithParams(route, params)
    const context = useRouterContext()

    return (
      <a
        href={path}
        onClick={(e) => {
          e.preventDefault()
          window.history.pushState(null, "", path)
          context.refresh()
        }}
      >
        {children}
      </a>
    )
  }
