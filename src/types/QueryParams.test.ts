import { QueryParams } from "./QueryParams"
import type { Equal } from "./testUtils"

type cases = [
  Equal<QueryParams<"/users/:id?:param">, ["param"]>,
  Equal<QueryParams<"/users/:id/:id2?:param1&:param2">, ["param1", "param2"]>,
  Equal<
    QueryParams<"/users/:id/subpath/:id2?:param1&param2&:param3">,
    ["param1", "param3"]
  >,
  Equal<
    QueryParams<"/users/:id/subpath/:id2?:param1&param2&:param3&:param4!&:param5">,
    ["param1", "param3", "param5"]
  >,
  Equal<
    QueryParams<"/users/:id/subpath/:id2?:param1!&:param2!&:param3!&:param4&:param5!">,
    ["param4"]
  >,
  Equal<QueryParams<"/users/:id?:param!">, []>,
  Equal<QueryParams<"/users/:id?:param!&:param2">, ["param2"]>
]

type x =
  QueryParams<"/users/:id/subpath/:id2?:param1&param2&:param3&:param4!&:param5">
