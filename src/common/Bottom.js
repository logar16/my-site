import React from "react";
import { Container, Divider } from "@material-ui/core";
import ScrollUp from "./ScrollUp";
import Contact from "./Contact";

export default function Bottom({top}) {
  return (
    <Container>
      <br></br>
      <br></br>
      <ScrollUp top={top}/>
      <Divider  style={{margin: 30}}/>
      <Contact/>
    </Container>
  );
}