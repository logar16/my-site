import React from "react";
import { Grid, Fab, makeStyles } from "@material-ui/core";
import { Parallax } from "react-parallax";
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles(() => ({
  tallFill: {
    height: "100%",
  },
}));


export default function StartImage(props) {
  const classes = useStyles();
  var clickHandler = props.onClick;
  var bgImage = props.bgImage
  var strength = props.strength || 500;
  var height = props.height || window.innerHeight - 100;
  height = Math.max(height, 100);

  return (
    <Parallax bgImage={bgImage} strength={strength}>
      <div style={{ 'height': height }}>
        <Grid
          container
          className={classes.tallFill}
          direction='row'
        >
          <Grid item xs={3}>
            {props.left}
          </Grid>

          <Grid item xs={6}>
            {props.center}
          </Grid>
          
          <Grid container alignItems='flex-end'  justify='flex-end'>
            <Fab  onClick={clickHandler}  style={{ margin: 30 }}  component='div'>
              <KeyboardArrowDown></KeyboardArrowDown>
            </Fab>
          </Grid>

        </Grid>
      </div>
    </Parallax>);
  }