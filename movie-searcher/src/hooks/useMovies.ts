import { useRef, useState } from 'react'
import { Movie } from '../models/Movie'
import { getMoviesBySearchRequest } from '../services/MoviesService'

export function useMovies({ search }: { search: string }) {
  const [movies, setMovies] = useState<Array<Movie>>([])
  const [loading, setLoading] = useState<boolean>(false)
  /**
   * This will keeps the state in each render
   */
  const prevSearch = useRef<string>(search)

  const getMovies = async () => {
    if (prevSearch.current === search) return

    try {
      setLoading(true)
      prevSearch.current = search
      const newMovies = await getMoviesBySearchRequest(search)
      setMovies(newMovies)
    } catch (_e) {
      throw new Error('Someting went wrong')
    } finally {
      setLoading(false)
    }
  }

  return { movies, getMovies, loading }
}
