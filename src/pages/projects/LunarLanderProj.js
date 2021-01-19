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
      <Body/>
    </Entry>
  );
}

function Body() {
  return (
    <div>
      <Summary/>
      <Description/>
    </div>
  );
}

function Summary() {
  return (
    <div>
      <Typography variant='h4'>
        Summary of Experience
      </Typography>
      <Typography variant='body1' component='div'>
        <ul>
          <li>Implemented a very competitive Deep Q-Network from scratch using only <Link href='http://files.davidqiu.com//research/nature14236.pdf' target='_blank' rel='noreferrer'>the published paper</Link> as reference.</li>
          <li>Solved a control problem in a continuous state space with discrete actions (i.e., LunarLander-v2)</li>
          <li>Gained practical PyTorch experience:
            <ul>
              <li>Wrote code to alternate between utilizing <code>cuda</code> or <code>cpu</code> based on available hardware and configuration files to achieve maximum performance on the given machine</li>
              <li>Improved batch experience replay execution speed using Tensors and slicing/vectorization</li>
              <li>Implemented both linear and recurrent neural networks (i.e., GRU and LSTM)</li>
              <li>Formulated a Reinforcement Learning problem into a Supervised Learning problem to simplify training the model</li>
              <li>Gained additional experience with the training and optimizer update loop</li>
            </ul>
          </li>
          <li>Practiced automated hyperparameter search to quickly find best hyperparameters for training</li>
          <li>Graphed and output metrics to enable quick and efficient discernment of training progress and success or failure of evaluation</li>
          <li>Management of Python libraries through <code>conda</code> and <code>pip</code></li>
        </ul>
      </Typography>
    </div>
  );
}

function Description() {
  return (
    <div>
      <Typography variant='h4'>
        Details
      </Typography>
      <Typography variant='body1'>
        I solved the OpenAI gym LunarLander-v2 environment with an average reward of 200+ for 100 test episodes.
        This is the stated goal of the environment according to the <Link href='https://gym.openai.com/envs/LunarLander-v2/' target='_blank' rel="noreferrer">official environment documentation</Link>.
        I was able to achieve this within 400 episodes of training, meaning it is viable to be on the official <Link href='https://github.com/openai/gym/wiki/Leaderboard#lunarlander-v2' target='_blank' rel="noreferrer">leaderboard</Link>. 
        Hmm...maybe I <i>should</i> add it.
        <br></br>
        <br></br>
        For this project, I built my own DQN agent from scratch, following the original DQN paper released by DeepMind. 
        I made it very performant using PyTorch for both experience storage and the agent's neural network. I found PyTorch to be more performant than the Keras library I had initially attempted to use.
        With PyTorch, I was able to see a 50% or so increase in training speed as it took advantage of my multi-core CPU and my NVIDIA GPU.
        <br></br>
        <br></br>
        To find a good configuration, I hand-crafted my own hyperparameter search methods.  
        I even automated training so that I could let my computer run for a day, searching for the best combination of several distinct hyperparameters and network architectures.
        Along with the search, I implemented several graphs to help me track the change in loss (during training) and reward by episode as well as rolling reward means and standard deviations. 
        <br></br>
        <br></br>
        All in all, I felt like I learned a lot about how to (and how not to) build a Deep RL agent and its surrounding training code.
        Training and evaluation metrics as well as additional details and instructions on how to run it yourself can be found at the project repository: <Link href='https://github.com/logar16/LunarLander' target='_blank' rel="noreferrer">https://github.com/logar16/LunarLander</Link>.
        <br></br>
        Feel free to take it for a spin! 😉
      </Typography>
    </div>
  );
}