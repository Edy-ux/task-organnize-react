import { SnackbarContextProvider } from '_common/components/Snackbar/context/SnackbarContext';
import MainRoutes from './main.routes';
import './index.css';

import { ColorModeContext } from './theme/context/theme-context';
import { ThemeProvider } from '@material-ui/core/styles';
import { useContext, useEffect } from 'react';
import { getUsers } from '_common/features/users/userSlice';
import { useDispatch } from 'react-redux';

export default function App() {
  const { theme } = useContext(ColorModeContext);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
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
