import * as React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import useStyles from './SnackBarstyle';
import Button from '@material-ui/core/Button';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SnackBarView = ({ open, handleClose, handleOpen, message }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
     {/*  <Button variant="outlined" onClick={handleOpen}>
        Open success snackbar
      </Button> */}
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SnackBarView;
