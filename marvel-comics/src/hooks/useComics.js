import React from 'react'

export default function useComics() {
  const [comics, setComics] = React.useState([])
  const [comicURI, setComicURI] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  const API_KEY = '64b00de1e32bbd4d7a28e3cf05db35a8'
  const marvelAllComicsEndpoint = `https://gateway.marvel.com:443/v1/public/comics?apikey=${API_KEY}`

  const comicsEndpoint = React.useMemo(() => {
    return comicURI ? `${comicURI}?apikey=${API_KEY}` : marvelAllComicsEndpoint
  }, [comicURI])

  const getByComicURI = (URI) => {
    setComicURI(URI)
  }

  React.useEffect(() => {
    setLoading(true)
    fetch(comicsEndpoint).then((response) =>
      response.json().then((results) => {
        setComics(results.data.results)
        setLoading(false)
      })
    )
  }, [comicsEndpoint])

  return { comics, getByComicURI, loading }
}
