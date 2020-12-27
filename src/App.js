import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import SwitchUI from '@material-ui/core/Switch'
import { VerticalSlider } from './components/verticalslider'
import { CustomThemeContext } from './themes/customThemeProvider'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'relative'
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height: '100vh',
    width: '100%'
  },
  themeSwitch: {
    zIndex: 1,
    position: 'fixed',
    top: '2%',
    right: '5%'
  },

}))

export default function App() {
  const classes = useStyles()
  const { currentTheme, setTheme } = useContext(CustomThemeContext)
  const isDark = Boolean(currentTheme === 'dark')

  const handleThemeChange = (event) => {
    const { checked } = event.target
    if (checked) {
      setTheme('dark')
    } else {
      setTheme('normal')
    }
  }

  return (
    <div className={classes.root}>
      <FormControlLabel className={classes.themeSwitch}
        control={<SwitchUI checked={isDark} onChange={handleThemeChange} />}
        label="Theme"
      />
      <main className={classes.content}>
        <Toolbar />
        <VerticalSlider classes={classes} />
      </main>
    </div>
  )
}
