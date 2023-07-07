import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Box,
  Typography
} from '@mui/material'
import { Close } from '@mui/icons-material'

function CharacterModal({ character, open, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '& .MuiPaper-root': {
          minWidth: '380px',
          minHeight: '400px'
        }
      }}
    >
      <Box
        component='header'
        sx={{
          alignSelf: 'flex-end',
          padding: '8px',
          cursor: 'pointer'
        }}
        onClick={onClose}
      >
        <Close />
      </Box>
      <DialogTitle>{character.name}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {character.description || 'There is no description about this character'}
        </DialogContentText>

        <Typography variant='h6'>Comics</Typography>

        <Box
          component='ul'
          sx={{
            listStyle: 'none',
            margin: '0',
            padding: '8px'
          }}
        >
          {character.comics.items.map((comic) => (
            <DialogContentText key={`${character.name}-${comic.name}`}>
              <Box
                component='li'
                sx={{
                  cursor: 'pointer',
                  ':hover': {
                    textDecoration: 'underline'
                  }
                }}
                onClick={() => onClose(comic)}
              >
                {comic.name}
              </Box>
            </DialogContentText>
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default CharacterModal
