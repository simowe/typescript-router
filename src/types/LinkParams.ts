import type { PathParams } from "./PathParams"
import { QueryParams } from "./QueryParams"

export type LinkParams<Path> = {
  [key in PathParams<Path>[number]]: string
} & {
  [key in QueryParams<Path>[number]]?: string
}
