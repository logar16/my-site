import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Divider, Link } from "@material-ui/core";

import StartImage from '../../common/StartImage'
import Contact from '../../common/Contact'
import {EducationExperience, WorkExperience} from './ExperienceSummary'

import portrait from './profile.jpg';

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
  experiences: {
    maxWidth: 1200,
    margin: 'auto'
  }
});

export default function Home() {
  const classes = useStyles();
  const startRef = React.useRef();

  const clickHandler = () => {
    startRef.current.scrollIntoView();
  }

  return (
    <div className={classes.root}>
      <div>
        <StartImage 
          onClick={clickHandler} 
          bgImage={portrait} 
          strength={400}
          left={<Intro/>}  
        />
      </div>
      <div  ref={startRef}></div>
      <div>
        <Divider className={classes.divider} variant='middle'></Divider>

        <Grid container justify="center">
          <Grid item>
            <Typography className={classes.longText} variant="body1">{elevatorPitch}</Typography>
          </Grid>
        </Grid>

        <Divider  className={classes.divider} variant='middle'></Divider>

        <Experiences/>

        <Divider  className={classes.divider} variant='middle'></Divider>

        <Grid container justify="center">
          <Grid item>
            <Invitation className={classes.longText}/>
          </Grid>
        </Grid>

        <Divider  className={classes.divider} variant='middle'></Divider>

        <Contact></Contact>
      </div>
    </div>
  );
}

function Intro() {
  return (
    <Grid container justify='center' alignItems='flex-end' style={{height: '100%'}}>
      <Typography className='rotated' variant='h4'>
        Hello!
        <br></br>
        I am Logan Jones
      </Typography>
    </Grid>
  );
}


function Experiences() {
  const classes = useStyles();
  return (
    <div  className={classes.experiences}>
      <Typography variant="h3">Education</Typography>
      <EducationExperience/>

      <Divider  className={classes.divider} variant='middle'></Divider>

      <Typography variant="h3">Work Experience</Typography>
      <WorkExperience/>
    </div>
  );
}


const elevatorPitch = `My name is Logan Jones. I'm a self-taught programmer with a Master’s degree in 
Artificial Intelligence and Machine Learning and over four years of 
work experience as a Software Engineer. 
I'm trying to break into a new role as a ML researcher and engineer.  I love
Reinforcement Learning and making AI agents that can make decisions on their own.`


function Invitation(props) {
  return (
    <Typography className={props.className}>
      Check out the other sections of the site to learn more about my <Link href='/#/experience/gatech'>education</Link>
      , <Link href='/#/experience/amazon'>work experience</Link>
      , <Link href='/#/projects'>ongoing projects</Link>, 
      and <Link href='/#/about'>general information</Link> about me and how I got here.
      You can also find ways to contact me below. I'm always happy to connect! 
      I am looking for remote positions at this time.  If you or someone you know wants to hire someone like me, please let me know!  
      <br></br>
      Cheers!
    </Typography>
  );  
}