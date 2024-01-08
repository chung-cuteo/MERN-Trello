import React from 'react'
import Box from '@mui/material/Box';
import DarkMode from '~/components/AppearanceMode'

function index() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.light',
        height: (theme) => theme.appCustom.headerHeight,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <DarkMode />
    </Box>
  )
}

export default index