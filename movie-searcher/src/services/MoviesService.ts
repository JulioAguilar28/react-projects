import { SearchMovieFailedResponse, SearchMovieResponse, parseMovie } from '../models/Movie'

const BASE_API_URL = 'https://www.omdbapi.com'
const API_KEY = '2deddb18'
const BASE_API_WITH_APIKEY = `${BASE_API_URL}/?apikey=${API_KEY}`

enum ResponseStatus {
  True = 'True',
  False = 'False'
}

type MoviesResponse = SearchMovieResponse | SearchMovieFailedResponse

export const getMoviesBySearchRequest = async (search: string) => {
  if (!search) return []

  try {
    const response = await fetch(`${BASE_API_WITH_APIKEY}&s=${search}`)
    const data = (await response.json()) as unknown as MoviesResponse
    return data?.Response === ResponseStatus.True
      ? (data as SearchMovieResponse).Search.map(parseMovie)
      : []
  } catch (e) {
    throw new Error('Something went wrong')
  }
}
