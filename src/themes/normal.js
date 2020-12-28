import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'


// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    background: {
      default: '#ffffff'
    },
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#cc4444',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f5f5f5',
    },
    titleBar: {
      main: 'rgba(0, 0, 0, 0.07)',
      contrastText: '#222222',
    },
  },
})

export default theme
