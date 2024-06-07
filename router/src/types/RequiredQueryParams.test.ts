import type { RequiredQueryParams } from "./RequiredQueryParams"
import type { Equal } from "./testUtils"

type cases = [
  Equal<RequiredQueryParams<"/users/:id?:param!">, ["param"]>,
  Equal<
    RequiredQueryParams<"/users/:id/:id2?:param1!&:param2!">,
    ["param1", "param2"]
  >,
  Equal<RequiredQueryParams<"/users/:id/:id2?:param1!&:param2">, ["param1"]>,
  Equal<
    RequiredQueryParams<"/users/:id/subpath/:id2?:param1!&:param2!&:param3!">,
    ["param1", "param2", "param3"]
  >,
  Equal<
    RequiredQueryParams<"/users/:id/subpath/:id2?:param1&param2&:param3&:param4!&:param5">,
    ["param4"]
  >,
  Equal<
    RequiredQueryParams<"/users/:id/subpath/:id2?:param1!&:param2!&:param3!&:param4&:param5!">,
    ["param1", "param2", "param3", "param5"]
  >,
  Equal<RequiredQueryParams<"/users/:id?:param">, []>,
  Equal<RequiredQueryParams<"/users/:id?:param&:param2!">, ["param2"]>
]

type p =
  RequiredQueryParams<"/users/:id/subpath/:id2?:param1&param2&:param3&:param4!&:param5">
