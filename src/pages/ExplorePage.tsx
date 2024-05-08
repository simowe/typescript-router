import { Link } from "../Link"
import { RouteParams } from "../RouteParams"

export const ExplorePage = ({
  search = "",
  setSearch,
  productType = "",
  setProductType,
}: RouteParams<"explorePage">) => {
  return (
    <>
      <Link to="explorePage" />
    </>
  )
}
