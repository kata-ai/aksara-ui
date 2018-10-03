import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import '@kata-kit/fonts/museo-sans-rounded.css';
import '@kata-kit/fonts/kata-icons.css';
import '@kata-kit/reset';

import Main from './main';
import configureStore from './store';

const { store, history } = configureStore();

ReactDOM.render(
  <AppContainer>
    <Main store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./main', () => {
    const NextMain = require('./main').default;
    ReactDOM.render(
      <AppContainer>
        <NextMain store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
