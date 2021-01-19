import React from "react";

import { Grid, Typography, Link } from "@material-ui/core";

import {Experience, Section} from "./Experience"

import suuImage from './suu.png'


function SuuSummary() {
  return (
    <Typography component='div'>
      <ul>
        <li>Majored in physical sciences, but also studied Psychology and Computer Science</li>
        <li>Graduated magna cum laude with overall GPA of 3.77</li>
        <li>Graduated from the university's Honors Program with a multidisciplinary thesis</li>
        <li>Completed several Java based CS courses to gain foundational knowledge of
          <ul>
            <li>Object-Oriented Programming</li>
            <li>Data Structures and Algorithms</li>
          </ul>
        </li>
        <li>Excelled in difficult courses ranging from <i>Organic Chemistry</i> to <i>Cell and Molecular Biology</i></li>
      </ul>
    </Typography>
  );
}

function SuuDetails() {
  return (
    <Grid container>
      <Section  title='Computer Science'>
        Although this was not a direct part of my undergraduate degree, I took several CS classes at SUU.  
        I did this to supplement my personal study of the subject via side-projects.
        In these classes I learned about the basics of OOP and O-notation etc., and I was introduced to a way of thinking about problems that is fundamental to solving them effectively with computer programming.
      </Section>
      <Section  title='Biology and Chemistry'>
        I chose to study Biology because of my interest in learning about my own body and the functions of other incredible biological systems.
        I was most interested in studying the brain and learning about how it worked, from a physiological as well as a psychological perspective.
        Starting with the basic laws of Chemistry and taking classes like Molecular Biology, I learned fundamentals.  
        These combined and connected to help me understand details and building blocks that allowed for the bigger picture of organisms and ecology.
        I am glad I got my undergraduate degree in Biology and Chemistry, as it gives me a greater breadth of knowledge and appreciation for sciences and people than I think a singular study of Computer Science would.
      </Section>
      <Section  title='Psychology'>
        I have a fascination with human psychology and learning how humans learn and think.
        The most enlightening Psychology course I took while at SUU was definitely Reinforcement Learning.
        The class expanded my understanding and gave me clear insights into behavior and gave me direction for my later studies in Machine Learning.
      </Section>
      <Section  title='Honors Thesis'>
        For my Honors Thesis, I combined my knowledge of Biology and Psychology along with my budding passion for Computer Science with my desire to write fiction.
        The interdisciplinary project resulted in a Science Fiction novella that included several real technologies (scaled up) 
          from brain-computer interfaces to robotic analogs to <Link href='https://newscenter.lbl.gov/2013/12/19/a-micro-muscular-break-through/#:~:text=A%20team%20of%20researchers%20with%20the%20U.S.%20Department,%E2%80%93%20faster%20than%20the%20blink%20of%20an%20eye.' target='_blank' rel='noreferrer'>muscles using vanadium dioxide</Link>. 
        It was an adventure pulling together several of my passions while also completing a difficult final semester.  
      </Section>
    </Grid>
  );
}

export default function SuuExperience() {
  let degree = (
    <Grid item>
      <Typography variant='h5'>
        Major: Biology
      </Typography>
      <Typography variant='h5'>
        Minor: Chemistry
      </Typography>
    </Grid>
  );

  return (
    <Experience  
      role="Bachelor of Science"
      date="May 2016"
      subtitle={degree}
      details={<SuuDetails/>}
      summary={<SuuSummary/>}
      image={suuImage}
    >
    </Experience>);
}