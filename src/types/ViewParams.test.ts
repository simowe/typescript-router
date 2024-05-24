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

  Equal<ViewParams<"/users/:id/:id2">, { id: string; id2: string }>,

  Equal<
    ViewParams<"/users/:id/:id2?:param1">,
    {
      id: string
      id2: string
      param1: string
      setParam1: (value: string) => void
    }
  >,

  Equal<
    ViewParams<"/users/:id/:id2?:param1&:param2">,
    {
      id: string
      id2: string
      param1: string
      setParam1: (value: string) => void
      param2: string
      setParam2: (value: string) => void
    }
  >
]

type x = ViewParams<"/users/:id/:id2?:param1">
