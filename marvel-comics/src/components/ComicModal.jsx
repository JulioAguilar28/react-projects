import React from 'react'
import { styled } from '@mui/material/styles'
import { Dialog, DialogTitle, DialogContent, DialogContentText, Box } from '@mui/material'
import { Close } from '@mui/icons-material'

const Image = styled('img')({
  borderRadius: '8px',
  width: '280px',
  height: 'auto',
  margin: '0px auto',
  objectFit: 'fill'
})

function ComicModal({ comic, open, onClose }) {
  const { path, extension } = comic.thumbnail
  const comicImage = `${path}.${extension}`

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
      <DialogTitle>{comic.title}</DialogTitle>
      <DialogContent sx={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '16px',
        '& img': {
          alignSelf: 'center'
        }
      }}
      >
        <DialogContentText>
          {comic.description || 'There is no description about this comic'}
        </DialogContentText>

        <Image src={comicImage} alt={`${comic.title} image`} />
      </DialogContent>
    </Dialog>
  )
}

export default ComicModal
