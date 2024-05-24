import type { ReactNode } from "react"
import type { LinkParams } from "./types/LinkParams"
import type { RouteConfig } from "./types/RouteConfig"

type Name<R extends RouteConfig> = R["routes"][number]["name"]
type Routes<R extends RouteConfig> = R["routes"][number]

type LinkRouteParams<R extends RouteConfig, N extends Name<R>> = LinkParams<
  Extract<Routes<R>, { name: N }>["path"]
>

type Props<R extends RouteConfig, N extends Name<R>, S extends boolean> = {
  to: N
  isCurrentPage?: S
  children: ReactNode
} & (S extends true ? Partial<LinkRouteParams<R, N>> : LinkRouteParams<R, N>)

export const createLink =
  <R extends RouteConfig>(getRouteConfig: () => R) =>
  <N extends Name<R>, S extends boolean = false>({
    to,
    children,
  }: Props<R, N, S>) => {
    return <a href={to}>{children}</a>
  }
