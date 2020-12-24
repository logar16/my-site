import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import ExperienceSwitcher from './Switch'
import StartImage from '../../common/StartImage'
import Contact from '../../common/Contact'

import codingImage from './coding.png';
import { Divider } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    textAlign: "center"
  },
  divider: {
    margin: 30,
  },
  longText: {
    maxWidth: 800,
  },
});

export default function Experience() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <StartImage bgImage={codingImage}/>
      </div>
      <div  id="start"></div>
      <div>
        <ExperienceSwitcher/>
      </div>
      <Divider  className={classes.divider}  variant='middle'/>
      <Contact/>
    </div>
  );
}
