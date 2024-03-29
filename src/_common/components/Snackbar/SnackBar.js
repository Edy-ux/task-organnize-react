import SnackbarView from './SnackBarView';
import useSnackbarContext from '_common/components/Snackbar/context/SnackbarContext';
import useSnackbar from '_common/hooks/useSnackbar';

const Snackbar = () => {
  const { setSnackbarState, snackbarState } = useSnackbarContext();

  const { snackbarSuccess } = useSnackbar();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setSnackbarState({ open: false, error: null });
  };

  const handleOpen = () => snackbarSuccess();
  return <SnackbarView open={snackbarState.open} message={snackbarState.message} handleClose={handleClose} handleOpen={handleOpen} />;
};

export default Snackbar;
