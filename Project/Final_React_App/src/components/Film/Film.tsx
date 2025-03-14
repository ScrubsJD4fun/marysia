import { type FC } from "react"
import { type PromoMovieSchema } from "../../Interfaces/Movies"
import { Promo } from "../Promo"
import { FilmAbout } from "./FilmAbout"

export const Film: FC<PromoMovieSchema> = ({ movie }) => {
  return (
    <>
      <Promo movie={movie} showButtons={false} />
      <FilmAbout movie={movie} />
    </>
  )
}
