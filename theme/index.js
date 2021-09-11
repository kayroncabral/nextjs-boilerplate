import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    primary: {
      light: '#F27059',
      main: '#F25C54',
      contrastText: '#fff'
    },
    secondary: {
      light: '#59d6f2',
      main: '#54c0f2',
      contrastText: '#fff'
    }
  }
})

export default theme
