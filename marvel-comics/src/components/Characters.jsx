import React, { useState } from 'react'
import CharacterView from './CharacterView'
import CharacterModal from './CharacterModal'
import ComicModal from './ComicModal'
import { styled } from '@mui/material/styles'
import useComics from '../hooks/useComics'

const CharacterListContainer = styled('ul')({
  display: 'grid',
  listStyle: 'none',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  rowGap: '24px'
})

function Characters({ characters }) {
  const [selectedCharacter, setSelectedCharacter] = useState(null)
  const [selectedComic, setSelectedComic] = useState(null)
  const { comics, getByComicURI } = useComics()

  const handleSelectedCharacter = (character) => {
    setSelectedCharacter(character)
  }

  const handleCloseCharacterModal = (comic) => {
    if (comic.resourceURI) {
      setSelectedComic(comic)
      getByComicURI(comic.resourceURI)
    }

    setSelectedCharacter(null)
  }

  const handleCloseComicModal = () => {
    setSelectedComic(null)
  }

  return (
    <>
      <CharacterListContainer>
        {characters.map((character) => (
          <CharacterView
            key={character.id}
            character={character}
            onSelected={handleSelectedCharacter}
          />
        ))}
      </CharacterListContainer>

      {selectedCharacter && (
        <CharacterModal open character={selectedCharacter} onClose={handleCloseCharacterModal} />
      )}

      {selectedComic && (
        <ComicModal open comic={comics[0]} onClose={handleCloseComicModal} />
      )}
    </>
  )
}

export default Characters
