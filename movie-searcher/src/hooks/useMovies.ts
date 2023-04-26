import { useState } from 'react'
import { Movie } from '../models/Movie'
import { getMoviesBySearchRequest } from '../services/MoviesService'

export function useMovies({ search }: { search: string }) {
  const [movies, setMovies] = useState<Array<Movie>>([])

  const getMovies = async () => {
    const newMovies = await getMoviesBySearchRequest(search)
    setMovies(newMovies)
  }

  return { movies, getMovies }
}
