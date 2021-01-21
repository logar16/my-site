import React from "react";

import { Fab, Grid, Typography } from "@material-ui/core";
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';

export default function ScrollUp({top}) {

  const clickHandler = () => {
    var y = 0;
    if (top) {
      const element = document.getElementById(top);
      if (element) {
        y = element.offsetTop - 50;
      }
    }
    window.scrollTo({top: y});
  }

  return (
    <Grid 
      container 
      direction='column'
      justify='flex-end'  
      alignItems='flex-end'
      spacing={1}  
      style={{padding: '0px 30px'}}
    >
      <Grid item  style={{paddingRight: 35}}>
        <Fab  
          onClick={clickHandler}  
          component='div'
          // color='primary'
        >
          <KeyboardArrowUp></KeyboardArrowUp>
        </Fab>
      </Grid>
      <Grid item>
        <Typography>
          <i>(return to top)</i>
        </Typography>
      </Grid>
    </Grid>
  );
}