import React from 'react'
import AppHead from '~/components/AppHead'
import Container from '@mui/material/Container'

function DefaultLayout({ children }) {
  return (
    <>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          height: '100vh',
          minWidth: '1080px',
          overflowX: 'scroll',
        }}
      >
        <AppHead />
        {children}
      </Container>
    </>
  )
}

export default DefaultLayout
