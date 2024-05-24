import { PortalLink, type PortalRouteParams } from "../router"

export const ProductPage = ({
  productId,
}: PortalRouteParams<"productPage">) => {
  return (
    <>
      <PortalLink to="productPage" productId={productId}>
        product page id: {productId}
      </PortalLink>
    </>
  )
}
