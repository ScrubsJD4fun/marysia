import { FetchRandomMovie } from "../../components"
import { FetchTopMovie } from "../../components"

const MainPage = () => {
    return (
        <>
            <FetchRandomMovie />
            <FetchTopMovie />
        </>
    )
}

export default MainPage;