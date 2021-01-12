import React from "react";

import { Box, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import Carousel from 'react-bootstrap/Carousel'

import lunarLander from './FlightDemo.gif';
import soccerTwosFPV from './SoccerTwosFPV.gif';

const useStyles = makeStyles(() => ({
  root: {
    maxHeight: 500
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
      <Carousel className='h-100'>
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
                src={lunarLander}
                alt="After 15,000 training episodes"
              />
            </Grid>
          </Grid>
          {/* <Carousel.Caption>
            <Typography variant='h3' color='textPrimary'>Lunar Lander</Typography>
          </Carousel.Caption> */}
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
                src={soccerTwosFPV}
                alt="After 15,000 training episodes"
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

{/* <Typography variant='body2'>
  <i>
    Photo courtesy of <a href='https://github.com/Unity-Technologies/ml-agents/'>Unity ML-Agents Toolkit GitHub repository</a>
  </i>
</Typography> */}