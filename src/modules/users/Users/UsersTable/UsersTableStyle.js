import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',

  },
  table: {
    padding: theme.spacing(3),

  }
}));

export default useStyles;
