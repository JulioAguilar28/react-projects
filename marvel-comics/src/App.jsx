import React, { useEffect, useState, useCallback } from 'react'
import Characters from './components/Characters'
import Header from './components/Header'
import { grey } from '@mui/material/colors'
import { debounce } from 'lodash'

function useCharacters () {
  const [characters, setCharacters] = useState([])
  const API_KEY = '64b00de1e32bbd4d7a28e3cf05db35a8'
  const marvelUrlEndpoint = `https://gateway.marvel.com:443/v1/public/characters?apikey=${API_KEY}`

  const generateEndpoint = (query) => {
    return query ? marvelUrlEndpoint + `&name=${query}` : marvelUrlEndpoint
  }

  const searchByName = (query) => {
    const endpoint = generateEndpoint(query)
    fetchCharacters(endpoint)
  }

  const fetchCharacters = (endpoint) => {
    fetch(endpoint).then((response) => {
      response.json().then((results) => {
        setCharacters(results.data.results)
      })
    })
  }

  useEffect(() => {
    fetchCharacters(marvelUrlEndpoint)
  }, [])

  return { characters, searchByName }
}

function App () {
  const { characters, searchByName } = useCharacters()

  const debounceSearchCharacters = useCallback(
    debounce((query) => searchByName(query), 300),
    []
  )

  const handleOnInputChange = (query) => {
    debounceSearchCharacters(query)
  }

  return (
    <main style={{ backgroundColor: grey[100] }}>
      <Header onInputChange={handleOnInputChange} />

      <section>
        {characters.length > 0
          ? <Characters characters={characters} />
          : <h3 style={{ color: 'black', fontSize: '24px' }}>No se encontrarón resultados</h3>}
      </section>
    </main>
  )
}

export default App
