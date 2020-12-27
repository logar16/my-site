import React, { useState } from "react";
import { AppBar, Tabs, Tab, Paper } from "@material-ui/core";
import { useParams } from "react-router-dom";

const locations = [
  'gatech',
  'suu',
  'amazon',
  'cgm',
]


export default function ExperienceSwitcher(props) {
  let {id} = useParams();
  var index = locations.indexOf(id)
  index = Math.max(0, index)
  // console.log(`id: ${id}, index: ${index}`)
  // var history = useHistory()
  const [value, setValue] = useState(index)
  const handleChange = (event, newValue) => {
    setValue(newValue);
    // history.push("/experience") //Clean up the URL, but it dilutes the history
  }

  const style = { fontSize: 20 };

  return (
      <Paper>
        <AppBar id="switcher" position="sticky" color="transparent">
          <Tabs 
            centered
            value={value} 
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            style={{backgroundColor: 'primary'}}
          >
            <Tab  label='GA Tech' style={style} />
            <Tab  label='SUU'     style={style} />
            <Tab  label='Amazon'  style={style} />
            <Tab  label='CGM'     style={style} />
          </Tabs>
        </AppBar>
        <DynamicDisplay value={locations[value]}>{props.children}</DynamicDisplay>
      </Paper>
  );
}

function DynamicDisplay(props) {
  var value = props.value;
  var children = React.Children.toArray(props.children);
  var display = children.find(c => c.props.id === value);
  // console.log(value, display);
  return (
    <div>
      {display}
    </div>
  );
}