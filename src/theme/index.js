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
        text: {
          primary: '#1D1D1F'
        },
      }
      : {
        primary: {
          main: '#202123'
        },
        secondary: {
          main: "#202123"
        },
        background: {
          paper: '#151515',
          toolbar: '#151515',
          drawer: "#202123"
        },
        drawer: {
          primary: '#fff'
        },
        text: {
          primary: '#fff'
        },
        props: {
          MuiButton: {
            variant: 'contained',
            color: 'primary'
          },
          MuiListItem: {
            color: '#FFF'
          },
          MuiToolbar: {
            color: '#FFF'
          }

        }
      })
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
      color: '#1D1D1F'
    },
    MuiTextField: {
      variant: 'outlined',
      fullWidth: true,
      color: "#FFF"
    },
    MuiListItem: {
      color: '#FFF'
    }
  }
});



export default getDesignTokens;