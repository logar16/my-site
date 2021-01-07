import React from "react";

import { Grid, Typography } from "@material-ui/core";

import {Experience} from "./Experience"

import suuImage from './suu.png'


function SuuSummary() {
  return (
    <ul>
      <li>Majored physical sciences, but also studied Psychology and Computer Science</li>
      <li>Graduated magna cum laude with overall GPA of 3.77</li>
      <li>Graduated from the university's Honors Program with a multidisciplinary thesis</li>
      <li>Completed several Java based CS courses to gain foundational knowledge of
        <ul>
          <li>Object-Oriented Programming</li>
          <li>Data Structures and Algorithms</li>
        </ul>
      </li>
      <li>Excelled in difficult courses ranging from Organic Chemistry to Cell and Molecular Biology</li>
    </ul>
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
      role="Master of Computer Science"
      date="May 2016"
      subtitle={degree}
      summary={<SuuSummary/>}
      image={suuImage}
    >
    </Experience>);
}