import { route } from "router"
import { ExplorePage } from "./pages/ExplorePage"
import { FrontPage } from "./pages/FrontPage"
import { ProductPage } from "./pages/ProductPage"

export const routeConfig = {
  routes: [
    route({
      name: "frontPage",
      path: "/",
      render: (params) => <FrontPage {...params} />,
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
