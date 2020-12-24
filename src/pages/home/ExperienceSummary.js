import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Link, Typography } from "@material-ui/core";

import gatechImage from '../experience/gatech.png'
import suuImage from '../experience/suu.png'
import amazonImage from '../experience/amazon.png'
import cgmImage from '../experience/cgm.png'


const useStyles = makeStyles({
  logos: {
    maxWidth: 400,
    maxHeight: 200
  },
  row: {
    padding: "5% 10% 5%",
  }
});

export function EducationExperience() {
  return (
    <Grid container direction="column" justify="space-evenly">
      <ExperienceSummary   experience={gatech}/>
      <ExperienceSummary   experience={suu}/>
    </Grid>
  );
}


export function WorkExperience() {
  return (
    <Grid container direction="column" justify="space-evenly">
      <ExperienceSummary  experience={amazon}/>
      <ExperienceSummary  experience={cgm}/>
    </Grid>
  );
}


function ExperienceSummary({experience}) {
  const classes = useStyles();
  return (
    <Grid item>
        <Grid 
          container 
          justify="center"
          alignItems="center"
          className={classes.row}
        >
          <Grid item  xs={6}>
            <img  className={classes.logos} src={experience.image} alt=""/>
          </Grid>
          <Grid item  xs={6}>
            <ExperienceText>{experience}</ExperienceText>
          </Grid>
        </Grid>
    </Grid>
  );
}
  
function ExperienceText(props) {
  let experience = props.children;

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h4">
          {experience.title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6" style={{whiteSpace: "pre-line"}}>
          {experience.subtitle}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6">
          {experience.details}
        </Typography>
      </Grid>
      <Grid item>
        <Link href={experience.link}>More</Link>
      </Grid>
    </Grid>
  );
}


function Experience(title, subtitle, details, link, image) {
  this.title = title;
  this.subtitle = subtitle;
  this.details = details;
  this.link = `/my-site/experience?xp=${link}#switcher`;
  this.image = image;
}

const gatech = new Experience(
  "Master of Science",
  "Major: Computer Science\nConcentration: Interactive Intelligence",
  "Graduated Dec 2020 with GPA 3.80",
  "gatech",
  gatechImage
);
const suu = new Experience(
  "Bachelor of Science",
  "Major: Biology\nMinor: Chemistry",
  "Graduated May 2016 with GPA 3.77",
  "suu",
  suuImage
);

const amazon = new Experience(
  "Amazon",
  "Software Development Engineer I",
  "Aug 2019 - Sep 2020",
  "amazon",
  amazonImage
);

const cgm = new Experience(
  "Casino Game Maker",
  "Software Engineer",
  "April 2016 - July 2019",
  "cgm",
  cgmImage
);