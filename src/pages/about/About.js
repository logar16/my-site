import React from "react";
import Typography from '@material-ui/core/Typography';
import { Divider, Grid, Link, makeStyles, Paper } from "@material-ui/core";

import Contact from "../../common/Contact";
import StartImage from "../../common/StartImage";

import profileImage from '../home/profile.jpg';
import familyImage from './Family.jpg';
import hobbyImage from './Hobbies.png';
import interestsImage from './Nebula.jpg';
import pathImage from './Pathway.jpg';

import './About.css';


const useStyles = makeStyles({
  root: {
    textAlign: "center"
  },
  divider: {
    margin: 30,
  },
  list: {
    width: '95%',
    margin: 'auto',
  },
  paper: {
    width: '98%',
    margin: 'auto',
    minHeight: 100,
    backgroundColor: '#2a2a2a'
  },
  image: {
    width: '100%',
    padding: 8
  },
  description: {
    padding: 10,
    height: '100%',
    textAlign: 'left'
  },
});


export default function About() {
  const classes = useStyles();

  window.scrollTo({top: 0});

  const clickHandler = () => {
    let element = document.getElementById('start');
    window.scroll(0, element.offsetTop - 50);
  }

  return (
    <div  className={classes.root}>
      <div>
        <StartImage 
          onClick={clickHandler} 
          bgImage={profileImage}  
          strength={400}
          height={500}
          left={<Intro/>}
        />
      </div>

      <Divider variant='middle' className={classes.divider} />

      <div  id='start'>
        <Typography variant='h5'>
          Interested in learning more about me as a human being?
        </Typography>
      </div>
      
      <Divider variant='middle' className={classes.divider} />

      <AboutList>
        <Entry  title='My Family'    image={familyImage}>
          <FamilyDescription/>
        </Entry>
        <Entry  title='My Hobbies'   image={hobbyImage}>
          <HobbiesDescription/>
        </Entry>
        <Entry  title='My Interests' image={interestsImage}>
          <InterestsDescription/>
        </Entry>
        <Entry  title='My Story'  image={pathImage}>
          <StoryDescription/>
        </Entry>
      </AboutList>

      <div>
        <Divider variant='middle' className={classes.divider} />
        <Contact></Contact>
      </div>
    </div>
  );
}

function Intro() {
  return (
    <Grid container justify='center' alignItems='flex-end' style={{height: '100%'}}>
      <Typography className='rotated' variant='h4'>
        Me again!  But this time, it's personal!
      </Typography>
    </Grid>
  );
}


function AboutList({children}) {
  const classes = useStyles();

  if (!Array.isArray(children))
    children = [children];

  return (
    <Grid 
      container 
      direction='column' 
      justify='space-around'
      alignItems='center'
      className={classes.list}
      spacing={3}
    >
      {
        children.map((item, i) => {
          return (
            <Grid item  key={i} style={{width: '100%'}}>
              {item}
            </Grid>
          );
        })
      }
    </Grid>
  );
}

export function Entry({title, image, children}) {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid 
        container 
        className={classes.list}
        direction='column'
      >
        <Title  text={title}/>
        <Body image={image}>
          {children}
        </Body>
      </Grid>
    </Paper>
  );
}


function Title({text}) {
  const classes = useStyles();

  return (
    <Grid id='title' item  className={classes.description}>
      <Typography variant='h2'>
        {text}
      </Typography>
      <Divider/>
    </Grid>
  );
}

function Body({image, children}) {
  const classes = useStyles();

  return (
    <Grid container justify='space-around'>
      <Grid item  xs={4}>
        <img className={classes.image} src={image} alt=''/>
      </Grid>
      <Grid item  xs={8}>
        <Grid 
          container  
          className={classes.description}
          direction='column'
          justify='center'
        >
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
}

function StoryDescription() {
  return (
    <Typography>
      My path to where I am now was a bit circuitous.  
      I studied Biology and Chemistry for my undergrad, and I enjoyed learning about the sciences, but I had absolutely no idea what job I wanted in the field, since I detested the lab work for my classes—the day to day a scientist would expect to do.
      I had not considered a degree in CS because I had the incorrect assumption that only people who hated sunlight and friends and grew up on the command line would enjoy studying CS.
      I liked computers, but I didn't understand them at the lowest level, and I wasn't certain if I could.
      <br></br>
      <br></br>
      One summer, between semesters, I decided to look up a free online CS course (hosted by MIT) on an inspired whim.
      It introduced me to Python and the amazing world of computer programming.  I immediately fell in love! 
      My first program was a Magic 8-ball that would randomly pick responses to entered text.  My next project was a text-based game similar to rock paper scissors.  My applications only increased in size and complexity from there.
      I was captivated by the power of programming.  I could use logic to force the computer to do what I want.  And once I could express how to do it once, I just needed to put it in a loop and I could do it 10, 100, or 1,000,000 times with the modification of a single variable.
      New worlds opened up to me!
      <br></br>
      <br></br>
      However, I was almost done with my Biology degree, and switching to CS would put me back several years.  I shelved programming to finish my studies.
      But I decided to take an elective CS class, and the draw of programming pulled me in again.  
      I excelled, completing projects far outstripping my classmates who only were in the class because they enjoyed playing video games etc..
      I was passionate, I loved programming and the power it gave me to create things and effect change effortlessly.
      I built some games on my own, one copying the board game Dominion and one copying the old arcade game Asteroids.  
      Talking to a friend about these and my love of programming helped me connect with the right people and land an internship and my first engineering job at <Link href='/#/experience/cgm?switch=true'>Casino Game Maker</Link>.
      <br></br>
      <br></br>
      From there I gained the skills and confidence to apply to the <Link href='/#/experience/gatech?switch=true'>Georgia Tech OMSCS Master's program</Link>.  I wanted the degree to show others that I know what I'm doing, and to make sure that I did actually know for myself.
      I often struggle with imposter syndrome since I didn't get a CS undergrad and I haven't built a compiler etc. etc..  
      However, I am a quick learner and I love solving problems, two skills that I think are at the heart of being successful in any CS-related endeavor.
      <br></br>
      <br></br>
      I want to keep learning, and I want to make a difference in the world.  It is so easy to make money in this field, especially if you don't care to help raise the human race.
      I don't need more money, I just want to make a positive difference.  I think I can, and I know I will.  I just need to connect with the right people.  Hopefully the faithful reader will be able to help me in this regard.
    </Typography>
  );
}

function FamilyDescription() {
  return (
    <Typography>
      I am happily married to a wonderful wife, and we have two young children.  We just got a bigger car, so that's a soft commit on having a third child! 😉
      <br></br>
      <br></br>
      My wife is a real estate agent; perhaps the most organized person I know; and one of the sweetest and kindest people on the earth.  Where I am loud and boisterous, she is quite, calm, and thoughtful.
      <br></br>
      <br></br>
      My son is a prodigy! He could identify all the numbers and letters by 18 months and now likes to memorize books (see <i>Giraffes Can't Dance</i> or <i>Room on the Broom</i> as examples of the types of books he likes).
      <br></br>
      <br></br>
      My daughter is a newborn, so we will see what she becomes.  So far she loves smiling, so that's a good start!
    </Typography>
  );
}

function HobbiesDescription() {
  return (
    <Typography>
      When I get a spare moment, you'll find me doing one of the following:
      <ul>
        <li>Coding Personal Projects (check out the <Link href='/#/projects'>Projects</Link> page for details)</li>
        <li>Reading and Writing Fiction
          <ul>
            <li>Favorite Books and Series
              <ul>
                <li>Mistborn: The Final Empire</li>
                <li>Stormlight Archive</li>
                <li>Abhorsen Trilogy</li>
                <li>Bartimaeus Sequence</li>
                <li>Dandelion Wine</li>
                <li>The Children of Húrin</li>
              </ul>
            </li>
            <li>I also like to write!  I've got a trove of ideas for Fantasy and Sci-Fi books that I do world-building and scenes for, but few that I've really put together into a complete project.
            One of my personal projects is to create a website that distributes my books for me, but gives a more interactive experience than the typical e-reader would provide.
            </li>
          </ul>
        </li>
        <li>Sports
          <ul>
            <li>Racquetball</li>
            <li>Pickleball</li>
            <li>Spikeball</li>
            <li>Soccer</li>
          </ul>
          Note that I like sports but I hate "working out".  I can run for miles chasing a ball, but only a few city blocks if I'm <i>just</i> running.
        </li>
        <li>Board Games
          <ul>
            <li>Dominion (I've got five expansions for it)</li>
            <li>Splendor</li>
            <li>Citadels</li>
            <li>Villanous</li>
            <li>And many many more!</li>
          </ul>
          My wife and I like to invite people over to play board games as a way to make new friends.  I'm open to doing so remotely if you're interested!
        </li>
        <li>Video Games
          <ul>
            <li>Age of Empires and Age of Mythology (RTS)</li>
            <li>Roller Coaster Tycoon (Simulation)</li>
            <li>Halo and Original Star Wars Battlefront (FPS)</li>
            <li>Geometry Wars (Multi-directional shooter)</li>
            <li>Portals (Puzzle)</li>
          </ul>
          I don't really get to play video games anymore due to my other obligations, but I long for an excuse to play again.
          Perhaps playing games is why I'm so interested in Reinforcement Learning...
        </li>
      </ul>
    </Typography>
  );
}

function InterestsDescription() {
  return (
    <Typography component='div'>
      I always like to say, "If I had several more lives, I would dedicate them to studying the following topics:"
      <ul>
        <li>Astronomy, Cosmology, and Physics</li>
        <li>Religion
          <ul>
            <li>I'm a faithful member of <Link  href='https://www.comeuntochrist.org'>The Church of Jesus Christ of Latter-day Saints</Link> and I enjoy studying the Restored Gospel almost daily</li>
          </ul>
        </li>
        <li>Psychology and Neurology
          <ul>
            <li>Another reason I enjoy AI so much, as it is informed by and sheds additional light on human psychology</li>
          </ul>
        </li>
        <li>Music
          <ul>
            <li>I enjoy music theory and the mathematical logic behind what sounds good.</li>
            <li>I play guitar, trumpet, and a little piano, but it's been awhile 😬</li>
          </ul>
        </li>
        <li>Mechanical and Electrical Engineering</li>
        <li>Drawing and 3D Modeling
          <ul>
            <li>I want to make an AI application that will help me make 3D models like I imagine them, because that will probably be faster than learning how to do it by hand...</li>
          </ul>
        </li>
      </ul>
      I am interested and excited about these topics and would love any excuse to combine them with Machine Learning or coding in general so I can satisfy two loves at one time!
    </Typography>
  );
}