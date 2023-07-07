import React from 'react'
import { styled } from '@mui/material/styles'
import { red, blueGrey } from '@mui/material/colors'
import { AppBar, Typography, Box, Input } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const HeaderWrapper = styled(AppBar)({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  columnGap: '24px',
  padding: '12px',
  backgroundColor: 'white'
})

function Header ({ onInputChange }) {
  const [query, setQuery] = React.useState('')

  const handleOnChange = (event) => {
    setQuery(event.target.value)
    onInputChange(event.target.value)
  }

  return (
    <HeaderWrapper>
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
        <Input
          type='text'
          placeholder='Spiderman, Venom, ...'
          fullWidth
          variant='standard'
          value={query}
          sx={{
            '& input': {
              paddingLeft: '40px',
              color: 'black'
            }
          }}
          onChange={handleOnChange}
        />
      </Box>
    </HeaderWrapper>
  )
}

export default Header
