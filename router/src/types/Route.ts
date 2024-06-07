import type { ReactNode } from "react"
import type { ViewParams } from "./ViewParams"

export type Route<Name = string, Path = string> = {
  name: Name
  path: Path
  render: (params: ViewParams<Path>) => ReactNode
}
