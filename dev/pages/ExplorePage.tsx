import { PortalLink, type PortalRouteParams } from "../router"

export const ExplorePage = ({
  searchQuery,
  setSearchQuery,
}: PortalRouteParams<"explorePage">) => {
  return (
    <>
      Explore
      <PortalLink to="frontPage">front page </PortalLink>
    </>
  )
}
