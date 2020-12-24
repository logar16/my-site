import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import ExperienceSwitcher from './Switch'
import StartImage from '../../common/StartImage'
import Contact from '../../common/Contact'

import codingImage from './coding.png';
import { Divider, Grid, Typography } from "@material-ui/core";

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

export default function ExperiencePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <StartImage bgImage={codingImage}/>
      </div>
      <div  id="start"></div>
      <div>
        <ExperienceSwitcher>
          <GatechExperience id="gatech"/>
          <SuuExperience    id="suu"/>
          <AmazonExperience id="amazon"/>
          <CgmExperience    id="cgm"/>
        </ExperienceSwitcher>
      </div>
      <Divider  className={classes.divider}  variant='middle'/>
      <Contact/>
    </div>
  );
}

function Experience(props) {
  return (
    <div>
      <div>
        <Typography variant='h3'>
          {props.title}
        </Typography>
        <Grid container direction='column'>
          <Grid item>
            <Typography variant='h5'>
              {props.subtitle}
            </Typography>
          </Grid>

          <Grid item>
            <Typography>
                {props.details}
              </Typography>
          </Grid>
        </Grid>
      </div>
      {/* Other */}
      <div>
        {props.children}
      </div>
    </div>

  )
}

function GatechExperience() {
  return <Experience  
    title="Georgia Institute of Technology"
    subtitle="Master of Computer Science"
    details="The following stuff happened and I learned a lot..."
    >
  </Experience>;
}
function SuuExperience() {
  return <Experience  title="Southern Utah University"/>;
}
function AmazonExperience() {
  return <Experience title="Amazon.com"/>;
}
function CgmExperience() {
  return <Experience title="Casino Game Maker Inc."/>;
}