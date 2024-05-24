import type { PortalRouteParams } from "../router"

export const OtherPage = ({
  productId,
  subpageId,
}: PortalRouteParams<"otherPage">) => {
  return (
    <div>
      halla {productId} - {subpageId}
    </div>
  )
}

export default OtherPage
