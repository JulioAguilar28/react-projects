import { useState, useEffect } from 'react'

export default function useCharacters() {
  const [characters, setCharacters] = useState([])
  const API_KEY = '64b00de1e32bbd4d7a28e3cf05db35a8'
  const marvelUrlEndpoint = `https://gateway.marvel.com:443/v1/public/characters?apikey=${API_KEY}`

  const generateEndpoint = (query) => {
    return query ? marvelUrlEndpoint + `&nameStartsWith=${query}` : marvelUrlEndpoint
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
