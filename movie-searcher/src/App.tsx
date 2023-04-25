import React, { useState } from 'react'
import Movies from './components/Movies'
import { useMovies } from './hooks/useMovies'
import useSearch from './hooks/useSearch'
import './App.css'

function App() {
  const { movies } = useMovies()
  const { search, setSearchHandler, error } = useSearch()

  /**
   * This is a no controlled way, because, we do not save
   * the information retrieved from a Form
   */
  // const submitHandler = (event: React.FormEvent) => {
  //   event.preventDefault()0
  //   const formData = new FormData(event.target as HTMLFormElement)
  //   /**
  //    * This way we can get the information from a Form
  //    * using vanilla JS
  //    */
  //   const fields = Object.fromEntries(formData)
  //   console.log(fields)
  // }

  const queryChangeHandler = (event: React.ChangeEvent) => {
    const target = event.currentTarget as HTMLInputElement
    const value = target.value
    setSearchHandler(value)
  }

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    console.log(event)
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
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
