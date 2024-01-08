import React from 'react'
import Box from '@mui/material/Box'

function index() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        width: '100%',
        height: (theme) => `calc(100vh - ${theme.appCustom.headerHeight} - ${theme.appCustom.boardBarHeight})`,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      Board content
    </Box>
  )
}

export default index
