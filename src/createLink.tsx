import type { ReactNode } from "react"
import { findRouteWithName } from "./findRouteWithName"
import { navigate } from "./navigate"
import { replacePathWithParams } from "./replacePathWithParams"
import type { LinkParams } from "./types/LinkParams"
import type { RouteConfig } from "./types/RouteConfig"
import { Routes } from "./types/Routes"

type Name<R extends RouteConfig> = Routes<R>["name"]

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

    return (
      <a
        href={path}
        onClick={(e) => {
          e.preventDefault()
          navigate(path)
        }}
      >
        {children}
      </a>
    )
  }
