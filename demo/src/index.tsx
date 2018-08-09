// `@babel/polyfill` is needed for some features to work (e.g. )
import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import '@kata-kit/fonts/museo-sans-rounded.css';
import '@kata-kit/fonts/kata-icons.css';
import '@kata-kit/reset';

import Main from './main';

ReactDOM.render(
  <AppContainer>
    <Main />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./main', () => {
    const NextMain = require('./main').default;
    ReactDOM.render(
      <AppContainer>
        <NextMain />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
