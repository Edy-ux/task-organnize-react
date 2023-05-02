import { lazy, useMemo, useState } from 'react';
import { SnackbarContextProvider } from '_common/components/Snackbar/context/SnackbarContext';
import MainRoutes from './main.routes';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import getDesignTokens from 'theme';
import './index.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import LazyLoading from '_common/components/LazyLoading/LazyLoading';
const RegisterRoutes = lazy(() => import('_common/pages/Register/register.routes'));
const LoginRoutes = lazy(() => import('_common/pages/Login/login.routes'));

export default function App() {
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
          {!true ? (
            <MainRoutes />
          ) : (
            <>
              <Switch>
                <Route path="/login" component={LazyLoading(LoginRoutes)} />
              </Switch>
              <Switch>
                <Route exact="true" path="/sign-up" component={LazyLoading(RegisterRoutes)} />
              </Switch>

              <Redirect to="/login" />
            </>
          )}
        </SnackbarContextProvider>
      </ThemeProvider>
    </div>
  );
}
