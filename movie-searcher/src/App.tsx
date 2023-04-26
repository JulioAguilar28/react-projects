import React, { useCallback, useState } from 'react'
import Movies from './components/Movies'
import { useMovies } from './hooks/useMovies'
import useSearch from './hooks/useSearch'
import debounce from 'just-debounce-it'
import './App.css'

function App() {
  const [sort, setSort] = useState<boolean>(false)
  const { search, setSearchHandler, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  /**
   * This is a no controlled way, because, we do not save
   * the information retrieved from a Form
   */
  // const submitHandler = (event: React.FormEvent) => {
  //   event.preventDefault()
  //   const formData = new FormData(event.target as HTMLFormElement)
  //   /**
  //    * This way we can get the information from a Form
  //    * using vanilla JS
  //    */
  //   const fields = Object.fromEntries(formData)
  //   console.log(fields)
  // }

  const debouncedGetMovies = useCallback(
    debounce((search: string) => getMovies(search), 500),
    []
  )

  const queryChangeHandler = (event: React.ChangeEvent) => {
    const target = event.currentTarget as HTMLInputElement
    const value = target.value
    setSearchHandler(value)
    debouncedGetMovies(value)
  }

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    getMovies(search)
  }

  const changeSortHandler = () => {
    setSort(!sort)
  }

  return (
    <div id="id" className="page">
      <header>
        <h1>Movie searcher</h1>

        <form className="form" onSubmit={submitHandler}>
          <input
            name="movie"
            type="text"
            value={search}
            placeholder="Avengers, Start Wars, ..."
            onChange={queryChangeHandler}
          />
          <button type="submit">Search</button>
          <label>
            Sort movies
            <input type="checkbox" checked={sort} onChange={changeSortHandler} />
          </label>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>{loading ? <p>Loading...</p> : <Movies movies={movies} />}</main>
    </div>
  )
}

export default App
