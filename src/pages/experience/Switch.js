import React, { useState } from "react";
import { AppBar, Tabs, Tab, Link, Grid, Typography } from "@material-ui/core";
import { useLocation } from "react-router-dom";

const locations = [
  '#gatech',
  '#suu',
  '#amazon',
  '#cgm',
]


export default function ExperienceSwitcher() {
  let path = useLocation().pathname
  console.log("path:", path)
  var index = locations.indexOf(path)
  index = index >= 0 ? index : 0
  const [value, setValue] = useState(index)
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  }

  return (
      <div>
        <AppBar position="sticky">
          <Tabs value={value} onChange={handleChange}>
            <Tab  label='GA Tech' id="gatech"  />
            <Tab  label='SUU'     id="suu"     />
            <Tab  label='Amazon'  id="amazon"  />
            <Tab  label='CGM'     id="cgm"     />
          </Tabs>
        </AppBar>
      </div>
  );
}