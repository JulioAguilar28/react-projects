import React from 'react'
import CharacterView from './CharacterView'
import { styled } from '@mui/material/styles'

const CharacterListContainer = styled('ul')({
  display: 'grid',
  listStyle: 'none',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  rowGap: '24px'
})

function Characters ({ characters }) {
  return (
    <CharacterListContainer>
      {characters.map((character) => (
        <CharacterView key={character.id} character={character} />
      ))}
    </CharacterListContainer>
  )
}

export default Characters
