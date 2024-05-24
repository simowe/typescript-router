import type { PathParams } from "./PathParams"

export type ViewParams<Path> = {
  [key in PathParams<Path>[number]]: string
}
