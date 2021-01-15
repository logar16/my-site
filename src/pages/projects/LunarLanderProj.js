import React from "react";
import { Link, Typography } from "@material-ui/core";

import {Entry} from './Projects';
import landingGif from './SlidingLander.gif';


export default function LunarLander() {
  return (
    <Entry  
      id='lunarLander' 
      title='Lunar Lander' 
      image={landingGif}
    >
      <Description/>
    </Entry>
  );
}


function Description() {
  return (
    <Typography variant='body1'>
      I solved the OpenAI gym LunarLander-v2 environment with an average reward of 200+ for 100 test episodes.
      This is the stated goal of the environment according to the <Link color='secondary' href='https://gym.openai.com/envs/LunarLander-v2/' target='_blank' rel="noreferrer">official environment documentation</Link>.
      I was able to achieve this within 400 episodes of training, meaning it is viable to be on the official <Link color='secondary' href='https://github.com/openai/gym/wiki/Leaderboard#lunarlander-v2' target='_blank' rel="noreferrer">leaderboard</Link>. 
      Hmm...maybe I <i>should</i> add it.
      <br></br>
      <br></br>
      For this project, I built my own DQN agent from scratch, following the original DQN paper released by DeepMind. I made it very performant using PyTorch for both memory storage and the agent.
      Training and evaluation metrics as well as additional details on the whole process can be found at the project repository:
      <br></br>
      <Link color='secondary' href='https://github.com/logar16/LunarLander' target='_blank' rel="noreferrer">https://github.com/logar16/LunarLander</Link>.
      Feel free to take it for a spin! 😉
    </Typography>
  );
}