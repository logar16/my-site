import React from "react";
import { Grid, Snackbar } from "@material-ui/core";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Contact() {
  const [open, setOpen] = React.useState(false);

  const phone = "(435) 668-2254";
  const email = "loganbjones16@gmail.com";

  const phoneHandler = () => {
    navigator.clipboard.writeText(phone);
    setOpen(true);
  }
  const emailHandler = () => {
    navigator.clipboard.writeText(email);
    setOpen(true);
  }

  return (
    <div>

      <Grid  container  justify="center">
        <Grid item>
          <List dense>
            <ListItemLink href="https://www.google.com/maps/place/Medford,+OR/">
              <ListItemIcon>
                <HomeIcon color="primary"/>
              </ListItemIcon>
              <ListItemText primary="Medford, OR" />
            </ListItemLink>
            <ListItem button onClick={phoneHandler}>
              <ListItemIcon>
                <PhoneIcon color="primary"/>
              </ListItemIcon>
              <ListItemText primary={phone} />
            </ListItem>
            <ListItem button onClick={emailHandler}>
              <ListItemIcon>
                <EmailIcon color="primary"/>
              </ListItemIcon>
              <ListItemText primary={email} />
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
      <Snackbar open={open} onClose={() => setOpen(false)} autoHideDuration={3000} >
        <Alert  severity="success">
          Copied to clipboard!
        </Alert>
      </Snackbar>
    </div>
  );
}


function ListItemLink(props) {
  return <ListItem button component="a" target="_blank" {...props} />;
}