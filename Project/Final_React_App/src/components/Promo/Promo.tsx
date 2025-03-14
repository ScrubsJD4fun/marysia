import { type FC } from "react"
import { type PromoMovieSchema } from "../../Interfaces/Movies"
import { PromoInfo } from "./PromoInfo"
import { PromoButtons } from "./PromoButtons"
import { PromoTitle } from "./PromoTitle"
import "./Promo.css"

export const Promo: FC<PromoMovieSchema> = ({
  movie,
  showButtons = true,
  onRefresh,
}) => {
  return (
    <div className="promo-app">
      <img className="promo-img" src={movie.posterUrl} alt="Постер фильма" />
      <div className="promo-block">
        <PromoInfo movie={movie} />
        <PromoTitle movie={movie} />
        <PromoButtons
          id={movie.id.toString()}
          trailer={movie.trailerYouTubeId}
          onRefresh={onRefresh as () => void}
          showAllButtons={showButtons}
        />
      </div>
    </div>
  )
}
