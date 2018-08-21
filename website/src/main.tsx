import React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';

import { KataReset } from '@kata-kit/theme';

import App from './modules/core/App';
import { RootStore } from './types/app';

interface MainProps {
  store: Store<RootStore>;
  history: History;
}

const Main: React.SFC<MainProps> = ({ store, history }) => (
  <Provider store={store}>
    <KataReset>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </KataReset>
  </Provider>
);

export default Main;
