import { type PathParams } from "./PathParams"
import type { Equal } from "./testUtils"

type cases = [
  Equal<PathParams<"/users/:id">, ["id"]>,
  Equal<PathParams<"/users/:id/:id2">, ["id", "id2"]>,
  Equal<PathParams<"/users/:id/subpath/:id2">, ["id", "id2"]>,
  Equal<PathParams<"/users/:id/subpath/">, ["id"]>,
  Equal<PathParams<"/users/:id/subpath">, ["id"]>,
  Equal<PathParams<"/users">, []>
]
