import { Link, type RouteParams } from "../router"

export const ProductPage = ({ productId }: RouteParams<"productPage">) => {
  return (
    <>
      <strong>Product page</strong>
      <br />
      <strong>ID: {productId}</strong>
      <br />
      <Link to="frontPage">front page</Link>
    </>
  )
}
