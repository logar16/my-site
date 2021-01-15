import { createMuiTheme } from '@material-ui/core/styles';
import {blue, teal} from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: blue[500]
    },
    secondary: {
      main: teal['A400']
    },
    background: {
      default: '#212121'
    }
  },
  typography: {
    fontFamily: ['Verdana', '"Consolas"', 'Courier New'].join(',')
    },
})

export default theme;