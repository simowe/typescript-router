import type { LinkParams } from "./LinkParams"
import type { Equal } from "./testUtils"

type cases = [
  Equal<LinkParams<"/users/:id">, { id: string }>,
  Equal<LinkParams<"/users/:id/:id2">, { id: string; id2: string }>,
  Equal<LinkParams<"/users/:id/subpath/:id2">, { id: string; id2: string }>,
  Equal<LinkParams<"/users/:id/subpath/">, { id: string }>,
  Equal<LinkParams<"/users/:id/subpath">, { id: string }>,
  Equal<LinkParams<"/users">, {}>,

  Equal<
    Required<LinkParams<"/users/:id/:id2?:param1">>,
    {
      id: string
      id2: string
      param1: string
    }
  >,

  Equal<
    Required<LinkParams<"/users/:id/:id2?:param1&:param2">>,
    {
      id: string
      id2: string
      param1: string
      param2: string
    }
  >
]
