import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from '@shopify/polaris';

import App from './App';
import logo from './assets/img/Inner.svg';

import '@shopify/polaris/dist/styles.css';

const theme = {
  colors: {
    primary: '#008060',
    topBar: {
      background: '#fff',
      backgroundLighter: '#F4F6F8',
      backgroundDarker: '#DFE3E8',
      border: '#C4CDD5',
      color: '#212B36',
    },
  },
  logo: {
    width: 180,
    topBarSource: logo,
    url: '/',
    accessibilityLabel: 'Shoppies',
  },
};

const app = (
  <React.StrictMode>
    <AppProvider features={{ newDesignLanguage: true }} theme={theme}>
      <App />
    </AppProvider>
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));
