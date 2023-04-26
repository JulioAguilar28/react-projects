export type MovieResponse = {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export type SearchMovieResponse = {
  Search: Array<MovieResponse>
  totalResults: string
  Response: string
}

export type SearchMovieFailedResponse = {
  Response: string
  Error: string
}

export type Movie = {
  id: string
  title: string
  year: string
  type: string
  poster: string
}

export const parseMovie = (json: MovieResponse): Movie => ({
  id: json.imdbID,
  title: json.Title,
  year: json.Year,
  type: json.Type,
  poster: json.Poster
})
