import { QueryParams } from "./QueryParams"
import type { Equal } from "./testUtils"

type cases = [
  Equal<QueryParams<"/users/:id?:param">, ["param"]>,
  Equal<QueryParams<"/users/:id/:id2?:param1&:param2">, ["param1", "param2"]>,
  Equal<
    QueryParams<"/users/:id/subpath/:id2?:param1&param2&:param3">,
    ["param1", "param3"]
  >
]
