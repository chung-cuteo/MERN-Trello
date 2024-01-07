import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import DarkMode from './components/DarkMode';

function App() {
  return (
    <>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          backgroundColor: 'primary.main',
          height: '100vh',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'primary.light',
            height: (theme) => theme.appCustom.headerHeight,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <DarkMode />
        </Box>
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
      </Container>
    </>
  );
}

export default App;
