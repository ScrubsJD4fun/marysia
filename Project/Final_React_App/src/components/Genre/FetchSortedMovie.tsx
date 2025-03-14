import { useQuery } from "@tanstack/react-query"
import { fetchMovie } from "../../api/fetchFilms"
import { queryClient } from "../../api/queryClient"
import { Genre } from "./Genre"
import { Loader } from "../Loader"
import { useParams } from "react-router-dom"

export const FetchSortedMovie = () => {
  const { genreName } = useParams()

  const querySortedMovie = useQuery(
    {
      queryFn: () => fetchMovie(genreName as string),
      queryKey: ["movie", genreName],
    },
    queryClient,
  )

  switch (querySortedMovie.status) {
    case "pending":
      return <Loader />
    case "success":
      return (
        <Genre films={querySortedMovie.data} genres={genreName as string} />
      )
    case "error":
      return (
        <div>
          <span>Произошла ошибка</span>
          <button onClick={() => querySortedMovie.refetch()}></button>
        </div>
      )
  }
}
