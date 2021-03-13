import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { theme } from './theme'
import { Box } from '@material-ui/core'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>Start</Box>
    </ThemeProvider>
  )
}

export default App
