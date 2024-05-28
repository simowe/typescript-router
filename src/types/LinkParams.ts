import type { PathParams } from "./PathParams"
import { QueryParams } from "./QueryParams"
import { RequiredQueryParams } from "./RequiredQueryParams"

export type LinkParams<Path> = {
  [key in PathParams<Path>[number]]: string
} & {
  [key in QueryParams<Path>[number]]?: string
} & {
  [key in RequiredQueryParams<Path>[number]]: string
}
