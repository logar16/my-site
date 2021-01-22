import React from "react";
import { Grid, Fab, makeStyles, Typography } from "@material-ui/core";
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import { Parallax } from "react-parallax";
import {useSpring, animated} from 'react-spring'

const useStyles = makeStyles(() => ({
  tallFill: {
    height: "100%",
  },
  scrollFab: {
    margin: 30,
  },
}));


export default function StartImage(props) {
  const classes = useStyles();
  var clickHandler = props.onClick;
  var bgImage = props.bgImage
  var strength = props.strength || 500;
  var height = props.height || window.innerHeight - 100;
  height = Math.max(height, 100);
  // console.log(`props.height: ${props.height}, window: ${window.innerHeight}, height: ${height}`)

  return (
    <Parallax bgImage={bgImage} strength={strength}>
      <div style={{ 'height': height }}>
        <Grid
          container
          className={classes.tallFill}
          direction='row'
          alignItems='stretch'
        >
          <Grid item sm={2} md={4}>
            {props.left}
          </Grid>

          <Grid item sm={8} md={6}>
            {props.center}
          </Grid>
          
          <Grid item sm={2} md={2}>
            <ScrollDown onClick={clickHandler}/>
          </Grid>

        </Grid>
      </div>
    </Parallax>);
  }

function ScrollDown({onClick}) {
  const classes = useStyles();

  const fabTrans = useSpring({
    padding: 15,
    from: {padding: 10},
    config: {mass: 20, friction: 0, tension: 400}
  });
  const textTrans = useSpring({
    opacity: 1,
    from: {opacity: 0, padding: 5},
    config: { mass: 350, friction: 0, tension: 250},
    // delay: 500,
  })

  const AnimatedTypography = animated(Typography);

  return (
    <Grid container direction='column' alignItems='center'  justify='flex-end'  className={classes.tallFill}>
      <animated.div style={fabTrans}>
        <Fab  
          onClick={onClick}  
          component='div'
        >
          <KeyboardArrowDown></KeyboardArrowDown>
        </Fab>
      </animated.div>
      <AnimatedTypography style={textTrans}>
        <i>(scroll down)</i>
      </AnimatedTypography>
    </Grid>
  );
}