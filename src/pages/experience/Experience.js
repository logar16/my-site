import React from "react";
import { makeStyles } from '@material-ui/core/styles';
// import { Grid, Typography, Divider } from "@material-ui/core";

import StartImage from '../../common/StartImage'

import codingImage from './coding.png';

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

      </div>
    </div>
  );
}
