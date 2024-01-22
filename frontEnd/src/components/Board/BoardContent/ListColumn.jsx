import React from 'react'
import Column from './Column'
import Box from '@mui/material/Box'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'

function ListColumn({ columnsIDArray, orderedColumns }) {
  return <>
    <SortableContext items={columnsIDArray} strategy={horizontalListSortingStrategy}>
      <Box
        sx={{
          width: '100%',
          height: (theme) => theme.appCustom.boardContentHeight,
          display: 'flex',
          padding: 2,
          gap: 2,
        }}
      >
        {orderedColumns && orderedColumns?.map((column) => <Column key={column._id} column={column} />)}
      </Box>
    </SortableContext>
  </>
}

export default ListColumn
