import { SnackbarContextProvider } from '_common/components/Snackbar/context/SnackbarContext';
import MainRoutes from './main.routes';
/* import './index.css';
 */
  import { ColorModeContext } from './theme/context/theme-context';
import { ThemeProvider } from '@material-ui/core/styles';
import { useContext } from 'react';

export default function App() {
  const { theme } = useContext(ColorModeContext);

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
