import type { PathParams } from "./PathParams"

export type LinkParams<T> = {
  [key in PathParams<T>[number]]: string
}
