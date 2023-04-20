
const getDesignTokens = (mode) => ({
  palette: {
    mode: mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#083796',
            contrastText: '#fff'
          },
          secondary: {
            main: '#08967D'
          },
         
        }
      : { 
          primary: {
            main: '#202123',  
            contrastText: '#fff',
          },
          secondary: {
            main:'#202123',
            contrastText: '#000',
          },
          background: {
            paper: '#151515',
            toolbar:  '#151515',
            drawer: '#202123',
          },
          text: {
            primary: "#ccc",
          },
          input: {
            color: "#5F8"
          }
        })
  },
  props: {
    MuiButton: {
      variant: 'contained',
      color: 'primary'
    },
    MuiTextField: {
      variant: 'outlined',
      fullWidth: true
    },
    MuiListItem: {
      color: '#FFF'
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
      '"Segoe UI Symbol"'
    ].join(','),
    htmlFontSize: 17
  },

  shape: {
    borderRadius: 3
  },


  
});

export default getDesignTokens;


/* 
const getDesignTokens = () => ({
 Palete values for light theme
  palette: {
        primary: {
          main: '#083796',
        },
        secondary: {
          main: '#08967D'
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
            '"Segoe UI Symbol"'
          ].join(','),
          htmlFontSize: 17
        },

        shape: {
          borderRadius: 3
        },
        props: {
          MuiButton: {
            variant: 'contained',
            color: 'primary'
          },
          MuiTextField: {
            variant: 'outlined',
            fullWidth: true
          },
          MuiListItem: {
            color: '#FFF'
          }
        }

  }
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#083796',
      contrastText: '#fff'
    },
    secondary: {
      main: '#08967D'
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
      '"Segoe UI Symbol"'
    ].join(','),
    htmlFontSize: 17
  },

  shape: {
    borderRadius: 3
  },
  props: {
    MuiButton: {
      variant: 'contained',
      color: 'primary'
    },
    MuiTextField: {
      variant: 'outlined',
      fullWidth: true
    },
    MuiListItem: {
      color: '#FFF'
    }
  }
}); 



export default getDesignTokens;

*/
