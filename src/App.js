import React, {useState} from "react";
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Home from './pages/home/Home';
import Resume from './pages/resume/Resume';
import Projects from './pages/projects/Projects';
import About from './pages/about/About';

export default function App() {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route path="/resume">
          <Resume />
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
  '/resume',
  '/projects',
  '/about',
]

function NavBar() {
  let path = useLocation().pathname

  const [value, setValue] = useState(locations.indexOf(path))
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <AppBar position="sticky">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab  label='Home'      href="/"></Tab>
          <Tab  label='Resume'    href="/resume"></Tab>
          <Tab  label='Projects'  href="/projects"></Tab>
          <Tab  label='About'     href="/about"></Tab>
        </Tabs>
      </AppBar>
  )
}