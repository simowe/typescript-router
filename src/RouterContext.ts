import { createContext, useContext } from "react"

type RouterContext = {
  refresh: () => void
}

export const routerContext = createContext<RouterContext | null>(null)

export const useRouterContext = () => {
  const value = useContext(routerContext)
  if (value === null) throw new Error("useRouterContext used without context")

  return value
}
