import type { ReactNode } from "react"
import { z } from "zod"

export const MovieSchema = z.object({
  id: z.number(),
  title: z.string(),
  originalTitle: z.string().nullable(),
  language: z.string().nullable(),
  relaseYear: z.optional(z.number()),
  releaseDate: z.string().nullable(),
  genres: z.array(z.string()),
  plot: z.string().nullable(),
  runtime: z.number().nullable(),
  budget: z.string().nullable(),
  revenue: z.string().nullable(),
  homepage: z.string().nullable(),
  status: z.string().nullable(),
  posterUrl: z.optional(z.string()),
  backdropUrl: z.string().nullable(),
  trailerUrl: z.string().nullable(),
  trailerYouTubeId: z.optional(z.string()),
  tmdbRating: z.number(),
  searchL: z.string().nullable(),
  keywords: z.array(z.string()).nullable(),
  countriesOfOrigin: z.array(z.string()).nullable(),
  languages: z.array(z.string()).nullable(),
  cast: z.array(z.string()).nullable(),
  director: z.string().nullable(),
  production: z.string().nullable(),
  awardsSummary: z.string().nullable(),
})

export type Movie = z.infer<typeof MovieSchema>

export const MovieTopSchema = z.array(MovieSchema)

export type MovieTop = z.infer<typeof MovieTopSchema>

export interface TopFilmsSchema {
  films: MovieTop
}

export const GenreSchema = z.array(z.string())
export type Genre = z.infer<typeof GenreSchema>
export interface GenresSchema {
  genres: Genre
}

export interface PromoMovieSchema {
  movie: Movie
  showButtons?: boolean
  onRefresh?: () => void
}
// Интерфейс для отображения 2-ух или 4-х кнопок
export interface ShowButtons {
  showAllButtons: boolean
  onRefresh: () => void
  id: string
  trailer: string | undefined
}

export interface FilmId {
  id: string | undefined
}

export interface CloseModal {
  closeModal: () => void
  children: ReactNode
}

export interface IFormFieldProps {
  label?: string
  children: ReactNode
  errorMessage?: string
}
