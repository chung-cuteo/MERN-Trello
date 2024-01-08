import React from 'react'
import Box from '@mui/material/Box';

function index() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.dark',
        height: (theme) => theme.appCustom.boardBarHeight,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      Board bar
    </Box>
  )
}

export default index