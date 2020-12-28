import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'


// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#111111'
    },
    primary: {
      main: '#007bff',
      light: 'rgb(81, 91, 95)',
      dark: 'rgb(26, 35, 39)',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#007bff',
      light: 'rgb(255, 197, 112)',
      dark: 'rgb(200, 147, 89)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    titleBar: {
      main: 'rgba(255, 255, 255, 0.07)',
      contrastText: '#ffffff',
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
