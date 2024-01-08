import { experimental_extendTheme as extendTheme } from '@mui/material/styles';
import { teal, cyan, deepOrange, orange } from '@mui/material/colors';

const theme = extendTheme({
  appCustom: {
    headerHeight: '55px',
    boardBarHeight: '60px',
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
        root: ({ theme }) => ({
          fontSize: '0.875rem',
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: '0.875rem',
          '.MuiOutlinedInput-notchedOutline': {
          },
          '& fieldset': {
            borderWidth: '1px !important',
          },
        }),
      },
    },
  },
});

export default theme;
