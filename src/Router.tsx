import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { routerContext } from "./RouterContext"
import { findRouteWithPath } from "./findRouteWithPath"
import { getRouteParams } from "./getRouteParams"
import type { RouteConfig } from "./types/RouteConfig"

export const Router = ({
  routeConfig,
}: {
  routeConfig: RouteConfig
}): ReactNode => {
  const refresh = useRefresh()
  const contextValue = useMemo(() => ({ refresh }), [refresh])

  useRefreshOnNavigation(refresh)

  return (
    <routerContext.Provider value={contextValue}>
      <Content routeConfig={routeConfig} refresh={refresh} />
    </routerContext.Provider>
  )
}

const Content = ({
  routeConfig,
  refresh,
}: {
  routeConfig: RouteConfig
  refresh: () => void
}) => {
  const activePath = window.location.pathname
  const queryString = window.location.search
  const route = findRouteWithPath(routeConfig, activePath)

  if (route) {
    const params = getRouteParams({ route, activePath, queryString, refresh })
    return route.render(params)
  }

  return <div>404</div>
}

const useRefresh = () => {
  const [_, setState] = useState({})
  return useCallback(() => setState({}), [])
}

const useRefreshOnNavigation = (refresh: () => void) => {
  useEffect(() => {
    window.addEventListener("popstate", refresh)
    return () => window.addEventListener("popstate", refresh)
  }, [])
}
