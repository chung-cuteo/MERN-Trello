import React from 'react'
import Container from '@mui/material/Container'
import AppBar from '~/components/AppHead'
import DefaultLayout from '~/layout'
import BoardIndex from '~/components/Board'

function Board() {
  return (
    <>
      <DefaultLayout>
        <BoardIndex />
      </DefaultLayout>
    </>
  )
}

export default Board
