import { Link } from "../Link"
import { RouteParams } from "../RouteParams"

export const FrontPage = ({}: RouteParams<"frontPage">) => {
  return (
    <>
      <Link to="productPage" productId="32" />
    </>
  )
}
