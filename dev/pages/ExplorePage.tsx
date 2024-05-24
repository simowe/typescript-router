import { PortalLink, type PortalRouteParams } from "../router"

export const ExplorePage = ({
  searchQuery,
  setSearchQuery,
}: PortalRouteParams<"explorePage">) => {
  console.log({ searchQuery, setSearchQuery })
  return (
    <>
      whhhahah
      <PortalLink to="frontPage">explore page </PortalLink>
    </>
  )
}
