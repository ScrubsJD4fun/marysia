import { type FC } from "react"
import { type PromoMovieSchema } from "../../Interfaces/Movies"

export const PromoTitle: FC<PromoMovieSchema> = ({ movie }) => {
  return (
    <>
      <h1 className="promo-title">{movie.title}</h1>
      <p className="promo-plot">{movie.plot}</p>
    </>
  )
}
