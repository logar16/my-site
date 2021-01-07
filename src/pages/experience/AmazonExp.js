import React from "react";

// import { Grid, Typography } from "@material-ui/core";

import {Experience} from "./Experience"

import amazonImage from './amazon.png'


export default function AmazonExperience() {
  return (
    <Experience  
      role="Software Development Engineer I"
      date="Aug 2019 - Sept 2020"
      summary="The following stuff happened and I learned a lot..."
      image={amazonImage}
    >
    </Experience>);
}