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
        <li>
          Picked up new skills regarding API design and working with a NoSQL database
        </li>
      </ul>
    </Typography>
  );
}

function AmazonDetails() {
  return (
    <Grid>
      <Section>
        At Amazon, I was part of a small team working in the backend of the eCommerce side of the business.
        Our services tracked inventory availability and fulfillment capabilities for Third-party sellers, a significant portion of Amazon's income.
        I worked with experienced engineers to safely make changes (some small, some significant) to the services without loss of availability or increased latencies.
        After a year of working there, I came to realize that working in the backend maintaining an established service was not for me.  
        I was going into my last semester of my <a href='#/experience/gatech?switch=true'>Master's in CS and Machine Learning</a>, and so I left Amazon to focus on finishing my degree and finding the right company for me.
      </Section>
      <Section  title='Increasing Service Responsibilities'>
        One of our services was chosen to consolidate an older, Tier 1 (critical), service's responsibilities.  
        I was tasked with designing how our service would handle the deprecated service's traffic among other migration concerns.
        I designed a new API for our service as well as a method for moving traffic to our service while slowly phasing out the old one without any lost requests.
        This opportunity improved my understanding of RESTful service design greatly.  
        I also gained useful experience with a NoSQL datastore as well.
        <p>
          I implemented the new designs without assistance from team members as they did not know how the REST library/integration worked for that particular service, nor much about how the Guice dependency injection worked.  
          Not only did I implement the new API (without issue in production), but I also wrote up some useful documentation for all who followed.  
          This highlights something else about me, I love helping others succeed.  
          Even though I knew I was going to leave the team soon, I cared about those who would follow me and so I made the documentation as helpful and thorough as possible.
        </p>
      </Section>
      <Section  title='Service Ownership'>
        <p>
          The services my team and I owned had several APIs with some consistently handling 1000+ TPS.
          I learned how to work in such a way that availability was <i>never</i> disrupted.
          Due to the distributed nature of our services—80 servers to support traffic to just one of the services—I learned to design using thread-safe practices like avoiding mutable state as much as possible.
        </p>
        <p>
          Our goal was mostly to keep the vital services running, but we also had tasks to improve the services and keep them up-to-date.
          For example, one of my changes helped reduce CPU usage by approximately 50%, allowing us to downscale the fleet and conserve costs.
        </p>
        <p>
          All of our changes were run through a rigorous alpha and beta integration testing suite as well as a barrage of local tests. 
          I learned to develop with a TDD focus and appreciate the savings of continuous integration/delivery.
          I also became acquainted with the usefulness of recording metrics.  Almost every change I did included a new metric to help us determine the effectiveness of the change.
          Improving dashboards (again I like to help others understand my services as well as I do) became an important part of almost every update I pushed out. 
        </p>
      </Section>
    </Grid>
  );
}