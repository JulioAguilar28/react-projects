import React from 'react'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

function CharacterView({ character, onSelected }) {
  const characterThumbnail = `${character.thumbnail.path}/detail.${character.thumbnail.extension}`

  const CharacterContainer = styled('li')({
    width: 'fit-content',
    position: 'relative',
    transition: 'all 200ms ease',
    ':hover': {
      transform: 'scale(1.1)'
    },
    cursor: 'pointer'
  })

  const Image = styled('img')({
    width: '250px',
    height: '300px',
    objectFit: 'fill',
    borderRadius: '8px'
  })

  return (
    <CharacterContainer onClick={() => onSelected(character)}>
      <Box
        component='span' sx={{
          position: 'absolute',
          left: '12px',
          bottom: '12px',
          fontWeight: 'bold',
          color: 'white',
          fontSize: '16px'
        }}
      >{character.name}
      </Box>
      <Image src={characterThumbnail} alt={`${character.name} thumbnail`} />
    </CharacterContainer>
  )
}

export default CharacterView
