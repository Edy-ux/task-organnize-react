import { useEffect, useMemo, useState } from 'react';
import { SnackbarContextProvider } from '_common/components/Snackbar/context/SnackbarContext';
import MainRoutes from './main.routes';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import './index.css';

import getDesignTokens from 'theme';
import { getUsers } from '_common/features/users/usersSlice';
export default function App() {
  // const { theme } = useContext(ColorModeContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  const [darkMode, setDarkMode] = useState('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setDarkMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      }
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(darkMode)), [darkMode]);

  return (
    <div className="app">
      <ThemeProvider {...{ theme }}>
        <SnackbarContextProvider>
          <MainRoutes />
        </SnackbarContextProvider>
      </ThemeProvider>
    </div>
  );
}
