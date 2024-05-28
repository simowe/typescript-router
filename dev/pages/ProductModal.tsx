import { navigateBack } from "../lib"
import { type PortalRouteParams } from "../router"

export const ProductModal = ({
  productId,
  setProductId,
}: PortalRouteParams<"productModal">) => {
  if (!productId) return

  return (
    <div
      style={{
        position: "absolute",
        inset: "0px",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "0px",
          background: "rgba(0,0,0,0.5)",
        }}
        onClick={() => navigateBack()}
      />
      <div
        style={{
          isolation: "isolate",
          background: "white",
          height: "200px",
          width: "200px",
          borderRadius: "20px",
          padding: "20px",
        }}
      >
        This is the product modal
        <strong>{productId}</strong>
      </div>
    </div>
  )
}
