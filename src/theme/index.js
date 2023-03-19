import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2d2f31',
      contrastText: '#fff'
    },
    secondary: {
      main: '#2d2f31',
    }
  },
  typography: {
    fontFamily: [
      'Open Sans', 
      'sans-serif',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    htmlFontSize: 17,
  },

  shape: {
    borderRadius: 3,

  },
  props: {
    MuiButton: {
      variant: 'contained',
      color: 'primary',
    },
    MuiTextField: {
      variant: 'outlined',
      fullWidth: true,

    },
    MuiListItem: {
      color: '#FFF'
      
    }
    
  } 
});

window['theme'] = theme;

export default theme;
