import { useState, useEffect } from 'react'
import './App.css'

const CAT_ENDPOINT_FACT_URL = 'https://catfact.ninja/fact'
const CAT_ENDPOINT_IMG_URL = 'https://cataas.com'

type FactResponse = {
  fact: string
  length: number
}

type CatImageResponse = {
  file: string
  url: string
}

function App() {
  const [fact, setFact] = useState<string>('')
  const [imgUrl, setImgUrl] = useState<string>('')

  useEffect(() => {
    fetch(CAT_ENDPOINT_FACT_URL)
      .then((response) => response.json())
      .then((data: FactResponse) => {
        setFact(data.fact)
      })
  }, [])

  useEffect(() => {
    if (!fact) return

    const threeFirstWord = fact.split(' ', 3).join(' ')
    fetch(`${CAT_ENDPOINT_IMG_URL}/cat/says/${threeFirstWord}?size=50&color=red&json=true`)
      .then((response) => response.json())
      .then((data: CatImageResponse) => {
        setImgUrl(`${CAT_ENDPOINT_IMG_URL}/${data.url}`)
      })
  }, [fact])

  return (
    <main>
      <h1>Cat Random App</h1>

      {fact && <p>{fact}</p>}
      {imgUrl && (
        <img src={imgUrl} alt={`Image extracted using the first three words for ${fact}`} />
      )}
    </main>
  )
}

export default App
