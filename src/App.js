import { SnackbarContextProvider } from '_common/components/Snackbar/context/SnackbarContext';
import MainRoutes from './main.routes';
import * as React from 'react';
import './index.css';
export default function App() {
  return (
    <div className="app">
      <SnackbarContextProvider>
        <MainRoutes />
      </SnackbarContextProvider>
    </div>
  );
}
