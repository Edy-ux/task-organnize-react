import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#083796',
      contrastText: '#fff'
    },
    secondary: {
      main: '#083796',
    }
  },
  typography: {
    fontFamily: [
      'Graphik', 'Graphik',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(',')
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

  }
});

window['theme'] = theme;

export default theme;
