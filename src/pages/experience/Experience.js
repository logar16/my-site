import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Divider, Fab } from "@material-ui/core";
import { Parallax } from "react-parallax";
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';

import codingImage from './coding.png';

const useStyles = makeStyles({
  root: {
    textAlign: "center"
  },
  divider: {
    margin: 30,
  },
  longText: {
    maxWidth: 800,
  },
});

export default function Experience() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Parallax bgImage={codingImage}  strength={500}>
          <div style={{ height: 600 }}>
            <Grid 
              style={{ height: "100%" }}
              container 
              direction='row-reverse' 
              justify='flex-start' 
              alignItems='flex-end'
            >
              <Grid item  style={{ margin: 30 }}>
                <Fab  href="#start">
                  <KeyboardArrowDown></KeyboardArrowDown>
                </Fab>
              </Grid>
            </Grid>
          </div>
        </Parallax>
      </div>
      <div  id="start"></div>
      <div>

      </div>
      <div style={{ height: 600 }}></div>
      <div style={{ height: 600 }}></div>
    </div>
  );
}