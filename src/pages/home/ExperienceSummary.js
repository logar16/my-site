import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Grid, Link, Paper, Typography } from "@material-ui/core";

import gatechImage from '../experience/gatech.png'
import suuImage from '../experience/suu.png'
import amazonImage from '../experience/amazon.png'
import cgmImage from '../experience/cgm.png'


const useStyles = makeStyles({
  logos: {
    maxWidth: '98%',
    maxHeight: '98%',
    backgroundColor: '#eeeeee'
  },
  row: {
    padding: "3% 3% 1%",
  },
  item: {
    backgroundColor: '#333333'
  },
  moreLink: {
    paddingBottom: 5
  },
  button: {
    textTransform: 'none'
  }
});

export function EducationExperience() {
  return (
    <Grid container direction="column" justify="space-around" spacing={2}>
      <ExperienceSummary   experience={gatech}/>
      <ExperienceSummary   experience={suu}/>
    </Grid>
  );
}


export function WorkExperience() {
  return (
    <Grid container direction="column" justify="space-around" spacing={2}>
      <ExperienceSummary  experience={amazon}/>
      <ExperienceSummary  experience={cgm}/>
    </Grid>
  );
}


function ExperienceSummary({experience}) {
  const classes = useStyles();
  return (
    <Grid item>
      <Button className={classes.button} href={experience.link}>
        <Paper className={classes.item}>
          <Grid 
            container 
            justify="center"
            alignItems="center"
            className={classes.row}
          >
            <Grid item  xs={12} md={6}>
              <Paper  className={classes.logos}>
                <img style={{width: '100%', height: '100%'}} src={experience.image} alt=""/>
              </Paper>
            </Grid>
            
            <Grid item xs={1} md={1}></Grid>

            <Grid item xs={12} md={5}>
              <ExperienceText>{experience}</ExperienceText>
            </Grid>
          </Grid>


          <Typography variant='body2' align='center' color='textSecondary' className={classes.moreLink}>
            <i>click for more details</i>
            {/* <Link href={experience.link}>More</Link> */}
          </Typography>
        </Paper>
      </Button>
    </Grid>
  );
}
  
function ExperienceText(props) {
  let experience = props.children;

  return (
    <Container style={{textAlign: 'left'}}>
      <Grid container direction="column"  alignItems='stretch'>
        <Grid item>
          <Typography variant="h4">
            {experience.title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6"  style={{whiteSpace: "pre-line"}}>
            {experience.subtitle}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6"  style={{whiteSpace: "pre-line"}}>
            {experience.details}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}


function Experience(title, subtitle, details, link, image) {
  this.title = title;
  this.subtitle = subtitle;
  this.details = details;
  this.link = `#/experience/${link}?switch=true`;
  this.image = image;
}

const gatech = new Experience(
  "Master of Science",
  "Major: Computer Science\nConcentration: Interactive Intelligence",
  "Graduated Dec 2020\nGPA 3.80",
  "gatech",
  gatechImage
);
const suu = new Experience(
  "Bachelor of Science",
  "Major: Biology\nMinor: Chemistry",
  "Graduated May 2016\nGPA 3.77",
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