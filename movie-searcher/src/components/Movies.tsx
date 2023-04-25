import type { Movie } from '../models/Movie'

type Props = {
  movies: Array<Movie>
}

function ListOfMovies({ movies }: Props) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  )
}

function NoResultMovies() {
  return <p>There are no movies with the search</p>
}

export default function Movies({ movies }: Props) {
  const areThereMovies = movies.length > 0

  return areThereMovies ? ListOfMovies({ movies }) : NoResultMovies()
}
