import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import './App.css'

function App() {
  const { fact, refreshFactHandler } = useCatFact()
  const { imgUrl } = useCatImage({ fact })

  return (
    <main>
      <h1>Cat Random App</h1>

      <button onClick={refreshFactHandler}>Get Random Fact</button>
      {fact && <p data-testid="fact">{fact}</p>}
      {imgUrl && (
        <img
          data-testid="img"
          src={imgUrl}
          alt={`Image extracted using the first three words for ${fact}`}
        />
      )}
    </main>
  )
}

export default App
