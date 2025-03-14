import { Link } from "react-router-dom"
import { type FC } from "react"
import { type MovieTop } from "../../Interfaces/Movies"
import "./Genre.css"

export interface IGenreFilms {
  films: MovieTop
  genres: string
}

export const Genre: FC<IGenreFilms> = ({ films, genres }) => {
  return (
    <div>
      <h2 className="genre-title">{genres.toUpperCase()}</h2>
      <ul className="list-reset genre-list">
        {films
          .filter(item => item.genres?.includes(genres))
          .map(item => (
            <Link key={item.id} to={`/films/${item.id}`}>
              <li className="genre-item" key={item.id}>
                <img
                  className="genre-poster"
                  src={item.posterUrl}
                  alt={item.title}
                />
              </li>
            </Link>
          ))}
      </ul>
    </div>
  )
}
