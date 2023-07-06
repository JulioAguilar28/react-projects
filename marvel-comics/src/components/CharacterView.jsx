import React from 'react'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

function CharacterView ({ character }) {
  const characterThumbnail = `${character.thumbnail.path}/detail.${character.thumbnail.extension}`

  const CharacterContainer = styled('li')({
    position: 'relative'
  })

  const Image = styled('img')({
    width: '250px',
    height: '300px',
    objectFit: 'fill',
    borderRadius: '8px'
  })

  return (
    <CharacterContainer>
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
