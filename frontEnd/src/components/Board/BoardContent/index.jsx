
import Box from '@mui/material/Box'
import Column from './Column'
import mapOrder from '~/utils/mapOrder'

function index({ board }) {
  const { columns, columnOrderIds } = board
  const orderedColumns = mapOrder(columns, columnOrderIds, '_id')

  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.appCustom.boardContentHeight,
        display: 'flex',
        padding: 2,
        gap: 2,
      }}
    >
      {orderedColumns?.length > 0 &&
        orderedColumns.map((column) => (
          <Column key={column._id} column={column} />
        ))
      }
    </Box>
  )
}

export default index
