import { useCallback, useMemo, useState, type ReactNode } from "react"
import { routerContext } from "./RouterContext"
import { findRouteWithPath } from "./findRouteWithPath"
import { getRouteParams } from "./getRouteParams"
import type { RouteConfig } from "./types/RouteConfig"

export const Router = ({
  routeConfig,
}: {
  routeConfig: RouteConfig
}): ReactNode => {
  const [_, setState] = useState({})
  const refresh = useCallback(() => setState({}), [])
  const contextValue = useMemo(() => ({ refresh }), [refresh])

  return (
    <routerContext.Provider value={contextValue}>
      <Content routeConfig={routeConfig} />
    </routerContext.Provider>
  )
}

const Content = ({ routeConfig }: { routeConfig: RouteConfig }) => {
  const activePath = window.location.pathname
  const queryString = window.location.search
  const route = findRouteWithPath(routeConfig, activePath)

  if (route) {
    const params = getRouteParams({ route, activePath, queryString })
    return route.render(params)
  }

  return <div>404</div>
}
