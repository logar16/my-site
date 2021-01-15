import React, { useState } from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import { useParams, useHistory, useLocation } from "react-router-dom";

const locations = [
  'gatech',
  'suu',
  'amazon',
  'cgm',
]


export default function ExperienceSwitcher(props) {
  const history = useHistory();
  let {id} = useParams();
  var index = locations.indexOf(id)
  index = Math.max(0, index)
  const [value, setValue] = useState(index)
  
  let query = new URLSearchParams(useLocation().search);
  query = query.get('switch');
  // console.log(`id: ${id}, index: ${index}, value: ${value}, query: ${query}`)

  const handleChange = (event, newValue) => {
    // console.log('new value:', newValue);
    cleanUrl(locations[newValue]);
    setValue(newValue);
    props.onChange();
  }

  if (query) {
    setTimeout(() => { handleChange(null, index) }, 100);
  }
  // else if (index !== value) {
  //   setValue(index);
  //   props.onChange();
  // }
  const style = { fontSize: 20 };

  return (
      <div>
        <AppBar id="switcher" position="static" color="transparent">
          <Tabs 
            centered
            value={value} 
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab  label='Georgia Tech' style={style}  component='div' />
            <Tab  label='SUU'     style={style} component='div'/>
            <Tab  label='Amazon'  style={style} component='div'/>
            <Tab  label='CGM'     style={style} component='div'/>
          </Tabs>
        </AppBar>
        <DynamicDisplay value={locations[value]}>{props.children}</DynamicDisplay>
      </div>
  );

  function cleanUrl(id) {
    if (!id) 
      return;

    history.replace(`/experience/${id}`);  //Clean up the URL, but it dilutes the history
  }
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