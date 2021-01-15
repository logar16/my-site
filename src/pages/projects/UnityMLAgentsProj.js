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
      <Description/>
    </Entry>
  );
}


function Description() {
  return (
    <Typography variant='body1'>
      For my final project in my Deep Learning course from Georgia Tech, I worked with a team to build intelligent agents that could coordinate teams to play soccer (or football if you want to get picky about it).
      I learned about Unity and their awesome toolkit for testing and training agents using Reinforcement Learning.
      I've always been a fan of RL, so it was invigorating to learn that Unity is also part of the fan club.
      Their API is more robust than the basic Gym API (although they are mostly compatible) and their support for multiple agents and teams etc. got me really excited.
      Not only was I able to gain some great experience in Unity and with RL for my class, but I also was given inspiration on some personal projects I want to pursue.
      <br></br>
      <br></br>
      First is creating an environment similar to (but more complicated than) the Food Collection environment.
      The repository can be found here: <Link color='secondary' href='https://github.com/logar16/ScavengerWorldUnity' target='_blank' rel="noreferrer">https://github.com/logar16/ScavengerWorldUnity</Link>.
      I envision it having several teams of simple units that must work cooperatively to explore and exploit the environment.
      I am inspired by biology and the emergence of complex behaviors in colonial animals (e.g. ants and bees) due to very simple rules which synergistically combine.
      I hope to elicit similar organic emergence using deep learning and an environment which encourages cooperation <i>and</i> competition instead of only one or the other.
      I will provide methods for communication, such as leaving distinct markers, to see if the agents come up with any new and interesting communication protocols.
      <br></br>
      <br></br>
      Secondly, I am quite intrigued by the game <i>1313 Dead End Drive</i> which involves much scheming and tough choices of when to move one's own characters or another's.
      I want to build a simplified simulator of the game which will follow the ML-Agent's API so that I can find an optimal solution to this fun but difficult game.
    </Typography>
  );
}