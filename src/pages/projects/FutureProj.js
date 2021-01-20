import React from "react";
import { Link, Typography } from "@material-ui/core";

import {Entry} from './Projects';
import wipImage from './WIP.png';


export default function FutureProjs() {
  return (
    <Entry  
      id='reader' 
      title='Future Projects' 
      image={wipImage}
    >
      <Body/>
    </Entry>
  );
}

function Body() {
  return (
    <div>
      <MultimediaReader/>
      <br></br>
      <Megalopolis/>
    </div>
  );
}

function Megalopolis() {
  return (
    <div>
      <Typography variant='h4'>
        Megalopolis (Game)
      </Typography>
      <Typography variant='body1' component='div'>
        I've got a resource-gathering strategy board/video game idea that I want to build in Unity.  Working title is <i>Megalopolis</i> for now.
        To help justify my work on it, I will make sure it has a very solid RL or AI interface so that it can be used as an advanced RL test environment.
        This would fit in the middle ground between a toy RL problem and StarCraft II.
      </Typography>
    </div>
  );
}

function MultimediaReader() {
  return (
    <div>
      <Typography variant='h4'>
        Multimedia Reader/Writer
      </Typography>
      <Typography variant='body1'>
        My multidisciplinary <Link href='#/experience/suu?switch=true'>Honors Thesis at SUU</Link> included drawings and music to go along with the written word.
        Honestly, I wanted it to be as close to a movie as possible, but I didn't want to mess with trying to do a film.  
        However, I have since realized that there is a definite space for stories that incorporate more than just text and occasional pictures, and I want to share my such stories with others.
        Thus, I want to create a personal website which allows people to read my stories with all of the extra media included, such as songs that start playing when the text reaches a certain point and loop until another point, and so on.
        <br></br>
        <br></br>
        The goal is to both make a website for reading, but also one for authoring such stories.  I would open it up so anyone can share their multi-media stories on the site.  I plan to use React and cloud services to serve the stories to readers.
        I've done little more than plan it out and create the repositories, but when time permits (and when I can't wait to be a famous fiction writer any longer), I hope to dive into this project.
      </Typography>
    </div>
  );
}