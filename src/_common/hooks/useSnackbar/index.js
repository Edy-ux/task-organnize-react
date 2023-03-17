import useSnackbarContext from '_common/components/Snackbar/context/useSnackbarContext';

const useSnackbar = () => {


  const { setSnackbarState} = useSnackbarContext();
   
  const snackbar = (message) => setSnackbarState({ open: true, message });

  const snackbarSuccess = (message = 'Operação efetuada com sucesso!') => setSnackbarState({ open: true, message });

  const snackbarError = (message = 'Ops! Ocorreu um erro, tente novamente!') => setSnackbarState({ open: true, message });

  return {
    snackbar,
    snackbarSuccess,
    snackbarError
  };
};

export default useSnackbar;