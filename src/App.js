import React, {useState} from "react";
import {
  Switch,
  Route,
  useLocation,
  useHistory
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
  'experience',
  'projects',
  'about',
]

function NavBar() {
  let path = useLocation().pathname.split('/')[1];
  let index = Math.max(0, locations.indexOf(path));
  const [value, setValue] = useState(index);

  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    window.scrollTo({top: 0});
    if (newValue != value) {
      if (newValue > 0)
        history.push(`/${locations[newValue]}`);
      else
        history.push(`${locations[newValue]}`);
    }
  }
  console.log(`path: ${path}, index: ${index}, value: ${value}`);

  if (index !== value) {
    setValue(index)
  }

  const style = { fontSize: 24 };
  return (
    <AppBar position="sticky">
      <Tabs value={value} onChange={handleChange}>
        <Tab  label='Home'        style={style}/>
        <Tab  label='Experience'  style={style}/>
        <Tab  label='Projects'    style={style}/>
        <Tab  label='About'       style={style}/>
      </Tabs>
    </AppBar>
  )
}