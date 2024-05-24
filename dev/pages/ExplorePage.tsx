import { PortalLink, type PortalRouteParams } from "../router"

export const ExplorePage = ({
  searchQuery,
  setSearchQuery,
}: PortalRouteParams<"explorePage">) => {
  console.log({ searchQuery, setSearchQuery })
  return (
    <>
      Explore
      <PortalLink to="frontPage">front page </PortalLink>
    </>
  )
}
