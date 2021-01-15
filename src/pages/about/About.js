import React from "react";
import Typography from '@material-ui/core/Typography';
import { Divider } from "@material-ui/core";

import Contact from "../../common/Contact";
import StartImage from "../../common/StartImage";

import codingImage from '../experience/coding.png';

export default function About() {

  const clickHandler = () => {
    let element = document.getElementById('start');
    window.scroll(0, element.offsetTop - 50);
  }

  return (
    <div>
      <div>
        <StartImage onClick={clickHandler} bgImage={codingImage}  strength={400}/>
      </div>

      <div  id='start'></div>

      <div>
        <Something/>
      </div>

      <div>
        <Divider></Divider>
        <Contact></Contact>
      </div>
    </div>
  );
}

function Something() {
  return (
    <div>
      <Typography>
        What else is there?
      </Typography>
    </div>
  );
}