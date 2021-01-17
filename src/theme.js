import { createMuiTheme } from '@material-ui/core/styles';
import {blue, teal} from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: blue[500]
    },
    secondary: teal,
    background: {
      default: '#212121'
    }
  },
  typography: {
    fontFamily: ['Verdana', '"Consolas"', 'Courier New'].join(',')
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
          color: blue[500],
        },
      }
    }
  }
})

export default theme;