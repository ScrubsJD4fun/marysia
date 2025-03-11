import type { FC } from "react"
import type { TopFilmsSchema } from "../../Interfaces/Movies"
import './TopFilms.css'
import { Link } from "react-router-dom"

export const TopFilms: FC<TopFilmsSchema> = ({films}) => {
    
    return (
        <div>
            <h2 className="top-title">Топ 10 фильмов</h2>
            <ul className="list-reset top-list">
                {films.sort((a,b) => b.tmdbRating - a.tmdbRating)
                .map((film, index) => (
                    <Link key={film.id} to={`/films/${film.id}`}>
                        <li className="top-item" key={film.id}>
                            <div className="top-number">{index + 1}</div>
                            <img className="top-poster" src={film.posterUrl} alt={film.title} />
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}