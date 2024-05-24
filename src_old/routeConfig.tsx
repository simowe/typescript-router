import { FrontPage } from "./pages/FrontPage"
import { ExplorePage } from "./pages/ExplorePage"
import { RouteConfig, route } from "./routeUtils"
import { ProductPage } from "./pages/ProductPage"
import { lazy } from "react"

const OtherPage = lazy(() => import("./pages/OtherPage"))

export const routeConfig = {
  routes: [
    route({
      name: "frontPage",
      path: "/",
      render: (params) => <FrontPage {...params} />,
    }),

    route({
      name: "otherPage",
      path: "/product/:productId/subpage/:subpageId?:searchQuery",
      render: (params) => <OtherPage {...params} />,
    }),

    route({
      name: "productPage",
      path: "/product/:productId",
      render: (params) => <ProductPage {...params} />,
    }),

    route({
      name: "explorePage",
      path: "/explore?:search&:productType",
      render: (params) => <ExplorePage {...params} />,
    }),
  ],
} satisfies RouteConfig
