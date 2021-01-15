import React, {useState} from "react";
import {
  Switch,
  Route,
  NavLink,
  useLocation,
} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Home from './pages/home/Home';
import Experience from './pages/experience/Experience';
import Projects from './pages/projects/Projects';
import About from './pages/about/About';

export default function App() {
  
  return (
    <div>
      <NavBar/>

      <Switch id='route-switch'>
        <Route path={["/experience/:id", "/experience"]}>
          <Experience />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}


const locations = [
  '/',
  'experience',
  'projects',
  'about',
]

function NavBar() {
  let path = useLocation().pathname.split('/')[1];
  let index = Math.max(0, locations.indexOf(path));
  const [value, setValue] = useState(index);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    window.scrollTo({top: 0});
  }
  // console.log(`path: ${path}, index: ${index}, value: ${value}`);

  if (index !== value) {
    setValue(index)
  }

  return (
    <AppBar position="sticky">
      <Tabs value={value} onChange={handleChange}>
        <LinkTab  label='Home' link={''} />
        <LinkTab  label='Experience'  link={'/experience'} />
        <LinkTab  label='Projects'    link={'/projects'} />
        <LinkTab  label='About'       link={'/about'} />
      </Tabs>
    </AppBar>
  )
}

function LinkTab({label, link}) {
  const tabStyle = { fontSize: 24 };
  const linkStyle = {
    color: "white"
  };

  return (
    <Tab  
      label={label}
      to={link} 
      style={tabStyle} 
      component={NavLink} 
      activeStyle={linkStyle}  
      isActive={() => true}
    />
  );
}