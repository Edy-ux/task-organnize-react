import { SnackbarContextProvider } from '_common/components/Snackbar/context/SnackbarContext';
import MainRoutes from './main.routes';

export default function App() {
  return (
    <>
      <SnackbarContextProvider>
        <MainRoutes />
      </SnackbarContextProvider>
    </>
  );
}
