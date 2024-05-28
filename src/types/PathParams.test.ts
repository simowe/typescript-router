import { type PathParams } from "./PathParams"
import type { Equal } from "./testUtils"

type cases = [
  Equal<PathParams<"/users/:id">, ["id"]>,
  Equal<PathParams<"/users/:id/:id2">, ["id", "id2"]>,
  Equal<PathParams<"/users/:id/subpath/:id2">, ["id", "id2"]>,
  Equal<PathParams<"/users/:id/subpath/">, ["id"]>,
  Equal<PathParams<"/users/:id/subpath">, ["id"]>,
  Equal<PathParams<"/users">, []>,

  Equal<PathParams<"/users/:id?:param">, ["id"]>,
  Equal<PathParams<"/users/:id/:id2?:param1&:param2">, ["id", "id2"]>,
  Equal<
    PathParams<"/users/:id/:id2/id3/:id4?:param1&:param2">,
    ["id", "id2", "id4"]
  >,
  Equal<
    PathParams<"/users/:id/subpath/:id2?:param1&param2&:param3">,
    ["id", "id2"]
  >
]
