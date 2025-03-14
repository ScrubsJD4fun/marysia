import axios from "axios"
import {
  type Genre,
  GenreSchema,
  MovieSchema,
  type Movie,
  type MovieTop,
} from "../Interfaces/Movies"

const URL_SWAGGER = "https://cinemaguide.skillbox.cc/movie"
const URL_SWAGGER__FAVORITE = "https://cinemaguide.skillbox.cc"

export function fetchFilm(id: string): Promise<Movie> {
  return axios
    .get(`${URL_SWAGGER}/${id}`, { withCredentials: true })
    .then(response => MovieSchema.parse(response.data))
}

export function fetchMovie(params?: string, query?: string): Promise<MovieTop> {
  return axios
    .get(`${URL_SWAGGER}?${params}=${query}`, { withCredentials: true })
    .then(response => response.data)
}

export function fetchRandom(): Promise<Movie> {
  return axios
    .get(`${URL_SWAGGER}/random`, { withCredentials: true })
    .then(response => MovieSchema.parse(response.data))
}

export function fetchTop(): Promise<MovieTop> {
  return axios
    .get(`${URL_SWAGGER}/top10`, { withCredentials: true })
    .then(response => response.data)
}

export function fetchGenres(): Promise<Genre> {
  return axios
    .get(`${URL_SWAGGER}/genres`, { withCredentials: true })
    .then(response => GenreSchema.parse(response.data))
}

export function getListFavorites() {
  return axios
    .get(`${URL_SWAGGER__FAVORITE}/favorites`, { withCredentials: true })
    .then(response => response.data)
}
export function addFavorites(id: string): Promise<void> {
  return axios
    .post(
      `${URL_SWAGGER__FAVORITE}/favorites`,
      {
        id,
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
    .then(() => undefined)
}

export function deleteFavorites(id: number) {
  return axios.delete(`${URL_SWAGGER__FAVORITE}/favorites/${id}`, {
    withCredentials: true,
  })
}
