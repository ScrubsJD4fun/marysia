import { useParams } from "react-router-dom"
import { FetchFilmId } from "../../components/Film/FetchFilmId"

const FilmPage = () => {
  const { id } = useParams()

  return (
    <>
      <FetchFilmId id={id} />
    </>
  )
}

export default FilmPage
