import React from 'react'
import { styled } from '@mui/material/styles'
import { red, blueGrey } from '@mui/material/colors'
import { AppBar, Typography, Box, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

function Header () {
  const Header = styled(AppBar)({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    columnGap: '24px',
    padding: '12px',
    backgroundColor: 'white'
  })

  return (
    <Header>
      <Typography variant='h4' component='div' color={red[500]}>
        MARVEL
      </Typography>

      <Box component='div' width='100%'>
        <Box
          component='i'
          sx={{
            position: 'absolute',
            top: '8px',
            padding: '8px',
            color: blueGrey[200]
          }}
        >
          <SearchIcon />
        </Box>
        <TextField
          placeholder='Spiderman, Venom, ...'
          fullWidth
          variant='standard'
          sx={{
            '& input': {
              paddingLeft: '40px',
              color: 'black'
            }
          }}
        />
      </Box>
    </Header>
  )
}

export default Header
