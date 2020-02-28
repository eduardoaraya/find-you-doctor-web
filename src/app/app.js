import React from 'react';

import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import GlobalStyle from './globals-style';
import Routes from './routes';

const alertOptions = {
  position: positions.BOTTOM_RIGHT,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE,
};

const App = () => (
  <AlertProvider template={AlertTemplate} {...alertOptions}>
    <GlobalStyle />
    <Routes />
  </AlertProvider>
);

export default App;
