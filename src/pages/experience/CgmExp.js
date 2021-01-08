import React from "react";

import { Grid, Typography } from "@material-ui/core";

import {Experience, Section} from "./Experience"

import cgmImage from './cgm.png'

export default function CgmExperience() {
  return (
    <Experience  
      role="Software Engineer"
      date="March 2016 - July 2019"
      summary={<CgmSummary/>}
      details={<CgmDetails/>}
      image={cgmImage}
    >
    </Experience>);
}

function CgmSummary() {
  return (
    <Typography component='div'>
      <ul>
        <li>
        	Designed and developed applications and video games under strict legal requirements for security, durability, persistence, and longevity, often as the primary developer
        </li>
        <li>
        	Demonstrated ability to learn and apply new skills by redesigning an inefficient database (PostgreSQL) to be over 100x faster on all major queries (after only a few days of study regarding databases)
        </li>
        <li>
        	Redesigned data structures and overall architecture on the company’s core server application to improve efficiency and make the system more robust and modular
        </li>
        <li>Engaged in a leadership and training role for many of the incoming employees.</li>
        <li>
        	Daily use and love of the C# programming language and Microsoft Windows OS
        </li>
        <li>Learned how to use git, network applications together, work using agile methodologies, use design patterns, develop using TDD, and many other skills</li>
      </ul>
    </Typography>
  );
}


function CgmDetails() {
  return (
    <Grid>
      <Section>
        {/* <p> */}
          I legitimately enjoyed my time at CGM.  I grew from a simple intern who was a self-taught programmer, to a Software Engineer with experience and informed opinions.
          I learned what design patterns were, studied them, and applied them in my work to improve my efficiency and simplify the way for others.
          I was considered the Tool Creator and the Optimizer.  Under my direction, codebases and databases alike were simplified and made more efficient.
          Workflows for the team were also improved under my direction with helpful input from others.  I learned to lead by listening and working <i>with</i> those I had responsibility over.
        {/* </p> */}
        <p>
          Ultimately, I left because I wanted to have a bigger positive impact on humanity, and I felt that I had maxed-out on what I could learn at CGM.  
          It was a good starting place, but I had places to go, and people to help, so I took <a  href='#/experience/amazon?switch=true'>a job with Amazon</a>.
        </p>
      </Section>
      <Section  title='LTMS and ETG'>
          I was a major contributor to the design and development of the original Live Table Management System (LTMS) and Electronic Table Games (ETG) servers (see <a href='https://casinogamemaker.com/etg/' target='_blank' rel='noreferrer'>casinogamemaker.com/etg</a>).
          For part of the project, I led a team of two other engineers which produced all functionality of the system except for that of game displays.
          Along with a significant portion of the server, I designed and developed the dealer terminals which took dealer input and scanned cards etc. and sent the data to the server for distribution to player terminals.
        <p>
          I gained significant experience from designing and building the data monitoring dashboard and the database which it ran queries against.
          In particular, I took our old database and redesigned it (after a week of studying databases part-time) such that a query that was running in 30 seconds could execute in 0.3 seconds (100x speedup).  
          I am a quick learner, and I love to make things better than I found them.
          The dashboard also supported features like changing settings and administered permissions for dealers and pit bosses.
        </p>
        <p>
          This was my first experience connecting multiple, disparate applications and syncing them together with a powerful result.  
          It was also my first time doing any significant networking and dealing with strict TCP communication.
          Due to the strict demands for near-perfect persistence of state and data, the team that I led on this project came up with some new and clever solutions to handle disruptions on the network, power loss, and other edge cases in a seamless manner.
          Finally, I created a partner application to simulate the server for development purposes for each developer.
        </p>
      </Section>
      <Section  title='Mathematical Simulations'>
        I produced simulation programs that verified the math behind the slot reels as established by the in-house mathematician.  
        I also built simulators for Keno and Baccarat games.  With some multi-core processing I was able to simulate 9 billion unique game states in less than 24 hours on a simple i5 processor.
      </Section>
      <Section  title='Creative Tools'>
        Additionally, I volunteered my spare time to create tools that helped the artists to create particle generators faster and with advanced features not originally provided by the simple particle library we were using.
        I also took the time to make the UI better (with input from my users) to reduce friction for the artists.
      </Section>
      <Section  title='Games'>
        I personally led the design and development of three of our popular games in their entirety.  I built multiple proof-of-concept games for sales demos as well as internal review.  
        And, I was charged with taking several incomplete or outdated games and bringing them to life.  
        All in all, I learned a great deal about how to prioritize work to meet deadlines in a fast-paced, startup environment; how to (and not to) design software architecture; and how to work with project owners to agree on desired outcomes and then deliver those in a timely manner.
      </Section>
    </Grid>
  );
}