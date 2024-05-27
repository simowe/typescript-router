import type { PathParams } from "./PathParams"
import { QueryParams } from "./QueryParams"

export type ViewParams<Path> = {
  [key in PathParams<Path>[number]]: string
} & {
  [key in QueryParams<Path>[number]]: string | undefined
} & {
  [key in `set${Capitalize<QueryParams<Path>[number]>}`]: (
    value: string | undefined
  ) => void
}
