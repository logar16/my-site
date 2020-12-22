import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from "@material-ui/core";
import { Parallax, Background } from "react-parallax";

import portrait from './profile.jpg';

const useStyles = makeStyles({
  root: {
    height: "100%"
  },
  cardHolder: {
    width: "100%",
    height: "100%"
  },
  card: {
    width: "100%",
    height: "100%",
    minHeight: 500
  },
  media: {
    // backgroundSize: "cover",
    minHeight: 100,
    width: "100%"
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <Grid 
      className={classes.root}
      container 
      direction='column' 
      alignItems='center'>
      <Grid item  xs={12} className={classes.cardHolder}>
        <img 
          className={classes.media}
          src={portrait} 
          alt="This is me. Thank you for viewing." 
        />
      </Grid>
      <Grid>
        <Title/>
      </Grid>
      <Grid>
        <Typography>
          Here is a quick rundown of my exploits...
        </Typography>
      </Grid>
    </Grid>
  );
}

function Title() {
  return <Typography  variant='h2'  align='center'>HOME</Typography>;
}