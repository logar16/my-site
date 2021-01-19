import React from "react";
import { Link, Typography } from "@material-ui/core";

import {Entry} from './Projects';
import mlagentsImage from './ML-Agents-Banner.png';


export default function UnityMlAgents() {
  return (
    <Entry  
      id='mlagents' 
      title="Unity's ML-Agents" 
      image={mlagentsImage}
    >
      <div>
        <Summary/>
        <Details/>
        <FutureWork/>
      </div>
    </Entry>
  );
}

function Summary() {
  return (
    <div>
      <Typography variant='h4'>
        Summary
      </Typography>
      <Typography variant='body1' component='div'>
        <ul>
          <li>Experience with Unity's ML-Agents toolkit and API</li>
          <li>Created and modified C# scripts to enhance learning and evaluation of performance
            <ul>
              <li>For instance, added reward shaping to reduce the number of steps to convergence</li>
            </ul>
          </li>
          <li>Familiarized with the ML-Agents documentation and its nuances
            <ul>
              <li>Improved team's use of the API and CLI to best use parallelization and reduced training by <b>75%</b></li>
            </ul>
          </li>
          <li>Used Unity as an editor to build Prefabs, Scenes, and RL environments</li>
          <li>Learned how to use the ML-Agents toolkit to allow for easy environment creation and agent training</li>
        </ul>
      </Typography>
    </div>
  );
}

function Details() {
  return (
    <div>
      <Typography variant='h4'>
        Details
      </Typography>
      <Typography variant='body1'>
        For my final project in my Deep Learning course at Georgia Tech, I worked with a team to build intelligent agents that could coordinate teams to play soccer (or "football" if you want to get picky about it).
        I learned about Unity and their awesome toolkit for testing and training agents using Reinforcement Learning.
        I've always been a fan of RL, so it was invigorating to learn that Unity is also part of the fan club.
        Their API is more robust than the basic Gym API and their support for multiple agents and teams etc. got me really excited, as I am convinced that we need to see more multi-agent RL research.
        Not only was I able to gain some great experience in Unity and with RL for my class, but I also was given inspiration on some personal projects I want to pursue.
        <br></br>
        <br></br>
        For the final project I manned creating/modifying Unity assets such as the prefabs, scenes, and scripts.
        I also took charge of evaluating and comparing different models over 1,000 games for each match-up.  
        I also carved the way for the team by experimenting both with the CLI (letting ML-Agents code do training) and by interfacing with the API directly.  
        We chose to stick with the former, but now I know how to do it either way, so I can train either simple or complex models as needed. 
      </Typography>
    </div>
  );
}

function FutureWork() {
  return (
    <div>
      <br></br>
      <Typography variant='h4'>
        Future Directions
      </Typography>
      <Typography>
        Now that I've got a handle on how to use ML-Agents, I want to do some personal research and projects.
        <br></br>
        <br></br>
        First is creating an environment similar to (but more complicated than) the Food Collection environment.
        The repository can be found here: <Link href='https://github.com/logar16/ScavengerWorldUnity' target='_blank' rel="noreferrer">https://github.com/logar16/ScavengerWorldUnity</Link>.
        I envision it having several teams of simple units that must work cooperatively to explore and exploit the environment.
        I am inspired by biology and the emergence of complex behaviors in colonial animals (e.g. ants and bees) due to very simple rules which synergistically combine.
        I hope to elicit similar organic emergence using deep learning and an environment which encourages cooperation <i>and</i> competition instead of only one or the other.
        I will provide methods for communication, such as leaving distinct markers, to see if the agents come up with any new and interesting communication protocols.
        It is still in the early stages, but I will be working on it as I have time.
        <br></br>
        <br></br>
        Secondly, I am quite intrigued by the game <i>1313 Dead End Drive</i> which involves much scheming and tough choices of when to move one's own characters or another's.
        I want to build a simplified simulator of the game which will follow the ML-Agent's API so that I can find an optimal solution to this fun but difficult game.
        Since the game requires predicting or simulating other agent's model of the world and possible decision making process, it is of similar difficulty to the challenging game of Hanabi which was picked out by <Link href='https://arxiv.org/abs/1902.00506' target='_blank' rel='noreferrer'>researchers at DeepMind</Link> as an important problem to solve.
        I think this (my proposed environment) would also serve as a useful testing environment for RL algorithms but in a competitive environment.
      </Typography>  
    </div>
  );
}