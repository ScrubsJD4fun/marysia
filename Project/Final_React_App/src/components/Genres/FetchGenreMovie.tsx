import { useQuery } from "@tanstack/react-query"
import { fetchGenres } from "../../api/fetchFilms"
import { queryClient } from "../../api/queryClient"
import { Genres } from "./Genres"

export const FetchGenreMovie = () => {

    const queryGenres = useQuery({
        queryFn: () => fetchGenres(),
        queryKey: ['genres']
    }, queryClient)
    
    switch (queryGenres.status) {
        case 'pending':
            return (<p>Loading...</p>)
        case "success":
            
            return <Genres genres={queryGenres.data} />
        case "error":
            return (
                <div>
                    <span>Произошла ошибка</span>
                    <button onClick={() => queryGenres.refetch()}></button>
                </div>
            )
    }
}
