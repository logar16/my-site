import React, {useState} from "react";
import {
  Switch,
  Route,
  Link,
  useLocation
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
      <Switch>
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
  '/#/experience',
  '/#/projects',
  '/#/about',
]

function NavBar() {
  let path = useLocation().pathname.split('/')[1]
  // console.log("path:", path)
  let index = Math.max(0, locations.indexOf(path))
  const [value, setValue] = useState(index)
  const handleChange = (event, newValue) => {
    setValue(newValue);
    // console.log(newValue);
  }
  const style = { fontSize: 24 };
  return (
    <AppBar position="sticky">
      <Tabs value={value} onChange={handleChange}>
        <Tab  label='Home'        to=""  component={Link} style={style}/>
        <Tab  label='Experience'  to="experience"  component={Link} style={style}/>
        <Tab  label='Projects'    to="projects"  component={Link} style={style}/>
        <Tab  label='About'       to="about" component={Link} style={style}/>
      </Tabs>
    </AppBar>
  )
}