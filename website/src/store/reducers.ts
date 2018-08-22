import { Reducer, combineReducers } from 'redux';

import packages from './packages/reducer';
import { RootStore } from '../types/app';

const reducers: Reducer<RootStore> = combineReducers({
  packages
});

export default reducers;
