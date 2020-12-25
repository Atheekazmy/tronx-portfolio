import { Button, Checkbox, Paper } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { CustomThemeContext } from "../themes";



export const MainPage = () => {
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
        <div>
            <Paper style={{ height: '100vh' }}>
                <Checkbox
                    checked={isDark}
                    onChange={handleThemeChange}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <Button color="primary" >Primary</Button>
                <Button color="secondary">Secondary</Button>
            </Paper>
        </div>
    )
};
export default MainPage;