import { PortalLink, type PortalRouteParams } from "../router"

export const FrontPage = ({}: PortalRouteParams<"frontPage">) => {
  return (
    <>
      This is front page
      <br />
      <PortalLink to="productPage" productId="32">
        product page
      </PortalLink>
      <br />
      <PortalLink to="explorePage" searchQuery="What is happening?">
        explore page
      </PortalLink>
    </>
  )
}
