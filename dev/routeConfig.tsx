import { lazy } from "react"
import { route } from "./lib"
import { ExplorePage } from "./pages/ExplorePage"
import { FrontPage } from "./pages/FrontPage"
import { ProductPage } from "./pages/ProductPage"

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
      path: "/product/:productId/subpage/:subpageId",
      render: (params) => <OtherPage {...params} />,
    }),

    route({
      name: "productPage",
      path: "/product/:productId",
      render: (params) => <ProductPage {...params} />,
    }),

    route({
      name: "explorePage",
      path: "/explore?:searchQuery",
      render: (params) => <ExplorePage {...params} />,
    }),
  ],
}
