import { Link } from "../Link"
import { RouteParams } from "../RouteParams"

export const ProductPage = ({ productId }: RouteParams<"productPage">) => {
  return (
    <>
      <Link to="productPage" productId={productId} />
    </>
  )
}
