import React from "react";
import { Grid, Fab } from "@material-ui/core";
import { Parallax } from "react-parallax";
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';

export default function StartImage(props) {
    var bgImage = props.bgImage
    var strength = props.strength || 500;
    var height = props.height || 600;
    return <Parallax bgImage={bgImage} strength={strength}>
      <div style={{ 'height': height }}>
        <Grid
          style={{ 'height': "100%" }}
          container
          direction='row-reverse'
          justify='flex-start'
          alignItems='flex-end'
        >
          <Grid item style={{ margin: 30 }}>
            <Fab href="#start">
              <KeyboardArrowDown></KeyboardArrowDown>
            </Fab>
          </Grid>
        </Grid>
      </div>
    </Parallax>;
  }