import { CssBaseline } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ProviderColorMode from 'theme/context/theme-context';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ProviderColorMode>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProviderColorMode>
  </React.StrictMode>,
  document.getElementById('root')
);
