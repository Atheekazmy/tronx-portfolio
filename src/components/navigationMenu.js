import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    container: {
        fontFamily: 'Raleway',
        padding: '7em 1em',
        display: 'flex',
        flexDirection: 'column',
        width: '140px',
    },
    borderXwidth: {
        '& a': {
            textDecoration: 'none',
            font: '20px Raleway',
            margin: '0px 10px',
            padding: '10px 10px',
            position: 'relative',
            zIndex: 0,
            cursor: 'pointer',
            backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.main}, 50%, ${theme.palette.titleBar.contrastText} 50%)`,
            backgroundSize: '200% 100%',
            backgroundPosition: '-100%',
            transition: 'all 0.3s ease-in-out',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
            "&:after": {
                position: 'absolute',
                opacity: 0,
                width: '0%',
                height: 3,
                content: '""',
                background: theme.palette.primary.main,
                transition: 'all 0.3s ease-in-out',
                left: '0px',
                bottom: '0px',
            },
            '&:hover': {
                backgroundPosition: '0%',
                "&:after": {
                    opacity: 1,
                    width: '100%',
                }
            },

        },
    },
    selected: {
        background: theme.palette.titleBar.contrastText,
        color: '#fefefe!important'
    }
}))

const menuName = ['Home', 'Services', 'Resume', 'Projects', 'Blogs', 'Contact'];

export const NavigationMenu = ({ onChange }) => {
    const classes = useStyles()
    return (
        <div className={`${classes.container} ${classes.borderXwidth}`}>
            {menuName.map((x, i) => <a className={classes.selected} onClick={() => onChange(i)}><Typography variant="h6" fontWeight={700} >{x}</Typography></a>)}
        </div>
    );
};
