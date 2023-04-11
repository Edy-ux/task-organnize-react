import { CssBaseline } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'store';
import ProviderColorMode from 'theme/context/theme-context';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ProviderColorMode>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProviderColorMode>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
