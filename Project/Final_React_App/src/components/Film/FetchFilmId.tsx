import { useQuery } from "@tanstack/react-query"
import { queryClient } from "../../api/queryClient"
import { fetchFilm } from "../../api/fetchFilms"
import { Film } from "./Film"
import { type FC } from "react"
import { type FilmId } from "../../Interfaces/Movies"

export const FetchFilmId: FC<FilmId> = ({ id }) => {
  const queryFilmId = useQuery(
    {
      queryFn: () => fetchFilm(id as string),
      queryKey: ["movie"],
    },
    queryClient,
  )

  switch (queryFilmId.status) {
    case "pending":
      return <p>Loading...</p>
    case "success":
      return <Film movie={queryFilmId.data} />
    case "error":
      return (
        <div>
          <span>Произошла ошибка</span>
          <button onClick={() => queryFilmId.refetch()}></button>
        </div>
      )
  }
}
