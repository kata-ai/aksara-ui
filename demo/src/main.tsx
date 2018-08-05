import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import KataKitThemeProvider from '@kata-kit/theme';

import App from './modules/core/App';

const Main = () => (
  <KataKitThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </KataKitThemeProvider>
);

export default Main;
