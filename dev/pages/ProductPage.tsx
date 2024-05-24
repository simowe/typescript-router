import { PortalLink, type PortalRouteParams } from "../router"

export const ProductPage = ({
  productId,
}: PortalRouteParams<"productPage">) => {
  return (
    <>
      <strong>Product page</strong>
      <br />
      <strong>ID: {productId}</strong>
      <br />
      <PortalLink to="frontPage">front page</PortalLink>
    </>
  )
}
