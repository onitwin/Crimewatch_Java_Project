import React from 'react';
import SafetyTip from './SafetyTip'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  }
}));

const SafetyTipList = (props) => {
const classes = useStyles();
  if(props.safetyTips.length === 0)
  return (<p> loading... </p>)

  const safetyTips = props.safetyTips.map((safetyTip, index) => {
    return(
      <Grid key={index} item xs>
      <SafetyTip safetyTip={safetyTip}/>
      </Grid>

    )
  })

  return(
    <div >
    <h1 className={classes.root}> Tips To Say Safe </h1>
    <Grid  className="component-list">
     {safetyTips}

   </Grid>
   </div>
  )
}

export default SafetyTipList;
