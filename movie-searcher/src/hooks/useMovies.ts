import { useRef, useState, useMemo, useCallback } from 'react'
import { Movie } from '../models/Movie'
import { getMoviesBySearchRequest } from '../services/MoviesService'

type Props = {
  search: string
  sort: boolean
}

export function useMovies({ search, sort }: Props) {
  const [movies, setMovies] = useState<Array<Movie>>([])
  const [loading, setLoading] = useState<boolean>(false)
  /**
   * This will keeps the state in each render
   */
  const prevSearch = useRef<string>(search)

  /**
   * useCallback hook helps us to memorize a function defition
   * between renders and only executes when the given
   * dependencies or function's parameters have changed
   */
  const getMovies = useCallback(async (search: string) => {
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
  }, [])

  /**
   * useMemo hook helps us to memorize the previous state
   * between renders and only executes when
   * the given dependecies have changed
   */
  const sortedMovies = useMemo(
    () => (sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies),
    [movies, sort]
  )

  return { movies: sortedMovies, getMovies, loading }
}
