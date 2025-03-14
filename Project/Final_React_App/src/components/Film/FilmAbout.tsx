import { type FC } from "react"
import { type PromoMovieSchema } from "../../Interfaces/Movies"
import "./Film.css"

export const FilmAbout: FC<PromoMovieSchema> = ({ movie }) => {
  return (
    <>
      <h2 className="about">О Фильме</h2>
      <div className="items">
        {movie.language && (
          <div className="item-line">
            <div className="item-name">
              <span className="item-text">Язык оригинала</span>
              <div className="item-border"></div>
            </div>
            <span className="item-data">{movie.language.toUpperCase()}</span>
          </div>
        )}
        {movie.budget && (
          <div className="item-line">
            <div className="item-name">
              <span className="item-text">Бюджет</span>
              <div className="item-border"></div>
            </div>
            <span className="item-data">{movie.budget.toUpperCase()}$</span>
          </div>
        )}
        {movie.revenue && (
          <div className="item-line">
            <div className="item-name">
              <span className="item-text">Выручка</span>
              <div className="item-border"></div>
            </div>
            <span className="item-data">{movie.revenue.toUpperCase()}$</span>
          </div>
        )}
        {movie.director && (
          <div className="item-line">
            <div className="item-name">
              <span className="item-text">Режиссёр</span>
              <div className="item-border"></div>
            </div>
            <span className="item-data">{movie.director.toUpperCase()}</span>
          </div>
        )}
        {movie.production && (
          <div className="item-line">
            <div className="item-name">
              <span className="item-text">Продакшен</span>
              <div className="item-border"></div>
            </div>
            <span className="item-data">{movie.production.toUpperCase()}</span>
          </div>
        )}
        {movie.awardsSummary && (
          <div className="item-line">
            <div className="item-name">
              <span className="item-text">Награды</span>
              <div className="item-border"></div>
            </div>
            <span className="item-data">
              {movie.awardsSummary.toUpperCase()}
            </span>
          </div>
        )}
      </div>
    </>
  )
}
