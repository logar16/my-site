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
      </ul>
    </Typography>
  );
}


function CgmDetails() {
  return (
    <Grid>
      <Section>
        I legitimately enjoyed my time at CGM.  I grew from a simple intern who was self-taught to a Software Engineer with experience and informed opinions.
        I learned what design patterns were, studied them, and applied them in my work to improve my efficiency and simplify the way for others.
        I was considered the Tool Creator and the Optimizer.  Under my direction, codebases and databases alike were simplified and made more efficient.
        Workflows for the team were also improved under my direction with helpful input from others.  I learned to lead by listening and working <i>with</i> those I had responsibility over.
        Ultimately, I left because I wanted to have a bigger positive impact on humanity, and I felt that I had maxed out on what I could learn at CGM.  
        It was a good starting place, but I had places to go, and people to help, so I took <a  href='#/experience/amazon?switch=true'>a job with Amazon</a>.
      </Section>
      <Section  title='LTMS'>
        I helped design and develop the original Live Table Management System service and monitoring dashboard.  
        I also created a partner application to simulate the server for development purposes for each developer.
      </Section>
      <Section  title='Mathematical Simulations'>
        I produced simulation programs that verified the math behind the reels as established by the in-house mathematician.
      </Section>
      <Section  title='Creative Tools'>
        Additionally, I volunteered my spare time to create tools that helped the artists to create particle generators faster and with advanced features not originally provided by the simple particle library we were using.
        I also took the time to make the UI better (with input from my users) to reduce friction for the artists.
      </Section>
    </Grid>
  );
}