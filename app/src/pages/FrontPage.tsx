import { Link, type RouteParams } from "../router"

export const FrontPage = ({}: RouteParams<"frontPage">) => {
  return (
    <>
      This is front page
      <br />
      <Link to="productPage" productId="32">
        product page
      </Link>
      <br />
      <Link to="explorePage" searchQuery="What is happening?">
        explore page
      </Link>
      <br />
    </>
  )
}
