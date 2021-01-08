import React from "react";
import { Divider, Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import StartImage from '../../common/StartImage';
import Contact from '../../common/Contact';

import mlagents from './ML-Agents.png';
import flightGif from './FlightDemo.gif';
import soccerTwosFPV from './SoccerTwosFPV.gif';

const useStyles = makeStyles(() => ({
  divider: {
    margin: 30,
  },
}));



export default function Projects() {
  const classes = useStyles();

  const clickHandler = () => {
    let start = document.getElementById('start');
    start.scrollIntoView();
  }

  return (
    <div>
      <div>
        <StartImage onClick={clickHandler} bgImage={mlagents} strength={400}></StartImage>
      </div>
      
      <Typography variant='body2'>
        <i>
          Photo courtesy of <a href='https://github.com/Unity-Technologies/ml-agents/'>Unity ML-Agents Toolkit GitHub repository</a>
        </i>
      </Typography>
      
      <div id='start' style={{height: 10}}/>

      <ProjectList>

      </ProjectList>

      <div>
        <Divider  className={classes.divider}  variant='middle'/>
        <Contact/>
      </div>
    </div>
  );
}


function ProjectList() {
  return (
    <Grid>

    </Grid>
  );
}