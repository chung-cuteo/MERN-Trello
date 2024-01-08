import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const APP_BAR_HEIGHT = '55px'
const BOARD_BAR_HEIGHT = '60px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`

const theme = extendTheme({
  appCustom: {
    headerHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT,
  },
  colorSchemes: {
    // light: {
    //   palette: {
    //
    //   },
    // },
    // dark: {
    //   palette: {
    //
    //   },
    // },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        fontSize: '0.875rem',
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        fontSize: '0.875rem',
        '.MuiOutlinedInput-notchedOutline': {},
        '& fieldset': {
          borderWidth: '1px !important',
        },
      },
    },
  },
})

export default theme
