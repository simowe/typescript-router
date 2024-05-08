import { routeConfig } from "./routeConfig"
import { Params } from "./routeUtils"

// type Path = (typeof routeConfig)["routes"][number]["path"]
type Name = (typeof routeConfig)["routes"][number]["name"]

type Routes = (typeof routeConfig)["routes"][number]

type LinkRouteParams<N extends Name> = Params<
  Extract<Routes, { name: N }>["path"]
>

type Props<N extends Name, S extends boolean> = {
  to: N
  isCurrentPage?: S
} & (S extends true ? Partial<LinkRouteParams<N>> : LinkRouteParams<N>)

export const Link = <N extends Name, S extends boolean = false>({
  to,
}: Props<N, S>) => {
  return <a href={to} />
}
