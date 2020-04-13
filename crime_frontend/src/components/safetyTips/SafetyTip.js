import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const SafetyTip = (props) => {
const classes = useStyles();

  if(!props.safetyTip){
    return "Loading"
  }

  return(
    <Paper className={classes.paper}>

      <h2> {props.safetyTip.title} </h2>
      <p> {props.safetyTip.description} </p>

      </Paper>
  )
}

export default SafetyTip;
