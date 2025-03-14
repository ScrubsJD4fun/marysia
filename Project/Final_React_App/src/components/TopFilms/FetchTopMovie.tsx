import { useQuery } from "@tanstack/react-query"
import { fetchTop } from "../../api/fetchFilms"
import { queryClient } from "../../api/queryClient"
import { TopFilms } from "./TopFilms"

export const FetchTopMovie = () => {
  const queryTopMovie = useQuery(
    {
      queryFn: () => fetchTop(),
      queryKey: ["top10"],
    },
    queryClient,
  )

  switch (queryTopMovie.status) {
    case "pending":
      return <p>Loading...</p>
    case "success":
      return <TopFilms films={queryTopMovie.data} />
    case "error":
      return (
        <div>
          <span>Произошла ошибка</span>
          <button onClick={() => queryTopMovie.refetch()}></button>
        </div>
      )
  }
}
