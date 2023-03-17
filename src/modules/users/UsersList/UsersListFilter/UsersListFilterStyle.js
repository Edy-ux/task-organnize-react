import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { width } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  paper: {
    width: '30rem',
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: 30,
  },

  input: {
    paddingLeft: '0.99rem',
    width: '100%'
  },
  iconButton: {
    padding: 10,
 
  },
  wraperIcons: {
   display: 'flex',
   alignItems: 'center'

  },
  searchIcon: {
    height: 28,
    width: 25,
   
  },
 
}));

export default useStyles;
