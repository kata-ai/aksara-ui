import { createStore, compose, applyMiddleware, Store } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { createBrowserHistory } from 'history';

import reducers from './reducers';
import { RootStore } from '../types/app';

const devTools = window['__REDUX_DEVTOOLS_EXTENSION__'];
const history: History = createBrowserHistory();

export default function configureStore(initialState?: RootStore) {
  const store: Store<RootStore> = createStore(
    connectRouter(history)(reducers),
    compose(
      applyMiddleware(routerMiddleware(history)),
      devTools ? devTools() : (f: any) => f
    )
  );

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return { store, history };
}
