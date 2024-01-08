import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { teal, cyan, deepOrange, orange } from '@mui/material/colors'

const theme = extendTheme({
  appCustom: {
    headerHeight: '55px',
    boardBarHeight: '65px',
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange,
      },
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange,
      },
    },
  },
})

export default theme
