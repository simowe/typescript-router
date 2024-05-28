import {
  Fragment,
  useCallback,
  useEffect,
  useState,
  type ReactNode,
} from "react"
import { REFRESH_EVENT_NAME } from "./constants"
import { findRouteWithPath } from "./findRouteWithPath"
import { getRouteParams } from "./getRouteParams"
import type { RouteConfig } from "./types/RouteConfig"

export const Router = ({
  routeConfig,
}: {
  routeConfig: RouteConfig
}): ReactNode => {
  const refresh = useRefresh()

  useRefreshOnEvents(refresh)

  return (
    <>
      <Modals routeConfig={routeConfig} refresh={refresh} />
      <Content routeConfig={routeConfig} refresh={refresh} />
    </>
  )
}

const Modals = ({
  routeConfig,
  refresh,
}: {
  routeConfig: RouteConfig
  refresh: () => void
}) => {
  const activePath = window.location.pathname
  const queryString = window.location.search

  return (
    <>
      {routeConfig.modals.map((route, index) => {
        const params = getRouteParams({
          route,
          activePath,
          queryString,
          refresh,
        })
        return <Fragment key={index}>{route.render(params)}</Fragment>
      })}
    </>
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

const useRefreshOnEvents = (refresh: () => void) => {
  useEffect(() => {
    window.addEventListener("popstate", refresh)
    window.addEventListener(REFRESH_EVENT_NAME, refresh)

    return () => {
      window.removeEventListener("popstate", refresh)
      window.removeEventListener(REFRESH_EVENT_NAME, refresh)
    }
  }, [])
}
