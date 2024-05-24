import type { LinkParams } from "./LinkParams"
import type { Equal } from "./testUtils"

type cases = [
  Equal<LinkParams<"/users/:id">, { id: string }>,
  Equal<LinkParams<"/users/:id/:id2">, { id: string; id2: string }>,
  Equal<LinkParams<"/users/:id/subpath/:id2">, { id: string; id2: string }>,
  Equal<LinkParams<"/users/:id/subpath/">, { id: string }>,
  Equal<LinkParams<"/users/:id/subpath">, { id: string }>,
  Equal<LinkParams<"/users">, {}>
]
