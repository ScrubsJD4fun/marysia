import { useQuery } from "@tanstack/react-query"
import { fetchRandom } from "../../api/fetchFilms"
import { queryClient } from "../../api/queryClient"
import { Promo } from "./Promo"
import { Loader } from "../Loader"

export const FetchRandomMovie = () => {
  const queryRndmMovie = useQuery(
    {
      queryFn: () => fetchRandom(),
      queryKey: ["movie"],
    },
    queryClient,
  )

  switch (queryRndmMovie.status) {
    case "pending":
      return <Loader />
    case "success":
      return (
        <Promo movie={queryRndmMovie.data} onRefresh={queryRndmMovie.refetch} />
      )
    case "error":
      return (
        <div>
          <span>Произошла ошибка</span>
          <button onClick={() => queryRndmMovie.refetch()}></button>
        </div>
      )
  }
}
