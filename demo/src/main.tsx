import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import App from './modules/core/App';

const Main = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Main;
