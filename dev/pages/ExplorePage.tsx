import { PortalLink, type PortalRouteParams } from "../router"

export const ExplorePage = ({
  searchQuery,
  setSearchQuery,
}: PortalRouteParams<"explorePage">) => {
  return (
    <>
      Explore
      <input
        placeholder="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.currentTarget.value)}
      />
      <PortalLink to="frontPage">front page</PortalLink>
    </>
  )
}
