import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import ExperienceSwitcher from './Switch'
import StartImage from '../../common/StartImage'
import Contact from '../../common/Contact'

import codingImage from './coding.png';
import { Divider, Grid, Typography } from "@material-ui/core";

import gatechImage from './gatech.png'
import suuImage from './suu.png'
import amazonImage from './amazon.png'
import cgmImage from './cgm.png'

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
  }
}));

export default function ExperiencePage() {
  const classes = useStyles();
  const startRef = React.useRef();


  const clickHandler = () => {
    startRef.current.scrollIntoView(true);
  }

  return (
    <div className={classes.root}>
      <div>
        <StartImage onClick={clickHandler} bgImage={codingImage}/>
      </div>
      <div ref={startRef}></div>
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
  let classes = useStyles();

  return (
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
        justify="space-around"
        alignItems="baseline">
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

      <Grid item  className={classes.body}>
          {props.details}
      </Grid>

      {/* Other */}
      <div>
        {props.children}
      </div>
    </Grid>

  )
}

function GatechExperience() {
  let classes = useStyles();
  let details = (
    <ul className={classes.lists}>
      <li>Specialization in Artificial Intelligence and Machine Learning</li>
      <li>Completed challenging assignments by leveraging skills in Python and powerful libraries such as NumPy, SciPy, pandas, and the neural network libraries Keras and PyTorch</li>
      <li>Built AI/ML agents that solved problems using modern AI/ML techniques such as as (bolded were built from scratch, others were using open-source implementations):
        <ul>
          <li><i>Reinforcement Learning</i>: Value/Policy Iteration, Q-Learning, Deep Q-Networks, multi-agent training in zero-sum environments</li>
          <li><i>Supervised Learning</i>: Deep Convolutional Neural Nets (several visual tasks from classification to style transfer), Decision Trees and Random Forests, K-Nearest Neighbors, Support Vector Machines, as well as Bagging and Boosting
            <ul>
              <li><i>Machine Translation</i>: RNNs, LSTMs, Seq2Seq, and Transformer Encoder</li>
            </ul>
          </li>
          <li><i>Unsupervised Learning</i>: Simulated Annealing, Genetic Algorithms, MIMIC, PCA, ICA, and Expectation Maximization</li>
          <li><i>Search</i>: A* Search, and Minimax (with Alpha-Beta Pruning)</li>
        </ul>
      </li>
    </ul>
  );
  return (
  <Experience  
    role="Master of Computer Science"
    date="Dec 2020"
    details={details}
    image={gatechImage}
  >
  </Experience>);
}
function SuuExperience() {
  return (
    <Experience  
      role="Master of Computer Science"
      date="May 2016"
      details="The following stuff happened and I learned a lot..."
      image={suuImage}
    >
    </Experience>);
}
function AmazonExperience() {
  return (
    <Experience  
      role="Software Development Engineer I"
      date="Aug 2019 - Sept 2020"
      details="The following stuff happened and I learned a lot..."
      image={amazonImage}
    >
    </Experience>);
}
function CgmExperience() {
  return (
    <Experience  
      role="Software Engineer"
      date="March 2016 - July 2019"
      details="The following stuff happened and I learned a lot..."
      image={cgmImage}
    >
    </Experience>);
}