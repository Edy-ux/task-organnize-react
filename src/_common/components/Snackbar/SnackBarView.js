import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import useStyles from './SnackBarStyle';
import useSnackbarContext from './context/SnackbarContext';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SnackBarView = ({ open, handleClose, message }) => {
  const {
    snackbarState: { error }
  } = useSnackbarContext();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        {!error ? (
          <Alert onClose={handleClose} severity="success">
            {message}
          </Alert>
        ) : (
          <Alert onClose={handleClose} severity="error">
            {message}
          </Alert>
        )}
      </Snackbar>
    </div>
  );
};

export default SnackBarView;
