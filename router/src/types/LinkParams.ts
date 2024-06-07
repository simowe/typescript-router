import type { PathParams } from "./PathParams"
import type { QueryParams } from "./QueryParams"
import type { RequiredQueryParams } from "./RequiredQueryParams"

export type LinkParams<Path> = {
  [key in PathParams<Path>[number]]: string
} & {
  [key in QueryParams<Path>[number]]?: string
} & {
  [key in RequiredQueryParams<Path>[number]]: string
}
