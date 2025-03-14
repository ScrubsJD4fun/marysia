import { type FC } from "react"
import { type PromoMovieSchema } from "../../Interfaces/Movies"
import star from "/star.png"
import raitingColor from "../../utils/raitingColor"

export const PromoInfo: FC<PromoMovieSchema> = ({ movie }) => {
  return (
    <div className="promo-info">
      <div
        className="promo-border"
        style={{ backgroundColor: raitingColor(movie.tmdbRating) }}
      >
        <img src={star} alt="star" />
        <span className="promo-rating">{movie.tmdbRating.toFixed(1)}</span>
      </div>
      <span>{movie.releaseDate?.split("-")[0]}</span>
      <span>{movie.genres?.join(", ")}</span>
      <span>{`${movie.runtime} мин`}</span>
    </div>
  )
}
