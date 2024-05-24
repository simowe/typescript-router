import { PortalLink, type PortalRouteParams } from "../router"

export const FrontPage = ({}: PortalRouteParams<"frontPage">) => {
  return (
    <>
      front page
      <PortalLink to="productPage" productId="32">
        product page
      </PortalLink>
    </>
  )
}
