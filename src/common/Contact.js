import React from "react";
import { Grid } from "@material-ui/core";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Contact() {
  return (
    <Grid  container  justify="center">
      <Grid item>
        <List dense>
          <ListItem>
            <ListItemIcon>
              <HomeIcon color="primary"/>
            </ListItemIcon>
            <ListItemText primary="Medford, OR" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PhoneIcon color="primary"/>
            </ListItemIcon>
            <ListItemText primary="(435) 668-2254" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <EmailIcon color="primary"/>
            </ListItemIcon>
            <ListItemText primary="loganbjones16@gmail.com" />
          </ListItem>
          <ListItemLink href="https://linkedin.com/in/loganbjones16">
            <ListItemIcon>
              <LinkedInIcon color="primary"/>
            </ListItemIcon>
            <ListItemText primary="linkedin.com/in/loganbjones16" />
          </ListItemLink>
          <ListItemLink href="https://github.com/logar16">
            <ListItemIcon>
              <GitHubIcon color="primary"/>
            </ListItemIcon>
            <ListItemText primary="github.com/logar16" />
          </ListItemLink>
        </List>
      </Grid>
    </Grid>
  );
}


function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}