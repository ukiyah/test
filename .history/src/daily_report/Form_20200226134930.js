import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from "./Paper";
import typeface from "typeface";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

export default function BasicTextFields() {
    const classes = useStyles();

    return (

        <Paper>
            <Typography variant="h2">
                jj
            </Typography>
        </Paper>
    //     <form className={classes.root} noValidate autoComplete="off">
                
    //     <TextField id="standard-basic" label="Standard" />
    //     <TextField id="filled-basic" label="Filled" variant="filled" />
    //     <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    // </form>
        

    );
}
