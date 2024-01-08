
import Box from '@mui/material/Box'
import Columns from './Columns'

function index() {

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
      <Columns />
    </Box>
  )
}

export default index
