import { deleteFavorites, getListFavorites } from "../../api/fetchFilms"
import { useQuery } from "@tanstack/react-query"
import { Loader } from "../Loader"
import { queryClient } from "../../api/queryClient"
import type { Movie } from "../../Interfaces/Movies"
import { Link } from "react-router-dom"
import "./Account.css"

export const AccountFavorites = () => {
  const meFavorites = useQuery(
    {
      queryFn: () => getListFavorites(),
      queryKey: ["favorites"],
    },
    queryClient,
  )

  const deleteFavoritesHandler = async (filmId: number) => {
    try {
      await deleteFavorites(filmId)
      queryClient.invalidateQueries({ queryKey: ["favorites"] })
    } catch (error) {
      console.error("Ошибка при удалении из избранного:", error)
    }
  }

  switch (meFavorites.status) {
    case "pending":
      return <Loader />

    case "error":
      return (
        <div>
          <span>Произошла ошибка</span>
          <button onClick={() => meFavorites.refetch()}></button>
        </div>
      )

    case "success":
      return (
        <ul className="list-reset favor-list">
          {meFavorites.data.map((film: Movie) => (
            <li className="favor-item" key={film.id}>
              <Link
                className="favor-root"
                key={film.id}
                to={`/films/${film.id}`}
              >
                <img
                  className="favor-poster"
                  src={film.posterUrl}
                  alt={film.title}
                />
              </Link>
              <button
                className="favor-button"
                onClick={() => deleteFavoritesHandler(film.id)}
              ></button>
            </li>
          ))}
        </ul>
      )
  }
}
