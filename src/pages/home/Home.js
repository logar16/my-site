import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Divider, Hidden, Container } from "@material-ui/core";

import StartImage from '../../common/StartImage';
import Bottom from "../../common/Bottom";

import {EducationExperience, WorkExperience} from './ExperienceSummary';
import ButtonGrid from './OtherPagesPortal';

import portrait from './profile.jpg';

const useStyles = makeStyles({
  divider: {
    margin: 30,
  },
  longText: {
    maxWidth: 800,
    marginTop: 10,
    marginBottom: 10
  },
  experiences: {
    maxWidth: 1200,
    margin: 'auto'
  },
});

export default function Home() {
  const classes = useStyles();
  const startRef = React.useRef();

  const clickHandler = () => {
    startRef.current.scrollIntoView();
  }

  window.scrollTo({top: 0});

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
      <div  ref={startRef}  id='start'></div>
      <Container>
        <Divider className={classes.divider} variant='middle'></Divider>

        <Grid container justify="center">
          <Grid item>
            <Typography 
              className={classes.longText} variant="body1" align='justify'>
                {elevatorPitch}
              </Typography>
          </Grid>
        </Grid>

        <Divider  className={classes.divider} variant='middle'></Divider>

        <Experiences/>

        <Divider  className={classes.divider} variant='middle'></Divider>

        <ButtonGrid/>

        <Divider  className={classes.divider} variant='middle'></Divider>
        
        <Grid container justify="center">
          <Grid item>
            <Invitation className={classes.longText}/>
          </Grid>
        </Grid>
      </Container>

      <Bottom top='start'/>
    </div>
  );
}

function Intro() {
  return (
    <Grid container justify='center' alignItems='center' style={{height: '100%'}}>
      <Hidden smDown>
        <p className='intro large-text' align='center'>
          Hello!
          <br></br>
          I'm Logan
        </p>
      </Hidden>
    </Grid>
  );
}


function Experiences() {
  const classes = useStyles();
  return (
    <div  className={classes.experiences}>
      <Typography variant="h3"  align='center'>Education</Typography>
      <EducationExperience/>

      <Divider  className={classes.divider} variant='middle'></Divider>

      <Typography variant="h3"  align='center'>Work Experience</Typography>
      <WorkExperience/>
    </div>
  );
}


const elevatorPitch = `My name is Logan Jones. I'm a self-taught programmer with a Master’s degree in 
Artificial Intelligence and Machine Learning. Over the last four years I've been a working as a Software Engineer. 
Now I'm trying to break into a new role as a ML researcher and engineer.  
I love Reinforcement Learning and making AI agents that can make decisions on their own!`


function Invitation(props) {
  return (
    <div  style={{marginTop: 30}}>
      <Typography align='justify' className={props.className}>
        You can find ways to contact me below. I'm always happy to connect with other humans! 
        I am looking for ML research and engineering positions at this time, and 100% remote if possible.  
        If you or someone you know wants to hire someone like me, please let me know!  Until then,
      </Typography>
      {/* <Typography align='justify' className={props.className}>
        Check out the other sections of the site to learn more about my <Link href='my-site#/experience/gatech?switch=true'>education</Link>
        , <Link href='#/experience/amazon?switch=true'>work experience</Link>
        , <Link href='#/projects'>ongoing projects</Link>, 
        and <Link href='#/about'>general information</Link> about me and how I got here.
        You can also find ways to contact me below. I'm always happy to connect! 
        I am looking for remote positions at this time.  If you or someone you know wants to hire someone like me, please let me know!  
      </Typography> */}
      <Typography align='center'>
        Cheers!
      </Typography>
    </div>
  );  
}