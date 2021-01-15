import React from "react";
import { Divider, Grid, Link, Paper, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import landingGif from './SlidingLander.gif';

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
  description: {
    padding: 10,
    height: '100%'
  },
  image: {
    width: '100%',
    padding: 8
  },
}));


export default function LunarLander() {
  const classes = useStyles();

  return (
    <Paper  id='lunarLander'  className={classes.paper}>
      <Grid 
        container 
        className={classes.list}
        direction='column'
      >
        <Title  className={classes.description}/>
        <Body/>
      </Grid>
    </Paper>
  );
}

function Title(props) {
  return (
    <Grid id='title' item  className={props.className}>
      <Typography variant='h2'>
        Lunar Lander
      </Typography>
      <Divider/>
    </Grid>
  );
}


function Body() {
  const classes = useStyles();

  return (
    <Grid container justify='space-around'>
      <Grid item  xs={4}>
        <img className={classes.image} src={landingGif} alt=''/>
      </Grid>
      <Grid item  xs={8}>
        <Grid 
          container  
          className={classes.description}
          direction='column'
          justify='center'
        >
          <Grid item>
            <Typography variant='body1'>
              I solved the OpenAI gym LunarLander-v2 environment with an average reward of 200+ for 100 test episodes.
              This is the stated goal of the environment according to the <Link color='secondary' href='https://gym.openai.com/envs/LunarLander-v2/' target='_blank' rel="noreferrer">official environment documentation</Link>.
              I was able to achieve this within 400 episodes of training, meaning it is viable to be on the official <Link color='secondary' href='https://github.com/openai/gym/wiki/Leaderboard#lunarlander-v2' target='_blank' rel="noreferrer">leaderboard</Link>. Hmm...maybe I should add it.
              <br></br>
              <br></br>
              For this project, I built my own DQN agent from scratch, following the original DQN paper released by DeepMind. I made it very performant using PyTorch for both memory storage and the agent.
              Training and evaluation metrics as well as additional details on the whole process can be found at the project repository:
              <br></br>
              <Link color='secondary' href='https://github.com/logar16/LunarLander' target='_blank' rel="noreferrer">https://github.com/logar16/LunarLander</Link>.
              Feel free to take it for a spin! 😉
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}