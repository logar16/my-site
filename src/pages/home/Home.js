import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, Divider } from "@material-ui/core";
import { Parallax } from "react-parallax";

import portrait from './profile.jpg';
import gatech from '../experience/gatech.png'
import suu from '../experience/suu.png'

const useStyles = makeStyles({
  root: {
    textAlign: "center"
  },
  divider: {
    margin: 30,
    // width: 100
  },
  pitch: {
    maxWidth: 800,
  },
  logos: {
    maxWidth: 400,
    maxHeight: 200
  },
  experienceRow: {
    padding: "5% 10% 5%",
  }
});

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Parallax bgImage={portrait}  strength={500}>
          <div style={{ height: 600 }}>
            {/* <div>HTML inside the parallax</div> */}
          </div>
        </Parallax>
      </div>
      <div>
        <Divider  className={classes.divider} variant='middle'></Divider>
        <Grid container justify="center">
          <Grid item>
            <Typography className={classes.pitch} variant="body1">{elevatorPitch}</Typography>
          </Grid>
        </Grid>
        <Divider  className={classes.divider} variant='middle'></Divider>
        <Typography variant="h3">Education</Typography>
        <Grid container direction="column" justify="space-evenly">
          <ExperienceRow  image={gatech}  experience={gatechExperience}/>
          <ExperienceRow  image={suu} experience={suuExperience}/>
        </Grid>
        <Divider  className={classes.divider} variant='middle'></Divider>
        <Typography variant="h3">Work Experience</Typography>
        <Divider  className={classes.divider} variant='middle'></Divider>
        <Typography>
          Check out the other sections of the site to learn about my education and experience,
          ongoing projects, and more general information about me and how I got here.
        </Typography>
        <Divider  className={classes.divider} variant='middle'></Divider>
        <div>
          Contact info
        </div>
      </div>
    </div>
  );
}


function ExperienceRow({image, experience}) {
  const classes = useStyles();
  return (
    <Grid item>
      {/* <Paper> */}
        <Grid 
          container 
          row
          wrap="wrap" 
          justify="center"
          className={classes.experienceRow}
        >
          <Grid item  xs={6}>
            <img  className={classes.logos} src={image} alt=""/>
          </Grid>
          <Grid item  xs={6}>
            <ExperienceText>{experience}</ExperienceText>
          </Grid>
        </Grid>
      {/* </Paper> */}
    </Grid>
  );
}

function ExperienceText(props) {
  let experience = props.children;
  let title = experience.title;
  let subtitle = experience.subtitle;
  let details = experience.details;

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h4">{title}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6" style={{whiteSpace: "pre-line"}}>{subtitle}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6">{details}</Typography>
      </Grid>
    </Grid>
  );
}

const elevatorPitch = `My name is Logan Jones. I'm a self-taught programmer with a Master’s degree in 
Artificial Intelligence and Machine Learning and over four years of 
work experience as a Software Engineer. 
I'm trying to break into a new role as a ML researcher and engineer.  I love
Reinforcement Learning and making AI agents that can make decisions on their own.`

const suuExperience = {
  title: "Bachelor of Science",
  subtitle: "Major: Biology\nMinor: Chemistry",
  details: "Graduated May 2016 with GPA 3.77"
}

const gatechExperience = {
  title: "Master of Science",
  subtitle: "Major: Computer Science\nConcentration: Interactive Intelligence",
  details: "Graduated Dec 2020 with GPA 3.80"
}
