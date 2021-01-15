import React from "react";

import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import Carousel from 'react-bootstrap/Carousel'

import lunarLander from './FlightDemo.gif';
import soccerTwosFPV from './SoccerTwosFPV.gif';

const useStyles = makeStyles(() => ({
  root: {
    maxHeight: 500,
    backgroundColor: '#2a2a2a'
  },
  content: {
    marginTop: 30,
    height: '100%',
    width: '100%'
  },
}));

export default function DemoCarousel(props) {
  const classes = useStyles();

  var height = props.height || window.innerHeight - 100;
  height = Math.max(height, 100);

  return (
    <Paper  className={classes.root}  style={{height: height}}>
      <Carousel id='carousel' className='h-100' onClick={props.onClick}>
        <Carousel.Item>
          <Grid 
            container 
            className={classes.content}
            direction='column-reverse' 
            justify='flex-start'
            alignItems='center'
          >
            <Grid item>
              <Typography variant='h3' color='primary'>Lunar Lander</Typography>
            </Grid>
            <Grid item>
              <img
                id='lunarLander-img'
                src={lunarLander}
                alt="After 15,000 training episodes"
              />
            </Grid>
          </Grid>
        </Carousel.Item>
        <Carousel.Item>
          <Grid 
            container 
            className={classes.content}
            direction='column' 
            alignItems='center'
          >
            <Grid item>
              <img
                id='mlagents-img'
                src={soccerTwosFPV}
                alt="First-person view of the agents"
              />
            </Grid>
            <Grid item>
              <Typography variant='h3' color='primary'>Unity ML-Agents</Typography>
            </Grid>
          </Grid>
        </Carousel.Item>
      </Carousel>
    </Paper>
  );
}