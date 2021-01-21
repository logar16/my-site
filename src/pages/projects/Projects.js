import React, { useEffect } from "react";
import { Divider, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import Carousel from './DemoCarousel';
import LunarLander from './LunarLanderProj'
import UnityMlAgents from './UnityMLAgentsProj'
import Contact from '../../common/Contact';
import { useLocation } from "react-router-dom";
import FutureProjs from "./FutureProj";


const useStyles = makeStyles(() => ({
  list: {
    width: '100%',
  },
  item: {
    width: '100%',
    padding: '0 30px',
    marginTop: 50
  },
  paper: {
    width: '100%',
    minHeight: 100,
    backgroundColor: '#2a2a2a'
  },
  image: {
    width: '100%',
    padding: 8
  },
  description: {
    padding: 10,
    height: '100%'
  },
  divider: {
    margin: 30,
  },
}));



export default function Projects() {
  const classes = useStyles();
  var query = new URLSearchParams(useLocation().search);
  query = query.get('to');

  useEffect(() => {
    var element = document.getElementById(query);
    if (element) {
        window.scroll(0, element.offsetTop - 50);
    }
    else {
      window.scrollTo({top: 0});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <div>
        <Carousel onClick={handleClick}></Carousel>
      </div>
      
      <div id='start' style={{height: 10}}/>

      <ProjectList>
        <LunarLander/>
        <UnityMlAgents/>
        <FutureProjs/>
      </ProjectList>

      <div>
        <Divider  className={classes.divider}  variant='middle'/>
        <Contact/>
      </div>
    </div>
  );
}

const handleClick = (event) => {
  let id = event.target.id || '';
  if (!id) return;
  id = id.replace('-img', '');
  let element = document.getElementById(id);
  if (!element) return;
  window.scroll(0, element.offsetTop - 50);
}


function ProjectList({children}) {
  const classes = useStyles();

  return (
    <Grid 
      container
      className={classes.list}
      direction='column'
      alignItems='center'
    >
      {
        children.map((item, i) => {
          return (
            <Grid item  className={classes.item}  key={i}>
              {item}
            </Grid>
          );
        })
      }
    </Grid>
  );
}


export function Entry({id, title, image, children}) {
  const classes = useStyles();

  return (
    <Paper  id={id} className={classes.paper}>
      <Grid 
        container 
        className={classes.list}
        direction='column'
      >
        <Title  text={title}/>
        <Body image={image}>
          {children}
        </Body>
      </Grid>
    </Paper>
  );
}


function Title({text}) {
  const classes = useStyles();

  return (
    <Grid id='title' item  className={classes.description}>
      <Typography variant='h2'>
        {text}
      </Typography>
      <Divider/>
    </Grid>
  );
}

function Body({image, children}) {
  const classes = useStyles();

  return (
    <Grid container justify='space-around'>
      <Grid item  xs={4}>
        <img className={classes.image} src={image} alt=''/>
      </Grid>
      <Grid item  xs={8}>
        <Grid 
          container  
          className={classes.description}
          direction='column'
          justify='center'
        >
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
}