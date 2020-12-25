import React, { useState } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import getTheme from './base'

// eslint-disable-next-line no-unused-vars
export const CustomThemeContext = React.createContext(
    {
        currentTheme: 'dark',
        setTheme: null,
    },
)

export const CustomThemeProvider = (props) => {
    // eslint-disable-next-line react/prop-types
    const { children } = props

    // State to hold the selected theme name
    const [themeName, _setThemeName] = useState('normal')

    // Retrieve the theme object by theme name
    const theme = getTheme(themeName)

    const setThemeName = (name) => {
        _setThemeName(name)
    }

    const contextValue = {
        currentTheme: themeName,
        setTheme: setThemeName,
    }

    return (
        <CustomThemeContext.Provider value={contextValue}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </CustomThemeContext.Provider>
    )
}
