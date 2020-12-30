import React, { useContext, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import SwitchUI from '@material-ui/core/Switch'
import { VerticalSlider } from './components/verticalslider'
import { CustomThemeContext } from './themes/customThemeProvider'
import { NavigationMenu } from './components/navigationMenu'
import { Grid } from '@material-ui/core'
import { useWidth } from './utils/hooks/useScreenSize'

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.backgroundImage,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width: '100%'
  },
  themeSwitch: {
    zIndex: 1,
    position: 'fixed',
    top: '2%',
    right: '5%'
  },
  container: {
    height: 'calc(100% - 65px);'
  }

}))

export default function App() {
  const classes = useStyles()
  const swiperRef = useRef();

  const { currentTheme, setTheme } = useContext(CustomThemeContext)
  const isDark = Boolean(currentTheme === 'dark')
  const width = useWidth();
  const handleThemeChange = (event) => {
    const { checked } = event.target
    if (checked) {
      setTheme('dark')
    } else {
      setTheme('normal')
    }
  }

  const onSliderChange = (index) => {
    swiperRef.current && swiperRef.current.changeSlider(index);
  }
  console.log('width', width);

  return (
    <div className={classes.root}>
      <Toolbar>
        <FormControlLabel className={classes.themeSwitch}
          control={<SwitchUI checked={isDark} onChange={handleThemeChange} />}
          label="Theme"
        />
      </Toolbar>
      <main className={classes.content}>
        <Grid container className={classes.container}>
          <Grid item lg={2} sm={2} xl={2} xs={2} >
            <NavigationMenu onChange={onSliderChange} />
          </Grid>
          <Grid item lg={10} sm={10} xl={10} xs={10} >
            <VerticalSlider classes={classes} ref={swiperRef} />
          </Grid>
        </Grid>
      </main>
    </div>
  )
}
