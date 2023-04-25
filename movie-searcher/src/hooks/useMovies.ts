import moviesResultMock from '../mocks/with-results.json'
import { Movie, MovieResponse } from '../models/Movie'

export function useMovies() {
  const movies = moviesResultMock.Search.map(parseMovie)

  return { movies }
}

const parseMovie = (json: MovieResponse): Movie => ({
  id: json.imdbID,
  title: json.Title,
  year: json.Year,
  type: json.Type,
  poster: json.Poster
})
