import React from "react";
import { Divider, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import Carousel from './DemoCarousel';
import LunarLander from './LunarLanderProj'
import Contact from '../../common/Contact';


const useStyles = makeStyles(() => ({
  list: {
    width: '100%',
  },
  item: {
    width: '100%',
    padding: 50,
    margin: '20 0'
  },
  paper: {
    width: '100%',
    minHeight: 100,
    backgroundColor: '#2a2a2a'
  },
  projectItem: {
    padding: 10
  },
  divider: {
    margin: 30,
  },
}));



export default function Projects() {
  const classes = useStyles();

  const handleClick = (event) => {
    let id = event.target.id || '';
    if (!id) return;
    id = id.replace('-img', '');
    let element = document.getElementById(id);
    if (element)
      element.scrollIntoView();
  }

  return (
    <div>
      <div>
        <Carousel onClick={handleClick}></Carousel>
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
  const classes = useStyles();

  return (
    <Grid 
      container
      className={classes.list}
      direction='column'
      alignItems='center'
    >
      <Grid item  className={classes.item}>
        <LunarLander/>
      </Grid>
    </Grid>
  );
}


