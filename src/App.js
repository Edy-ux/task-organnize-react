import { SnackbarContextProvider } from '_common/components/Snackbar/context/SnackbarContext';
import MainRoutes from './main.routes';
import './index.css';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { useMemo, useState } from 'react';
import getDesignTokens from 'theme';

export default function App() {
 // const { theme } = useContext(ColorModeContext);
 const [darkMode, setDarkMode] = useState("light");

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
