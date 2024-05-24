import type { ViewParams } from "./ViewParams"
import type { Equal } from "./testUtils"

type cases = [
  Equal<ViewParams<"/users/:id">, { id: string }>,

  Equal<ViewParams<"/users/:id/:id2">, { id: string; id2: string }>,

  Equal<ViewParams<"/users/:id/subpath/:id2">, { id: string; id2: string }>,
  Equal<ViewParams<"/users/:id/subpath/">, { id: string }>,
  Equal<ViewParams<"/users/:id/subpath">, { id: string }>,
  Equal<ViewParams<"/users">, {}>,

  Equal<ViewParams<"/users/:id">, { id: string }>,

  Equal<ViewParams<"/users/:id/:id2">, { id: string; id2: string }>
]
