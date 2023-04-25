export type MovieResponse = {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export type SearchMovieResponse = {
  Search: Array<MovieResponse>
  totalResult: string
  Response: string
}

export type Movie = {
  id: string
  title: string
  year: string
  type: string
  poster: string
}
