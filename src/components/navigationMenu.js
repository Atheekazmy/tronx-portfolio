import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    container: {
        fontFamily: 'Raleway',
        padding: '10em 1em',
        display: 'flex',
        flexDirection: 'column',
        width: '200px',
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
            "&:before": {
                position: 'absolute',
                opacity: 0,
                width: '0%',
                height: 2,
                content: '""',
                background: theme.palette.secondary.main,
                transition: 'all 0.3s',
                left: '0px',
                top: '0px',
            },
            "&:after": {
                position: 'absolute',
                opacity: 0,
                width: '0%',
                height: 2,
                content: '""',
                background: theme.palette.secondary.main,
                transition: 'all 0.3s',
                right: '0px',
                bottom: '0px',
            },
            '&:hover': {
                "&:before": {
                    opacity: 1,
                    width: '100%',
                },
                "&:after": {
                    opacity: 1,
                    width: '100%',
                }
            },
        }
    },
}))

const menuName = ['Home', 'Services', 'Resume', 'Projects', 'Blogs', 'Contact'];

export const NavigationMenu = ({ onChange }) => {
    const classes = useStyles()
    return (
        <div className={`${classes.container} ${classes.borderXwidth}`}>
            {menuName.map((x, i) => <a onClick={() => onChange(i)}><Typography >{x}</Typography></a>)}
        </div>
    );
};
