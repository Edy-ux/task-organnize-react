import { SnackbarContextProvider } from '_common/components/Snackbar/context/SnackbarContext';
import MainRoutes from './main.routes';
import * as React from 'react'
export default function App() {
  return (
  <React.Fragment>
       <SnackbarContextProvider>
         <MainRoutes />
       </SnackbarContextProvider>
  </React.Fragment>
   
  );
}
