import { createContext, memo, useState, useContext } from 'react';
import useSnackbar from '_common/hooks/useSnackbar';

const SnackbarContext = createContext(null);
SnackbarContext.displayName = 'SnackbarContext';


export const SnackbarContextProvider = memo(({ children }) => {
  
  const [snackbarState, setSnackbarState] = useState({ open: false});
  return (
    <SnackbarContext.Provider
      value={{
        snackbarState,
        setSnackbarState,
    
      }}>
      {children}
    </SnackbarContext.Provider>
  );
});


/* Hooks for anywhere want use */
const useSnackbarContext = () => useContext(SnackbarContext);

export default useSnackbarContext;
