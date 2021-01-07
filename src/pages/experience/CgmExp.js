import React from "react";

import { Grid, Typography } from "@material-ui/core";

import {Experience} from "./Experience"

import cgmImage from './cgm.png'

export default function CgmExperience() {
  return (
    <Experience  
      role="Software Engineer"
      date="March 2016 - July 2019"
      summary="The following stuff happened and I learned a lot..."
      image={cgmImage}
    >
    </Experience>);
}