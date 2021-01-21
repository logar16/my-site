
import { Grid, Typography, makeStyles, Card, CardContent, CardActionArea, CardMedia } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import expImage from '../experience/coding.png'
import projImage from '../projects/ML-Agents-Banner.png'
import aboutImage from './profile-thin.jpg'


const useStyles = makeStyles({
  root: {
    padding: 10,
  },
  card: {
    height: '100%',
  },
  image: {
    height: 200,
  }
});


export default function PortalGrid() {
  const classes = useStyles();
  
  return (
    <Grid 
      container 
      justify='space-around'
      spacing={3} 
      className={classes.root}
    >
      <Item title='Experience'  link='/experience'  img={expImage}>
        My educational background and work experience.  If you want to know what I know, look here
      </Item>
      <Item title='Projects'  link='/projects'  img={projImage}>
        Projects I am working on to stay sharp outside of work and school
      </Item>
      <Item title='About' link='/about' img={aboutImage}>
        Information about me on a more personal level
      </Item>
    </Grid>
  );
}

function Item({title, link, img, children}) {
  return (
    <Grid item  xs={8} md={6} lg={4}>
      <GridCard title={title} link={link} img={img}>
        {children}
      </GridCard>
    </Grid>
  );
}

function GridCard({title, link, img, children}) {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    history.push(link);
  }

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.card}  onClick={handleClick}>
        <CardMedia  image={img} className={classes.image}>
          {/* <img src={img} className={classes.image} /> */}
        </CardMedia>
        <CardContent  className={classes.card}>
          <Grid container direction='column' justify='flex-start'>
            <Typography variant='h4'  align='center'>
              {title}
            </Typography>
            <Typography variant='body1' color='textSecondary'>
              {children}
            </Typography>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}