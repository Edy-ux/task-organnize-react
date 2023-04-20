import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  paper: {
    border: 'rgba(0, 0, 0, 0.1)',
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
    width: '35rem',
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: 30
    
  },

  input: {
    paddingLeft: '0.99rem',
    width: '100%',
    borderRadius: 30,
  },
  wrapperIcons: {
    display: 'flex',
    alignItems: 'center'
  },
  searchIcon: {
    height: 20,
    width: 20,
    background: 'transparent'
  },

  focused: {
    outline: 'none',
    boxShadow: '0px 0px 1px #767676, 0px 0px 2px #3f3f3f, 0px 0px 1px #0b0b0b',
  }
}));

export default useStyles;
