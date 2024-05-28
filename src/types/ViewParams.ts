import type { PathParams } from "./PathParams"
import { QueryParams } from "./QueryParams"
import { RequiredQueryParams } from "./RequiredQueryParams"

export type ViewParams<Path> = {
  [key in PathParams<Path>[number]]: string
} & {
  [key in QueryParams<Path>[number]]: string | undefined
} & {
  [key in RequiredQueryParams<Path>[number]]: string
} & {
  [key in `set${Capitalize<QueryParams<Path>[number]>}`]: (
    value: string | undefined
  ) => void
} & {
  [key in `set${Capitalize<RequiredQueryParams<Path>[number]>}`]: (
    value: string
  ) => void
}
