import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import { Grid, Typography } from "@material-ui/core";

import {Experience, Section} from "./Experience"

import gatechImage from './gatech.png'


const useStyles = makeStyles((theme) => ({
  lists: {
    ...theme.typography.body1,
  },
  innerList: {
    textIndent: 5,
  }
}));

export default function GatechExperience() {
  let degree = (
    <Grid item>
      <Typography variant='h5'>
        Major: Computer Science
      </Typography>
      <Typography variant='h5'>
        Emphasis: Interactive Intelligence
      </Typography>
    </Grid>
  );
  
  let summary = <GatechSummary/>;
  let details = <GatechDetails/>;

  return (
  <Experience  
    role="Master of Computer Science"
    date="Dec 2020"
    subtitle={degree}
    summary={summary}
    details={details}
    image={gatechImage}
    >
  </Experience>);
}


function GatechSummary() {
  let classes = useStyles();
  return (
    <Typography component='div'>
      <ul className={classes.lists}>
        <li>Degree specialization in Artificial Intelligence and Machine Learning</li>
        <li>Completed challenging assignments by leveraging skills in Python and powerful libraries such as NumPy, SciPy, pandas, and the neural network libraries Keras and PyTorch</li>
        <li>Built AI/ML agents that solved problems using modern AI/ML techniques such as as (bolded were built from scratch, others were using open-source implementations):
          <ul>
            <li><i>Reinforcement Learning</i>: <b>Value/Policy Iteration, Q-Learning, Deep Q-Networks</b>, multi-agent training in zero-sum environments</li>
            <li><i>Supervised Learning</i>: <b>Deep Convolutional Neural Nets</b> (several visual tasks from classification to style transfer), <b>Decision Trees and Random Forests</b>, K-Nearest Neighbors, Support Vector Machines, as well as Bagging and Boosting
              <ul>
                <li><i>Machine Translation</i>: <b>RNNs, LSTMs, Seq2Seq, and Transformer Encoder</b></li>
              </ul>
            </li>
            <li><i>Unsupervised Learning</i>: <b>Simulated Annealing</b>, Genetic Algorithms, MIMIC, PCA, ICA, and Expectation Maximization</li>
            <li><i>Search</i>: <b>A* Search</b>, and <b>Minimax</b> (with Alpha-Beta Pruning)</li>
          </ul>
        </li>
        <li>Collaborated with teams to build a prenatal healthcare application</li>
        <li>Gained experience with Unity's ML-Agents during a team project that explored multi-agent Reinforcement Learning models with memory and attention</li>
      </ul>
    </Typography>
  );
}

// <ul>
//   <li>Deeply involved in every stage of the project—from design to implementation</li>
//   <li>Quickly learned and built the UI using React and Javascript which were technologies previously unknown to me.  The UI contained multiple pages/views, data display dashboards, and interactions with a database, all done within less than 50 hours of work</li>
//   <li>This app also included learning about FHIR and how to work with health data</li>
// </ul>



function GatechDetails() {
  const classes = useStyles();

  return (
    <Grid container>
      <Section>
        This degree was an awesome opportunity to learn new things and stretch myself. 
        I worked full-time while working on this degree part-time, and it was not easy.
        It changed my mind about several things related to technology and inspired me as to what I want out of a career.
        Below are some specific skills I learned, organized by course.
      </Section>
      <Section  title='Deep Learning' id='DL'>
        In this class, I learned about automatic differentiation, the nuances of gradient descent (e.g. vanishing gradients),
        and modern applications of deep neural networks in supervised, unsupervised and reinforcement learning domains.
        I hand-crafted my own forward and backward passes for linear and convolutional layers (and their loss functions).
        Through this, I gained greater appreciation for the difficulties of deep learning as well as became aware of many more interesting applications of the technology.
        This class exposed me to <b>PyTorch</b>, a neural network library that I now greatly enjoy.
        Along with lectures from a quality professor, I received instruction from ML researchers at Facebook applying DL in the real world.
        For <a  href="https://github.gatech.edu/ljones91/cs7643-project" target="_blank" rel='noreferrer'>the final project</a>, 
        I worked with a team to train and analyze multi-agent Reinforcement Learning models trained with limited observations and the addition of memory.
        This was done using the Unity ML-Agents Soccer-Twos environment and the ML-Agents training code (with some modifications).
      </Section>
      <Section  title='Machine Learning'  id='ML'>
        This course included a broad survey of Machine Learning techniques.  I covered traditional classification methods such as decision trees or k-means.
        I also learned about many new and interesting methods such as neural networks, support vector machines, and expectation maximization.
        Assignments included gathering data, training multiple models, and evaluating and comparing their performance in multiple areas.
        I used the <b>SciPy</b> and <b>NumPy</b> libraries extensively.
      </Section>
      <Section title='Reinforcement Learning' id='RL'>
        Perhaps my favorite course at Georgia Tech, I learned about the Bellman Equation, Value and Policy Iteration, Q-Learning, Deep Q-Networks (DQN), and Game Theory (for multi-agent environments).
        The most interesting project was replicating the DQN algorithm initially proposed by DeepMind to solve the OpenAI "Lunar Lander" environment.
        At the time, I did the project with Keras, but later (after the Deep Learning class), I converted it to use <b>PyTorch</b> (see <a href='#/projects'>Projects</a>).
        The project forced me to really dive into RL with neural networks as state approximators, which I have embraced wholeheartedly.
        I also learned how to create an efficient setup for testing and evaluation so that exploration of models and hyperparameters can be done quickly and efficiently.
      </Section>
      <Section  title="Other Courses" id="other">
        Some other courses of interest that I took were:
        <ul className={classes.innerList}>
          <li>Machine Learning for Trading
            <ul>
              <li>Familiarized with the powerful Python library <b>pandas</b> and its use with time series data</li>
              <li>Used traditional supervised as well as RL algorithms for predicting buy/sell position movements using historical data and achieving consistently positive returns</li>
              <li>Combined decision trees to create random forests for better accuracy</li>
            </ul>
          </li>
          <li>Artificial Intelligence
            <ul>
              <li>Learned how to use NumPy and vectorization to efficiently work with large arrays of data</li>
              <li>Built a minimax algorithm that could win in the game of Isolation more than half the time against the assignment's difficult test bot</li>
              <li>Implemented a uni/bi/tri-directional A* algorithm to find shortest distance between two or three points of a graph</li>
              <li>Introduced to concepts like Bayesian inference and bagging and boosting</li>
            </ul>
          </li>
          <li>Knowledge-Based AI
            <ul>
              <li>Built an AI that could perform as well as a child on the Raven's Progressive Matrices intelligence test</li>
              <li>Learned of the many ways to represent knowledge and understanding for intelligent agents, such as semantic networks, frames, and case-based/analogical/meta methods of reasoning</li>
            </ul>
          </li>
          <li>Intro to Health Informatics
            <ul>
              <li>Built a pretty decent React Web app with no prior experience and in less than 50 hours
                <ul>
                  <li>App included multiple pages/views, data display dashboards, and interactions with a database</li>
                </ul>
              </li>
              <li>Learned about FHIR and other healthcare related standards and formats</li>
            </ul>
          </li>
          <li>Software Engineering and Software Architecture
            <ul>
              <li>These two classes improved how I design systems and communicate those designs to other engineers</li>
              <li>Worked with a team as a driving force of the team to accomplish goals in a timely manner and effectively divide work</li>
              <li>Improved in Java coding both for backend software and Android app development</li>
            </ul>
          </li>
        </ul>
      </Section>
    </Grid>
  );
}