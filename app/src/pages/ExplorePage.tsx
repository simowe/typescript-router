import { Link, type RouteParams } from "../router"

export const ExplorePage = ({
  searchQuery,
  setSearchQuery,
}: RouteParams<"explorePage">) => {
  return (
    <>
      Explore
      <input
        placeholder="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.currentTarget.value)}
      />
      <Link to="frontPage">front page</Link>
    </>
  )
}
