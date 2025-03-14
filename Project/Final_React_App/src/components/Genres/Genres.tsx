import { type FC } from "react"
import { type GenresSchema } from "../../Interfaces/Movies"
import "./Genres.css"
import { Link } from "react-router-dom"

export const Genres: FC<GenresSchema> = ({ genres }) => {
  return (
    <div>
      <h2 className="genres-title">Жанры фильмов</h2>
      <section className="list-reset genres-list">
        {genres.map((genre, index) => (
          <Link to={`/genres/${genre}`} className="genres-item" key={index}>
            <img
              className="genres-poster"
              src={`/webp-genres/${genre}.webp`}
              alt={genre}
            />
            <p className="genres-name">{genre}</p>
          </Link>
        ))}
      </section>
    </div>
  )
}
