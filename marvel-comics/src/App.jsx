import React from 'react'
import CharacterView from './components/CharacterView'
import Header from './components/Header'
import { styled } from '@mui/material/styles'
import { grey } from '@mui/material/colors'
import charactersResults from './mocks/characters.json'

const CharacterListContainer = styled('ul')({
  display: 'grid',
  listStyle: 'none',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  rowGap: '24px'
})

function App () {
  const characters = charactersResults.data.results

  return (
    <main style={{ backgroundColor: grey[100] }}>
      <Header />

      <section>
        <CharacterListContainer>
          {characters.map((character) => (
            <CharacterView key={character.id} character={character} />
          ))}
        </CharacterListContainer>
      </section>
    </main>
  )
}

export default App
