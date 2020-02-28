import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      marginLeft: 5 ,
      
    },
  },
}));

export default function ContainedButtons(props) {
  const classes = useStyles();

  return (
    
      <Button variant="contained" color="primary" href="#contained-buttons">
        {props.name}
      </Button>
    
  );
}
