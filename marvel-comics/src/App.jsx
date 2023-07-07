import React, { useCallback } from 'react'
import Characters from './components/Characters'
import Header from './components/Header'
import useCharacters from './hooks/useCharacters'
import { grey } from '@mui/material/colors'
import { debounce } from 'lodash'

function App() {
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
