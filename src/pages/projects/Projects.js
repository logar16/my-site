import React from "react";
import { Divider, Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import Carousel from './DemoCarousel';
import Contact from '../../common/Contact';


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
        <Carousel></Carousel>
      </div>
      
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