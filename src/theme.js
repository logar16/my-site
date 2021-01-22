import { createMuiTheme } from '@material-ui/core/styles';
import {blue, teal} from '@material-ui/core/colors';

const primary = blue;
const secondary = teal;

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: primary,
    secondary: secondary,
    background: {
      default: '#212121'
    }
  },
  typography: {
    fontFamily: ['Alegreya', 'Lora', 'Verdana', '"Consolas"', 'Courier New'].join(','),
    body1: {
      fontFamily: ['Lora', 'Alegreya', 'Verdana',].join(','),
    }
  },
  props: {
    MuiLink: {
      color: 'secondary',
    }
  },
  overrides: {
    MuiLink: {
      underlineHover: {
        '&:hover': {
          color: primary[500],
        },
      }
    }
  }
})

export default theme;