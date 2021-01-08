import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import ExperienceSwitcher from './Switch'
import StartImage from '../../common/StartImage'
import Contact from '../../common/Contact'
import GatechExperience from './GatechExp'
import SuuExperience from './SuuExp'
import AmazonExperience from './AmazonExp'
import CgmExperience from './CgmExp'

import codingImage from './coding.png';
import { Divider, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    // textAlign: "center"
  },
  divider: {
    margin: 30,
  },
  experience: {
    maxWidth: "90%",
    padding: 20,
    margin: "auto",
  },
  logo: {
    maxWidth: "100%",
  },
  body: {
    maxWidth: 800
  },
  lists: {
    ...theme.typography.body1,
  },
  text: {
    textIndent: "2em",
    marginBottom: 10
  }
}));

export default function ExperiencePage() {
  const classes = useStyles();
  const startRef = React.useRef();

  const clickHandler = () => {
    // console.log(startRef)
    window.scrollTo(0, startRef.current.offsetTop - 50);
  }

  return (
    <div className={classes.root}>
      <div>
        <StartImage onClick={clickHandler} bgImage={codingImage}/>
      </div>
      <div  ref={startRef}>
        <ExperienceSwitcher onChange={clickHandler}>
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

export function Experience(props) {
  let classes = useStyles();

  return (
    // <Paper elevation={3}>
      <Grid 
        container 
        direction='column'
        alignItems='center'  
        className={classes.experience}
      >
        <Grid container  justify='center'>
          <img  className={classes.logo}  src={props.image} alt=""/>
        </Grid>

        <Grid 
          container 
          justify="space-between"
          alignItems="baseline"
        >
          <Grid item>
            <Typography variant='h3'>
                {props.role}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h4'>
              {props.date}
            </Typography>
          </Grid>
        </Grid>
        
        <Grid container justify='flex-start'>
          {props.subtitle}
        </Grid>

        <Grid item>
          <div  style={{height:20}}></div>
        </Grid>

        <Grid container  className={classes.body}>
          <Grid item>
            <Typography variant='h4'>
              Summary of Experience
            </Typography>
          </Grid>
          <Grid item>
            {props.summary}
          </Grid>
        </Grid>
        
        {/* <Grid item>
          <Typography variant='body2'>
            <i>(See more details below)</i>
          </Typography>
        </Grid> */}

        <Grid container className={classes.body}>
          <Typography variant='h4'>
            Details
          </Typography>
        </Grid>

        <Grid container className={classes.body}>
          {props.details}
        </Grid>

        {/* Other */}
        <div>
          {props.children}
        </div>
      </Grid>
    // </Paper>
  );
}


export function Section(props){
  const classes = useStyles();
  return (
    <Grid item>
      <Typography variant='h5'>
        {props.title}
      </Typography>
      <Typography variant='body1' component='div'  className={classes.text}>
        {props.text || props.children}
      </Typography>
    </Grid>
  );
}