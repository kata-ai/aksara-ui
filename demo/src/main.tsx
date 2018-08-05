import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// import { KataReset } from '@kata-kit/theme';
import App from './modules/core/App';

const Main = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Main;
