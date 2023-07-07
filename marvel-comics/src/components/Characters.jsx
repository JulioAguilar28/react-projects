import React, { useState } from 'react'
import CharacterView from './CharacterView'
import CharacterModal from './CharacterModal'
import { styled } from '@mui/material/styles'

const CharacterListContainer = styled('ul')({
  display: 'grid',
  listStyle: 'none',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  rowGap: '24px'
})

function Characters({ characters }) {
  const [selectedCharacter, setSelectedCharacter] = useState(null)

  const handleSelectedCharacter = (character) => {
    setSelectedCharacter(character)
  }

  const handleCloseModal = (comic) => {
    if (comic) {
      console.log(comic)
    }

    setSelectedCharacter(null)
  }

  return (
    <>
      <CharacterListContainer>
        {characters.map((character) => (
          <CharacterView key={character.id} character={character} onSelected={handleSelectedCharacter} />
        ))}
      </CharacterListContainer>

      {selectedCharacter && <CharacterModal open character={selectedCharacter} onClose={handleCloseModal} />}
    </>
  )
}

export default Characters
