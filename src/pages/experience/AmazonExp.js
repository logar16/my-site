import React from "react";

import { Grid, Typography } from "@material-ui/core";

import {Experience, Section} from "./Experience"

import amazonImage from './amazon.png'


export default function AmazonExperience() {
  return (
    <Experience  
      role="Software Development Engineer I"
      date="Aug 2019 - Sept 2020"
      summary={<AmazonSummary/>}
      details={<AmazonDetails/>}
      image={amazonImage}
    >
    </Experience>);
}


function AmazonSummary() {
  return (
    <Typography component='div'>
      <ul>
        <li>
          Took the lead as the primary designer and implementer of a major API addition to an integral service owning Amazon’s third-party fulfillment data
        </li>
        <li>
        	Hands on experience with OOP principles and distributed computing for two, low-latency and high-transaction services
        </li>
        <li>
          Demonstrated productivity by leading the team in approved designs and code commits for several months
        </li>
        <li>
        	Gained familiarity with macOS and the UNIX terminal, including doing complicated queries over months of log data to retrieve data keys using the basic UNIX commands
        </li>
        <li>
          Safely increased security for a major service by adding OAuth 2.0 based security without any loss of functionality or availability
        </li>
      </ul>
    </Typography>
  );
}

function AmazonDetails() {
  return (
    <Grid>
      <Section>
        What more can I say?  Talk about TPS rates if we have those and how I worked with data and distributed systems.
        Since we were really careful, sell that...
      </Section>
    </Grid>
  );
}